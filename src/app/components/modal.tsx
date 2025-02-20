"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

interface ModalProps {
  content: React.ReactNode
  onClose: () => void
}

function Modal({ content, onClose }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    };
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-transparent text-white w-[90vw] max-w-[700px] flex flex-col items-center justify-center"
        //onClick={(e) => e.stopPropagation()}
      >
        {content}
        
        <button 
          className="mt-8 px-[8px] py-[6px] backdrop-blur-lg bg-white/30 rounded-md text-[12px] border border-white/20 font-bold"
          onClick={onClose}
        >
          ESC
        </button>
      </div>
    </div>
  )
}

interface ModalTriggerProps {
  image?: {
    src: string;
    alt?: string;
  };
  label?: {
    text: string;
  };
  modalContent: React.ReactNode;
}

export default function ModalTrigger({ image, label, modalContent }: ModalTriggerProps) {
  const [showModal, setShowModal] = useState(false)

  if (image) {
    return (
      <>
        <div className="w-full aspect-square relative">
          <Image
            className="rounded-sm cursor-pointer" 
            src={image.src}
            layout="fill"
            objectFit="cover"
            alt={image.alt || ""}
            onClick={() => setShowModal(true)}
          />
        </div>

        {showModal && (
          <Modal
            content={modalContent}
            onClose={() => setShowModal(false)} 
          />
        )}
      </>
    )
  }
  if (label) {
    return (
      <>
        <button
          className="text-linkGray underline cursor-pointer focus:outline-none"
          onClick={() => setShowModal(true)}
        >
          {label.text}
        </button>

        {showModal && (
          <Modal
            content={modalContent}
            onClose={() => setShowModal(false)}
          />
        )}
      </>
    )
  }

  return null
}

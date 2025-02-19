"use client"

import Navbar from "../components/nav";
import Container from "../components/container";
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
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-transparent text-white w-[90vw] max-w-[700px] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {content}
        
        <button 
          className="mt-8 px-[8px] py-[6px] bg-white/25 rounded-md text-[13px] border-[0.5px] border-gray-400 font-bold"
          onClick={onClose}
        >
          ESC
        </button>
      </div>
    </div>
  )
}

interface ImageWithModalProps {
  imageSrc: string;
  modalContent: React.ReactNode
}

function ImageWithModal({ imageSrc, modalContent }: ImageWithModalProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="w-full aspect-square relative">
        <Image 
          className="rounded-sm cursor-pointer"
          src={imageSrc}
          layout="fill" 
          objectFit="cover" 
          alt=""
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

export default function Blog() {
  return (
    <Container>
      <Navbar page="work" />
      <div className="w-full grid grid-cols-2 gap-2">
        <ImageWithModal 
          imageSrc="/images/thumbnail.png"
          modalContent={
            <div className="w-full flex flex-col items-center gap-8 text-md">
                <video 
                  src="/demo.mp4"
                  className="w-full rounded-md"
                  controls
                  autoPlay
                  muted
                  loop
                />
                <p className="text-center">Smart Screenshot: Auto-name and organize your screenshots with AI</p>            
            </div>
          }
        />
      </div>
    </Container>
  )
}

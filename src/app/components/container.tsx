export default function Container({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex justify-center my-8 sm:my-14 mx-8">
        <div className="max-w-[600px] w-full flex flex-col gap-6">
          {children}
        </div>
      </div>
    )
}

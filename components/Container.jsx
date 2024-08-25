import Footer from "./Footer"

function Container({ children }) {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col gap-6 text-base px-6 my-6 sm:my-10 sm:w-max w-full flex-grow">
        {children}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Container

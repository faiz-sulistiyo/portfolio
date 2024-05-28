import { Spinner } from "@/components"
import React from "react"

const LoadingPage = () => {
  return (
    <div className="backdrop-blur-md overflow-hidden bg-white bg-opacity-60 text-spanish-gray flex justify-center items-center h-screen w-full fixed top-0 left-0 z-[99]">
      <Spinner />
    </div>
  )
}

export default LoadingPage

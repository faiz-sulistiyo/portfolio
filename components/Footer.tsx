import Link from "next/link"
import React from "react"
import {CiMail} from "react-icons/ci"
import {FaWhatsapp} from "react-icons/fa6"
import { IoMailOutline } from "react-icons/io5"

const Footer: React.FC = () => {
  return (
    <div className="w-[80%] mx-auto py-20 flex flex-col items-center gap-10">
      <h1 data-aos="fade-up" className="text-8xl max-lg:text-5xl font-bold self-start">
        Interested? <br />
        Get in touch with me in.
      </h1>
      <div className="flex gap-2">
        <Link
          href={""}
          aria-label="faiz-github"
          target="_blank"
          className="p-4 rounded-full border-2"
          data-aos="fade-right"
        >
          <IoMailOutline size={24}/>
        </Link>
        <Link
          href={""}
          aria-label="faiz-github"
          target="_blank"
          className="p-4 rounded-full border-2"
          data-aos="fade-left"
        >
          <FaWhatsapp size={24}/>
        </Link>
      </div>
    </div>
  )
}

export default Footer

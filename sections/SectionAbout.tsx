import {About} from "@/views/Home"
import Image from "next/image"
import React from "react"

type SectionAboutProps = {
  data: About
}
const SectionAbout: React.FC<SectionAboutProps> = ({data}) => {
  return (
    <section
      id="about"
      className="w-[80%] mx-auto flex flex-col gap-8 justify-start items-start"
    >
      <h1 className="text-xl" data-aos="fade-down">About Me</h1>
      <div className="flex items-start max-lg:flex-col-reverse gap-10 justify-between">
        <div className="flex flex-col gap-6" data-aos="fade-right">
          <p className="lg:text-3xl text-xl font-bold">{data.paragraph_1}</p>
          <p className="lg:text-3xl text-xl font-bold">{data.paragraph_2}</p>
        </div>
        <div className="relative rounded-md overflow-hidden lg:w-96 w-full h-96 flex-shrink-0" data-aos="fade-left">
          <Image
            alt="Faiz Sulistiyo"
            src={data?.image ?? ""}
            sizes="384px"
            style={{objectFit: "contain"}}
            fill
          />
        </div>
      </div>
    </section>
  )
}

export default SectionAbout

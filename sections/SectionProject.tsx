"use client"
import {Project} from "@/views/Home"
import Image from "next/image"
import Link from "next/link"
import React, {useEffect, useMemo, useRef, useState} from "react"

type SectionProjectProps = {
  data: Project[]
}
const SectionProject: React.FC<SectionProjectProps> = ({data}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const containerHeight = useMemo(
    () => (!isOpen ? 320 + 160 : contentRef.current?.scrollHeight),
    [isOpen, contentRef],
  )

  return (
    <section className="flex flex-col gap-20">
      <div className="m-scroll h-[300px] max-lg:h-[160px]" data-aos="fade-down">
        <div className="m-scroll__title text-7xl max-lg:text-5xl font-bold">
          <div>
            <div id="featured-work" className="flex gap-6 mx-3 items-center">
              Featured Work{" "}
              <div className="h-3 w-3 bg-black rounded-full flex-shrink-0" />{" "}
              Featured Work{" "}
              <div className="h-3 w-3 bg-black rounded-full flex-shrink-0" />{" "}
              Featured Work{" "}
              <div className="h-3 w-3 bg-black rounded-full flex-shrink-0" />
            </div>
            <div id="featured-work" className="flex gap-6 mx-3 items-center">
              Featured Work{" "}
              <div className="h-3 w-3 bg-black rounded-full flex-shrink-0" />{" "}
              Featured Work{" "}
              <div className="h-3 w-3 bg-black rounded-full flex-shrink-0" />{" "}
              Featured Work{" "}
              <div className="h-3 w-3 bg-black rounded-full flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={contentRef}
        className={`relative w-[80%] overflow-hidden mx-auto grid max-lg:grid-cols-1 grid-cols-3 gap-4`}
        style={{
          maxHeight: containerHeight,
          transition: "max-height 1500ms ease-in",
        }}
      >
        {data.map((item) => {
          return (
            <Link
              target="_blank"
              href={item.redirect_link ?? ""}
              key={item.id}
              data-aos="fade-up"
              className={`${
                !item.redirect_link && "cursor-default"
              } h-80 border-2 rounded-lg overflow-hidden bg-slate-300 transition-colors relative`}
            >
              {item?.project_images?.[0]?.image && (
                <Image
                  key={item.id}
                  src={item?.project_images?.[0]?.image ?? ""}
                  alt={item?.project_images?.[0]?.image ?? ""}
                  fill
                  sizes="1200px"
                  style={{objectFit: "cover"}}
                  loading="lazy"
                />
              )}
              <div
                className="absolute bottom-0 left-0 z-20 p-4 h-full w-full flex flex-col gap-2 items-start justify-end text-white opacity-0 hover:opacity-100 transition-opacity"
                style={{
                  backgroundImage:
                    `linear-gradient(${item.color}, #9198e5)` ?? "#ffffff",
                }}
              >
                <h1 className="font-bold text-lg">{item.name}</h1>
                <p>{item.description}</p>
              </div>
            </Link>
          )
        })}
        {!isOpen && (
          <div className="h-full w-full z-20 absolute bottom-0 bg-gradient-to-t from-white flex justify-center items-end p-6">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-white border-2 rounded-full px-4 py-2"
            >
              Read More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default SectionProject

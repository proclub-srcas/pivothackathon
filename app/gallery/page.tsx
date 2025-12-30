import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import { RedBand } from "@/components/header-red-band"
import Image from "next/image"

export default function Gallery() {
  return (
    <section className="w-full min-h-screen py-12 relative bg-linear-to-bl from-[#4E0088] to-[#180029] overflow-hidden">
      <RedBand />

      <div className="w-full h-full top-36 z-20 px-4 pointer-events-none absolute">
        <div className="relative size-full">
          <div className="absolute left-0 top-0">
            <Image
              src="/Gallery/cracks left.svg"
              alt="HB3 Logo"
              height={200}
              width={200}
              className="h-full -translate-x-3.5"
              priority
            />
          </div>
          <div className="absolute right-0 top-0">
            <Image
              src="/Gallery/cracks right.svg"
              alt="HB3 Logo"
              height={350}
              width={350}
              className="h-full translate-x-4 -translate-y-3"
              priority
            />
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <Image
              src="/Gallery/cracks middle.svg"
              alt="HB3 Logo"
              height={350}
              width={350}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
      <div className="z-10 w-full mt-6 lg:mt-32 px-4 md:px-12 xl:px-20">
        <div className="size-full rounded-3xl overflow-hidden">
          <GalleryGrid />
        </div>
      </div>

      <div className="h-[200px] w-full relative z-0">
        <div className="relative w-full h-[150%]">
          <Image
            src="/Gallery/White Streaks.svg"
            alt="Gallery Bottom Design"
            fill
            className="w-full object-cover"
            priority
          />
        </div>
      </div>

      <div className="h-[450px] w-full bg-gradient-to-r from-[#8A00DA] to-[#BA45E8] border-y-4 border-white z-20 -translate-y-6 relative flex items-center justify-center">
        <div className="absolute top-[-140px] left-1/2 -translate-x-1/2 w-full h-48">
          <Image
            src="/Gallery/our committee.svg"
            alt="Footer Ornament"
            fill
            className="w-full object-contain"
            priority
          />
        </div>
        <div className="absolute size-full -z-10">
          <Image
            src="/Gallery/scrolling bg.png"
            alt="Footer Ornament Background"
            fill
            className="w-full object-cover opacity-50"
            priority
          />
        </div>
        <div className="h-[300px] w-full max-w-2xl border-4 border-white rounded-3xl bg-black relative overflow-hidden">
          <Image
            src="/Gallery/committee.png"
            alt="Our Committee Photo"
            fill
            className="w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import { RedBand } from "@/components/header-red-band"
import Image from "next/image"

export default function Gallery() {
  return (
    <section className="w-full min-h-screen py-12 relative bg-white">
      <RedBand />

      <div className="w-full h-[75vh] top-36 z-20 px-4 pointer-events-none fixed lg:absolute">
        <div className="relative size-full">
          <div className="absolute left-16 top-0 hidden md:block">
            <Image
              src="/Gallery/hb3.svg"
              alt="HB3 Logo"
              height={120}
              width={120}
              priority
            />
          </div>
          <div className="absolute right-16 top-0 hidden md:block">
            <Image
              src="/Gallery/Laptop.png"
              alt="HB3 Logo"
              height={350}
              width={350}
              priority
            />
          </div>

          <div className="absolute left-0 bottom-0">
            <Image
              src="/Gallery/crab.png"
              alt="HB3 Logo"
              height={200}
              width={200}
              className="size-[120px] md:size-[150px] xl:size-[200px]"
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

      <Footer />
    </section>
  )
}

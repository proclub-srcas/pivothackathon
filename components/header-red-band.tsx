import Image from "next/image"

export function RedBand() {
  return (
    <div className="h-20 w-full bg-[#E91B2F] overflow-hidden relative">
      <div className="h-full w-full py-1">
        <div className="h-full w-full bg-[url('/red-band-design.svg')] bg-repeat-x bg-size-[auto_100%] bg-left" />
      </div>

      <div className="absolute inset-0 py-1 px-6 md:px-12 xl:px-20">
        <div className="h-full w-full flex items-center justify-between gap-4">
          <p className="text-white font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap uppercase">
            throwback to hackbyte 3.0
          </p>

          <div className="h-full shrink-0">
            <Image
              src="/Gallery/hb4.svg"
              alt="HackByte 3.0"
              width={160}
              height={80}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

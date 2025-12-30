import Image from "next/image"

export function RedBand() {
  return (
    <div className="h-24 w-[110%] -translate-x-[5%] bg-[#E91B2F] overflow-visible relative -rotate-3 mt-6">
      <div className="h-full w-full py-1">
        <div className="h-full w-full bg-[url('/red-band-design.svg')] bg-repeat-x bg-size-[auto_100%] bg-left" />
      </div>

      <div className="absolute inset-0 py-1 px-12 md:px-20 xl:px-36">
        <div className="h-full w-full flex items-center justify-between gap-4">
          <div className="h-full shrink-0">
            <Image
              src="/Gallery/highlights-text.svg"
              alt="HackByte 3.0"
              width={160}
              height={100}
              className="h-[120%] w-auto object-contain -translate-y-2"
              priority
            />
          </div>

          <div className="h-full shrink-0">
            <Image
              src="/Gallery/band-text.svg"
              alt="HackByte 3.0"
              width={160}
              height={100}
              className="h-full w-auto object-contain"
              priority
            />
          </div>

          <div className="h-[250%] shrink-0">
            <Image
              src="/Gallery/hb3.svg"
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

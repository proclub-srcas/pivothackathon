import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full h-20 mt-6 flex items-center justify-end px-6">
      <Image
        src="/tpc_and_iiit_logo_colored.svg"
        alt="footer logo"
        width={220}
        height={60}
        className="h-full w-auto object-contain"
      />
    </footer>
  )
}

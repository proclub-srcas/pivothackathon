import { kanit, poppins } from "@/app/layout";
import Image from "next/image";

const MailingList = () => {
  return (
    <div className="w-full min-h-screen relative bg-[linear-gradient(206deg,_#4E0088_13.13%,_#180029_86.33%)] overflow-hidden flex flex-col items-center justify-center py-20">
      <div className="absolute top-[-50px] md:top-[-180px] left-[-20%] md:left-[-40px] w-[80vw] md:w-[620px] aspect-square z-0 opacity-60 md:opacity-100 pointer-events-none">
        <Image
          src="/MailingList/lightning_left.svg"
          alt="lightning-effect"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute top-[-50px] md:top-[-190px] right-[-20%] md:right-[-10px] w-[80vw] md:w-[620px] aspect-square z-0 opacity-60 md:opacity-100 pointer-events-none">
        <Image
          src="/MailingList/lightning_right.svg"
          alt="lightning-effect"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute top-0 md:top-[-90px] left-[5%] md:left-[100px] z-10 pt-10 md:pt-16 pointer-events-none">
        <div className="relative w-[120px] h-[120px] md:w-[210px] md:h-[210px] rotate-[-147]">
          <Image
            src="/MailingList/siren.svg"
            alt="soundhorn-svg"
            fill
            className="object-contain origin-center"
          />
        </div>
      </div>

      <div className="absolute top-[100px] md:top-[50px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[93px] z-20 w-[90%] md:w-[800px] h-[150px] md:h-[240px] pointer-events-none">
        <Image
          src="/MailingList/join_newsletter.svg"
          alt="Join Our Newsletter"
          fill
          className="object-contain rotate-[-4deg] drop-shadow-[0_2.878px_0_rgba(0,0,0,0.25)]"
        />
      </div>

      <div className={`mt-[180px] md:mt-[250px] w-full flex flex-col items-center px-4 md:px-6 relative z-30 ${kanit.className}`}>
        <div className="relative w-full max-w-[850px]">
          <div className="relative w-full z-20 bg-[linear-gradient(97deg,_#570089_-1.22%,_#A200FF_49.96%,_#210035_142.76%)] border-[4px] md:border-[11px] border-white rounded-[20px] p-2 md:p-3 shadow-2xl">
            <div className="absolute top-0 left-0 -translate-x-[40%] -translate-y-[35%] w-[200px] md:w-[clamp(370px,8vw,100px)] aspect-[2.2/1] z-30 pointer-events-none transform rotate-[-33.74]">
              <Image
                src="/MailingList/bandaid.svg"
                alt="Decoration"
                fill
                className="object-contain drop-shadow-md"
              />
            </div>

            <div className="flex flex-col items-center w-full pt-1 pb-4 md:px-4">
              <div className="relative w-[280px] h-[60px] md:w-[600px] md:h-[120px] mb-1">
                <Image
                  src="/MailingList/join_maillist.svg"
                  alt="Be a part of our mailing list"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="bg-white rounded-[24px] w-full py-8 px-5 md:py-12 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 shadow-[0_10px_0_0_rgba(0,0,0,0.25)]">
                <ul className="space-y-4 flex-1 w-full">
                  {[
                    "Be the first ones to register for HackByte 4.0",
                    "Get updates about your application status",
                    "Get notified for exciting events!"
                  ].map((text, i) => (
                    <li key={i} className="flex">
                      <div className="mr-3 flex-shrink-0">
                        <Image src="/MailingList/bullet_p.svg" width={20} height={20} alt="bullet" className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <span className={`text-[#6b21a8] text-base md:text-xl leading-tight ${poppins.className} ${i === 2 ? "font-black" : "font-light"}`}>
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex-shrink-0 relative w-[100px] h-[70px] mr-5 md:w-[140px] md:h-[100px]">
                  <Image
                    src="/hb4_warpped.svg"
                    alt="HB 4.0 Logo"
                    fill
                    className="object-contain scale-150"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[850px] mt-8 relative">
          <div className="relative rounded-full p-[5px] bg-[#7A00D4] shadow-[0_10px_0_rgba(0,0,0,0.35)]">
            <div className="relative flex items-center bg-white rounded-full h-14 md:h-20 pl-6 md:pl-8 pr-[120px] md:pr-[160px]">
              <input
                type="email"
                placeholder="Enter your email here"
                className={`
                  w-full bg-transparent outline-none
                  text-base md:text-lg
                  text-gray-700
                  placeholder:text-gray-400
                  font-light
                  ${kanit.className}
                `}
              />

              <button
                className="
                  absolute right-2
                  h-10 md:h-16
                  px-6 md:px-10
                  rounded-full
                  bg-[linear-gradient(104deg,_#FFEC1A_24.89%,_#FFE60B_56.78%,_#FFE41A_108.63%)]
                  text-[#2B0040]
                  font-extrabold
                  text-sm md:text-lg
                  transition-transform
                  active:scale-90
                  shadow-[0_4px_0_rgba(0,0,0,0.25)]
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailingList

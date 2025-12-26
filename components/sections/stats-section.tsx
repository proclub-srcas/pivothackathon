import React from "react"
import Image from "next/image"

async function StatsSection() {
  const stats = [
    {
      number: "2437",
      label: "Registrations",
      description: "2400+ registrations from across the country.",
    },
    {
      number: "412",
      label: "Participants",
      description: "400+ participants joined the offline hackathon!",
    },
    {
      number: "100+",
      label: "Volunteers",
      description: "To help you, get the best out of HackByte.",
    },
    {
      number: "100+",
      label: "Projects",
      description: "Innovative submissions from various domains.",
    },
  ]

  return (
    <section className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] max-h-[90vh] w-full overflow-x-visible bg-black">
      <div className="w-full h-32 absolute top-0 z-10">
        <Image
          src={"/stats-upper.svg"}
          alt="glass design"
          className="w-full -mt-[25%] "
          width={100}
          height={100}
        />
      </div>

      <div className="w-full h-full absolute z-0 overflow-hidden">
        <Image
          src={"/stats-bg.svg"}
          alt="glass design"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </div>

      <div className="w-full h-32 absolute bottom-0 z-10 -mb-24 md:-mb-16 lg:-mb-6 xl:mb-0">
        <Image
          src={"/stats-bottom.svg"}
          alt="glass design"
          className="w-full"
          width={100}
          height={100}
        />
      </div>

      <div className="size-full flex justify-center items-center px-4 py-8 md:py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl">
          <Image
            src={"/stats-registrations.svg"}
            alt="glass design"
            className="w-full h-auto max-w-[150px] md:max-w-50 xl:max-w-[300px] mx-auto"
            width={300}
            height={300}
          />
          <Image
            src={"/stats-participants.svg"}
            alt="glass design"
            className="w-full h-auto max-w-[150px] md:max-w-50 xl:max-w-[300px] mx-auto"
            width={300}
            height={300}
          />
          <Image
            src={"/stats-volunteers.svg"}
            alt="glass design"
            className="w-full h-auto max-w-[150px] md:max-w-[200px] xl:max-w-[300px] mx-auto"
            width={300}
            height={300}
          />
          <Image
            src={"/stats-projects.svg"}
            alt="glass design"
            className="w-full h-auto max-w-[150px] md:max-w-[200px] xl:max-w-[300px] mx-auto"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  )
}

export default StatsSection

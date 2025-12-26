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
    <section className="relative h-[80vh] max-h-[90vh] w-full overflow-x-visible bg-black">
      <div className="w-full h-32 absolute top-0 z-10">
        <Image
          src={"/stats-upper.svg"}
          alt="glass design"
          className="w-full -mt-81.25"
          width={100}
          height={100}
        />
      </div>

      <div className="w-full h-full absolute z-0 overflow-hidden">
        <Image
          src={"/stats-bg.svg"}
          alt="glass design"
          className="w-full -mt-81.25"
          width={100}
          height={100}
        />
      </div>

      <div className="w-full h-32 absolute bottom-0 z-10">
        <Image
          src={"/stats-bottom.svg"}
          alt="glass design"
          className="w-full"
          width={100}
          height={100}
        />
      </div>

      <div className="size-full flex justify-center items-center gap-6">
        <Image
          src={"/stats-registrations.svg"}
          alt="glass design"
          width={300}
          height={300}
        />
        <Image
          src={"/stats-participants.svg"}
          alt="glass design"
          width={300}
          height={300}
        />{" "}
        <Image
          src={"/stats-volunteers.svg"}
          alt="glass design"
          width={300}
          height={300}
        />{" "}
        <Image
          src={"/stats-projects.svg"}
          alt="glass design"
          width={300}
          height={300}
        />
      </div>
    </section>
  )
}

export default StatsSection

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

interface HumanCardProps {
  name: string;
  role: string;
  image: StaticImageData;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export default function HumanCard({
  name,
  role,
  image,
  linkedin,
  twitter,
  github,
}: HumanCardProps) {
  return (
    <div className="w-full h-full flex flex-col gap-[0.75em]">
      <div className="relative w-full aspect-[253/253] rounded-[1.25em] bg-white overflow-hidden">
        <Image src={image} alt={name} fill placeholder="blur" className="object-cover"/>
      </div>
      <div className="flex flex-col gap-[0.25em] items-start pl-1">
        <p
          className="
            text-[#777777]
            font-Poppins
            text-[1em]
            font-semibold
            leading-[140%]
          "
        >
          {role}
        </p>
        <p
          className="
            text-white
            font-Kanit
            text-[1.75em]
            font-semibold
            leading-[140%]
          "
        >
          {name}
        </p>
        <div className="flex gap-[0.5em] items-start text-[#777777]">
          {linkedin && (
            <Link href={linkedin} target="_blank">
              <LinkedInLogoIcon className="w-[1em] h-[1em]" />
            </Link>
          )}
          {twitter && (
            <Link href={twitter} target="_blank">
              <TwitterLogoIcon className="w-[1em] h-[1em]" />
            </Link>
          )}
          {github && (
            <Link href={github} target="_blank">
              <GitHubLogoIcon className="w-[1em] h-[1em]" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

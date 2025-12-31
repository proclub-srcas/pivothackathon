import HumansCard from "@/components/HumansCard/Card";
import eshaan from "@/public/eshaan.webp"; 

export default function Humans(){
    return(
        <div className="m-10 p-10 w-[298px]">
            <HumansCard
            key={0}
            name="Eshaan Modi"
            role="Organizer"
            image={eshaan}
            linkedin="https://linkedin.com/in/johndoe"
            twitter="https://twitter.com/johndoe"
            github="https://github.com/johndoe"
        />
        </div>
        
    )
}
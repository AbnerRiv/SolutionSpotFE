import type { OurTeamProps} from "@/components/react/interfaces";
import Whatssap from "@/components/react/icons/Whatssap";
import { useEffect, useState } from "react";

export default function OurTeam({ sellers, title}: OurTeamProps){
    
    const sellersPath = 'images/sellers/'
    const [iconSide, setIconSide] = useState('12px');

    useEffect(() => {
        handleResize();
        // Add the resize event listener when the component mounts
        window.addEventListener('resize', handleResize);
        
        // Cleanup the event listener when the component unmounts
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []); 

    const handleResize = () => {
        if(window.innerWidth >= 1024){
            setIconSide('18px')
        }else if(window.innerWidth >= 768){
            setIconSide('15px')
        }else {
            setIconSide('12px')
        }
    };
    return(
        <section className="w-full flex flex-col gap-y-3 md:flex-row md:gap-x-2" >
            {sellers.map((person, index) => (
                <div key={index} className="w-full md:w-1/2 flex flex-col items-center">
                    <img
                    src={sellersPath + person.photo}
                    alt={`${person.name} photo`}
                    className="object-cover object-center w-16 h-16 rounded-full border-background border-solid border-4"
                    />
                    <span> {person.name} </span>
                    <a href={'tel:+505'+person.phone} className="flex flex-row flex-nowrap items-center">
                        <Whatssap width={iconSide} height={iconSide}/>
                        {'+505 ' + person.phone.substring(0, 4) + '-' + person.phone.substring(4)}
                    </a>
                </div>

            ))
            }
        </section>
    )
}
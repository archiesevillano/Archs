import Link from "next/link";
import { FrameCardType } from "../../types";
import "./componentStyles.css";
import Image from "next/image";

const FrameCard = async ({ photo, logo, title, projectType, link, shadowed }: FrameCardType) => {

    const csName = `frameCard ${shadowed ? "shadowed" : ""} flex flex-col max-w-[400px] min-w-[300px] w-[300px] md:w-[350px] bg-random-gray relative sm:h-[450px] h-[280px] overflow-hidden`;

    return (
        <div className={csName}>
            <Link href={link} className="inline-block h-full">
                <div className="upper h-full">
                    <Image src={photo} alt="Project Photo" width={1000} height={1000} className="projectPhoto w-full h-full object-cover object-top p-5" />
                </div>
                <div className="lower flex justify-between items-center absolute bottom-0 w-full z-[1] bg-white p-3">
                    <div className="logoContainer flex items-center justify-center gap-4">
                        <Image src={logo} alt="logo" className="object-contain" width={30} height={30} />
                        <span className="inline-block font-quicksand font-bold">
                            {title}
                        </span>
                    </div>
                    <div className="projectType flex items-center pe-3">
                        <span className="font-quicksand uppercase opacity-90 text-xs">{projectType}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default FrameCard;
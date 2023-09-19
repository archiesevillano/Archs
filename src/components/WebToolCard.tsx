import Link from "next/link";
import "./componentStyles.css";
import { WebtoolType } from "../../types";

const WebToolCard = async ({ logo, photo, name, description, link = "" }: WebtoolType) => {
    return (
        <div key={link + "-cd"} className="webtoolCard transition duration-[500ms] w-[300px] h-[300px] overflow-hidden shrink-0">
            <Link href={link}>
                <div className="imageShowcase w-full h-[180px] relative">
                    <img src={photo} alt="Project image" className="object-cover w-full h-full" />
                    <img src={logo} alt="logo" className="projectLogo absolute left-0 bottom-0 rounded-full p-[8px] w-[40px] h-[40px] m-[10px] z-[2]" style={{ background: "#f2f2f2" }} />
                </div>
                <div className="projectDetails w-full p-4">
                    <h1 className="projectTitle font-bold text-lg">{name}</h1>
                    <p className="text-sm">{description}</p>
                </div>
            </Link >
        </div >
    );
}

export default WebToolCard;
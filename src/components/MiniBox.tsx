import Image from "next/image";
import "./componentStyles.css";
import { MiniBoxType } from "../../types";

const MiniBox = async ({ title, logo, subTitle }: MiniBoxType) => {
    return (
        <div className="miniBox relative px-3 py-2 sm:w-[200px] w-full h-[120px] rounded-xl shadow-xl flex flex-col items-start justify-end">
            <Image src={logo} alt="logo" className="absolute m-3 right-0 top-0 object-contain p-2 w-[40px] h-[40px]" width={40} height={40} />
            <h1 className="font-bold">{title}</h1>
            <p className="text-xs font-bold quicksand opacity-80">{subTitle}</p>
        </div>
    );
}

export default MiniBox;

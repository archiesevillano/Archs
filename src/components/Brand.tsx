import Image from "next/image";
import logo from "@/app/logo.png";

const Brand = () => {
    return (
        <div className="brand flex justify-center items-center px-3 py-2 w-max gap-3 cursor-default select-none">
            <Image className="appLogo" draggable={false} width={30} height={30} src={logo} alt={"App Logo"} />
            <h1 className="appLogo__text font-josefin text-3xl font-bold translate-y-[5px]">ARCHS</h1>
        </div>
    );
}

export default Brand;
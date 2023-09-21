import Image from "next/image";
import { PhotoDescription } from "../../types";

const Illustration = async ({ image, description }: PhotoDescription) => {
    return (
        <div className="illustration max-w-[900px] flex flex-col items-center justify-center gap-2">
            <Image src={image} alt="Illustration" width={1000} height={1000} className="illustration__image w-full object-contain rounded-lg border-2" />
            <p className="text-sm opacity-90 font-quicksand m-0 p-0 py-1 px-2 italic border-2 text-center w-full" style={{ background: "#f1f1f1" }}>{description}</p>
        </div>
    );
}

export default Illustration;
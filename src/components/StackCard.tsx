import Link from "next/link";
import "./componentStyles.css";
import { StackCardType } from "../../types";

const StackCard = async ({ index, title, description, path, photo }: StackCardType) => {
    return (
        <div className="stackCard flex flex-row justify-between items-center p-6 gap-5 overflow-hidden">
            <div className="flex flex-col">
                <span className="font-mukta font-bold text-2xl opacity-80 text-secondary-100">{(index + 1).toString().length === 1 ? "0".concat((index + 1).toString()) : (index + 1)}</span>
                <p className="font-bold text-2xl">{title}</p>
                <p className="text-xs opacity-80 font-quicksand max-w-[400px]">{description}</p>
                <Link href={path} className="text-sm font-bold text-primary-200 mt-5">Learn more</Link>
            </div>
            <div className="flex items-center justify-center">
                <img src={photo} alt="logo" width={70} height={70} />
            </div>
        </div>
    );
}

export default StackCard;
import Image from "next/image";
import { WorkExpType } from "../../types";
import "./componentStyles.css";

const DetailCard = async ({ data }: { data: WorkExpType }) => {
    return (
        <div className="detailCard flex flex-col gap-5">
            <div className="relative inline-block">
                <p className="font-bold text-primary-100 border-2 p-2" style={{ background: "#f5f5f5" }}>
                    {data.date}
                </p>
                <div className="absolute border-2 border-random-grey top-[50%] translate-y-[-50%] translate-x{-50%] left-[-30%] w-[100px] z-[-1]"></div>
            </div>
            <div className="p-8 flex flex-col bg-body-plain drop-shadow-md gap-5 border-8 border-random-grey outline-2">
                <p className="font-bold text-xl">{data.position}</p>
                <div className="flex flex-row gap-4 items-center">
                    <Image src={data.companyLogo} alt="logo" width={40} height={40} className="w-[40px] p-1 h-[40px] object-contain bg-white rounded-full border-2 border-random-gray" />
                    <p>{data.companyName}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailCard;
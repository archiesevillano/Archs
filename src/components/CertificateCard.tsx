import Link from "next/link";
import { CertificateType } from "../../types";

const CertificateCard = async ({ _id, title, issuedDate, organization, photo, description, logo }: CertificateType) => {
    return (
        <div id={_id} className="certificateCard flex flex-row justify-between max-w-[400px] h-[300px] w-full overflow-hidden relative drop-shadow-md bg-body-plain border-8 border-white">
            <div className="flex flex-col items-start justify-evenly h-full p-4 pe-7">
                <div className="flex items-center justify-start relative">
                    <h1 className="font-bold font-mukta">{title}</h1>
                    <div className="bg-primary-100 w-[100px] h-[5px] absolute bottom-[-10px]"></div>
                </div>
                <div className="flex flex-col items-start justify-start gap-3">
                    <p className="font-quicksand text-xs opacity-90">{description}</p>
                    <p className="font-quicksand text-xs opacity-90">{issuedDate}</p>
                    <Link href={photo} target="_blank" className="font-quicksand text-primary-100">
                        <i className="fi fi-rr-eye me-3 translate-y-[3px] inline-block"></i>
                        View
                    </Link>
                </div>
            </div>
            <div className="flex relative flex-col items-center justify-evenly h-full shrink-0 bg-random-gray w-[40%] p-5">
                <div className="flex items-center justify-start">
                    <img src={logo} alt="logo" className="w-[80px] h-[80px] shrink-0" />
                </div>
                <div className="flex items-center justify-start text-center">
                    <p className="font-bold font-quicksand text-white">{organization}</p>
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-random-gray z-[-1] -skew-x-12 rotate-[-5deg]"></div>
            </div>
        </div>
    );
}

export default CertificateCard;
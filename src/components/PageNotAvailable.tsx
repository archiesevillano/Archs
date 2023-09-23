'use client';

import fix from "@/assets/images/fix.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageNotAvailable = () => {

    const router = useRouter();

    const handleGoBack = () => {
        if (window.history.length > 1) {
            // redirect the user to other page
            router.back();
        }
        else {
            window.location.href = `${process.env.NEXT_PUBLIC_HOST}`;
        }
    }

    return (
        <div className="pageNotAvailale flex flex-col items-center justify-center px-10 translate-y-[50px]">
            <Image alt="Fixing Page" width={900} height={900} src={fix} className="max-w-[500px] object-contain w-full" />
            <p className="mt-10">Sorry, we're currently working with the content of this page</p>
            <button type="button" onClick={handleGoBack} className="mt-5 border-2 px-4 py-2 font-quicksand font-bold mb-[100px] rounded-lg">
                <i className="fi fi-rr-arrow-small-left translate-y-[3px] me-3 inline-block"></i>
                Go back
            </button>
        </div>
    );
}

export default PageNotAvailable;
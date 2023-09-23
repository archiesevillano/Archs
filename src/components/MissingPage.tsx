'use client';

import { useRouter } from "next/navigation";
import Brand from "./Brand";

const MissingPage = () => {

    const router = useRouter();

    const handleClick = () => {

        if (window.history.length > 1) {
            // redirect the user to other page
            router.back();
        }
        else {
            window.location.href = `${process.env.NEXT_PUBLIC_HOST}/projects`;
        }

    }

    return (
        <div className="missingPageComponent flex flex-col sm:items-center items-start justify-center sm:px-0 px-10">
            <i className="fi fi-br-sensor-alert inline-block translate-y-[3px] text-5xl"></i>
            <h1 className="font-bold text-5xl mb-4 w-full sm:text-center text-start">Page not found</h1>
            <p className="text-sm opacity-80 font-quicksand mb-3 sm:text-center text-start">Seems like the page that you&apos;re trying to visit does not exist.</p>
            <p className="text-sm opacity-80 font-quicksand mb-5 sm:text-center text-start">Try to check if you have entered a correct URL.</p>
            <button type="button" onClick={handleClick} className="border-2 px-4 py-2 font-quicksand font-bold mb-[100px] rounded-lg">
                <i className="fi fi-rr-arrow-small-left translate-y-[3px] me-3 inline-block"></i>
                Go back
            </button>
        </div>
    );
}

export default MissingPage;
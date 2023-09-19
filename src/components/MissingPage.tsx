'use client';

import { useRouter } from "next/navigation";
import Brand from "./Brand";

const MissingPage = () => {

    const router = useRouter();

    const handleClick = () => {
        // redirect the user to other page
        router.back();
    }

    return (
        <div className="missingPageComponent flex flex-col items-center justify-center">
            <h1 className="font-bold text-5xl mb-4">Page not found</h1>
            <p className="text-sm opacity-80 font-quicksand">Seems like the page that you're trying to visit does not exist.</p>
            <p className="text-sm opacity-80 font-quicksand mb-5">Try to check if you have entered a correct URL.</p>
            <button type="button" onClick={handleClick} className="border-2 px-4 py-2 font-quicksand font-bold mb-[100px] rounded-lg">
                <i className="fi fi-rr-arrow-small-left translate-y-[3px] me-3 inline-block"></i>
                Go back
            </button>
            <Brand />
        </div>
    );
}

export default MissingPage;
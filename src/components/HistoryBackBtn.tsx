'use client';

import { useRouter } from "next/navigation";

const HistoryBackBtn = () => {

    const router = useRouter();

    const handleGoBack = () => {
        // go back to previous page
        router.back();
    }

    return (
        <button type="button" className="mb-8 font-rubik" onClick={handleGoBack}>
            <i className="fi fi-rr-arrow-small-left inline-block translate-y-[7px] me-3 text-2xl"></i>
            Back
        </button>
    )
}

export default HistoryBackBtn;
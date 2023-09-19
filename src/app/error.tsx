'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center gap-2 h-screen w-full">
            <div className="flex flex-col items-center justify-center">
                <i className="fi fi-br-exclamation inline-block translate-y-[3px] text-5xl mb-5"></i>
                <h2 className="font-bold text-xl">Something went wrong!</h2>
                <p>Please check your internet connection and try again</p>
                <button className="border-2 rounded px-4 py-2 mt-5"
                    onClick={
                        () => reset()
                    }
                >
                    <i className="fi fi-rr-rotate-right inline-block translate-y-[3px] me-3"></i>
                    Try again
                </button>
            </div>
        </div>
    )
}
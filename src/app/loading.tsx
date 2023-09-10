import Loader from "@/components/Loader";

const Loading = () => {
    return <div className="loader fixed top-0 left-0 w-full h-full z-50 bg-secondary-200 flex items-center justify-center flex-col">
        <Loader />
    </div>
}

export default Loading;
import "./componentStyles.css";

const Loader = async () => {
    return (

        <div className="flex items-center justify-center flex-col relative">
            <div className="banter-loader">
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
            </div>
            <p className="font-mukta font-bold translate-y-[150px]">Loading</p>
        </div>

    );
}

export default Loader;
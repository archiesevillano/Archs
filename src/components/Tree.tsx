import "./componentStyles.css";

const Tree = async ({ collection }: { collection: React.ReactNode }) => {
    return (
        <div className="tree relative py-10 md:w-[500px] max-w-[370px] w-full overflow-hidden translate-x-[20px]">
            <p className="font-mukta font-bold translate-x-[50px] my-10 text-2xl w-full">Timeline</p>
            <div className="pole absolute top-0 left-0 bg-random-gray opacity-50 w-[5px] h-full translate-x-[10px]">
                <div className="startPole border-2 border-white absolute z-1 top-[0] left-[50%] rounded-full w-[15px] h-[15px] bg-random-gray translate-x-[-50%]" ></div>
                <div className="endPole border-2 border-white absolute z-1 bottom-[0] left-[50%] rounded-full w-[15px] h-[15px] bg-random-gray translate-x-[-50%]"></div>
            </div>
            <div className="flex gap-8 flex-col overflow-hidden w-full px-[50px]">
                {collection}
            </div>
        </div>
    );
}

export default Tree;
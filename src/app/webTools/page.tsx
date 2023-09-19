import WebToolCard from "@/components/WebToolCard";
import { WebtoolType } from "../../../types";
import HistoryBackBtn from "@/components/HistoryBackBtn";

const getlist: any = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/webtools",
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                cache: 'no-store'
            }
        );

        const { data } = await response.json();
        const web_tools = data.map((tool: WebtoolType) => <WebToolCard logo={tool.logo} photo={tool.photo} name={tool.name} link={tool.link} description={tool.description} />);


        return web_tools;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}

export default async function WebTools() {

    const data = await getlist();

    return (
        <main className="webtools flex flex-col items-center">
            <header className="flex flex-row justify-start items-center mt-[70px] md:px-[180px] px-10 w-full py-20">
                <div className="flex flex-col items-start">
                    <HistoryBackBtn />
                    <h2 className="text-5xl font-bold font-rubik mb-2">Free Website Development helper tools</h2>
                    <p className="opacity-80 font-quicksand">
                        Here is the list of free websites that you can use to for development convenience.
                    </p>
                </div>
            </header>
            <div className="webtoolsList wrapper flex md:flex-row flex-col justify-start md:items-start items-center max-w-[1100px] w-full py-28 p-10">
                <div className="flex justify-start md:items-start items-center w-full md:flex-row flex-col gap-10 flex-wrap">
                    {data}
                </div>
            </div>
        </main>
    );
}
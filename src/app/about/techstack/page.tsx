import Image from "next/image";
import tx from "@/assets/images/techstack.svg";
import { TechstackType } from "../../../../types";
import StackCard from "@/components/StackCard";
import HistoryBackBtn from "@/components/HistoryBackBtn";

const getlist: any = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/techstack`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                cache: 'no-store'
            });
        console.log(await response);
        console.log(process.env.NEXT_PUBLIC_HOST);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default async function Techstack() {

    const { data } = await getlist();

    return (
        <div className="techstack flex flex-col items-center cursor-pointer">
            <header className="flex flex-row justify-between items-center mt-[100px] px-10 max-w-[1300px] w-full py-28">
                <div className="flex flex-col items-start">
                    <HistoryBackBtn />
                    <h2 className="text-4xl font-bold font-rubik mb-2">Technology Stack</h2>
                    <p className="opacity-80 font-quicksand">Here is the list of technologies that I am familiar with:</p>
                </div>
                <div className="md:flex hidden items-center justify-center">
                    <Image src={tx} alt="Techstack Vector" width={300} height={300} />
                </div>
            </header>
            <div className="list flex gap-x-4 gap-y-8 flex-wrap justify-start max-w-[1300px] w-full pb-28 px-10">
                {data.map((item: TechstackType, index: number) => <StackCard key={"tstack".concat(index.toString())} index={index} photo={item.logo} title={item.name} path={item.href} description={item.description} />)}
            </div>
        </div>
    );
}
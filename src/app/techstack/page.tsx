import Image from "next/image";
import tx from "@/assets/images/techstack.svg";
import { TechstackType } from "../../../types";
import StackCard from "@/components/StackCard";

const getlist: any = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/techstack",
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                cache: 'no-store'
            });

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
            <header className="flex flex-row justify-between items-center mt-[100px] max-w-[1300px] w-full py-28">
                <div className="flex flex-col items-start">
                    <button type="button" className="mb-8 font-rubik"><i className="fi fi-rr-arrow-small-left inline-block translate-y-[7px] me-3 text-2xl"></i>Back</button>
                    <h2 className="text-4xl font-bold font-rubik mb-2">Technology Stack</h2>
                    <p className="opacity-80 font-quicksand">Here is the list of technologies that I am familiar with:</p>
                </div>
                <div className="flex items-center justify-center">
                    <Image src={tx} alt="Techstack Vector" width={300} height={300} />
                </div>
            </header>
            <div className="list flex gap-x-4 gap-y-8 flex-wrap justify-start max-w-[1300px] w-full pb-28">
                {data.map((item: TechstackType, index: number) => <StackCard index={index} photo={item.logo} title={item.name} path={item.href} description={item.description} />)}
            </div>
        </div>
    );
}
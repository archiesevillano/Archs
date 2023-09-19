import HistoryBackBtn from "@/components/HistoryBackBtn";
import Tree from "@/components/Tree";
import { WorkExpType } from "../../../../types";
import DetailCard from "@/components/DetailCard";

const getlist = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/experiences",
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                cache: 'no-store'
            });

        const { data } = await response.json();

        return data.map((item: WorkExpType) => <DetailCard data={item} />);

    } catch (error) {
        console.log(error);
        return [];
    }
}

export default async function Experience() {

    const data = await getlist();

    return (
        <main className="experiencePage flex flex-col items-center">
            <header className="flex flex-row justify-start items-center mt-[100px] md:px-[180px] px-10 w-full py-20">
                <div className="flex flex-col items-start">
                    <HistoryBackBtn />
                    <h2 className="text-5xl font-bold font-rubik mb-2">
                        Experiences
                    </h2>
                    <p className="opacity-80 font-quicksand">
                        Here is the list of my work experiences.
                    </p>
                </div>
            </header>
            <section className="py-28 flex md:flex-row flex-col md:justify-evenly md:gap-0 gap-8 items-center max-w-[1300px] w-full">
                <Tree collection={data} />
                <div className="flex flex-col gap-5 w-[400px] ps-[40px]">
                    <h2 className="font-bold text-2xl font-josefin">
                        WORK JOURNEY
                    </h2>
                    <p className="font-quicksand opacity-90 shrink-1 w-full">
                        My journey in the professional world has been marked by a multitude of experiences, each contributing to my growth and development. As a newcomer to the industry, the initial steps were challenging as I found myself navigating through an unfamiliar and often overwhelming work environment. The daily commute, spanning from home to the workplace, added its own share of stress to the equation
                    </p>
                    <p className="font-quicksand opacity-90 shrink-1 w-full">
                        However, looking back, every bit of that struggle was entirely worth it. Those early days served as a crucible, forging me into a more resilient and adaptable professional. They instilled in me a sense of determination and perseverance that I carry with me to this day. They were the stepping stones upon which I built a foundation of skills and knowledge, which I continue to refine and enhance to fuel my career growth.
                    </p>
                    <p className="font-quicksand opacity-90 shrink-1 w-full">
                        These experiences have not only equipped me with practical expertise but have also honed my ability to tackle challenges head-on. They have taught me the importance of staying committed to my goals and constantly seeking opportunities for improvement. In retrospect, I can confidently say that those initial hurdles were the catalysts for my professional development, and I am excited to carry this momentum forward as I explore new horizons and embark on future endeavors.
                    </p>
                </div>
            </section>
        </main>
    );
}
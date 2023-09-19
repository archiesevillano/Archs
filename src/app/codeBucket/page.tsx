'use client';

import ProjectCard from "@/components/WebToolCard";
import LinkDropDown from "@/components/linkDropDown";
import Link from "next/link";
import { codeBucketFilters } from "../../../data";
import { useSearchParams } from "next/navigation";

const filterValue = (filterType: string | null) => {
    switch (filterType) {
        case "forms":

            return "";
            break;
        case "inputs":

            return "";
            break;
        case "loaders":

            return "";
            break;
        case "all":

            return ""
            break;

        default:

            return "";
    }
}

export default function CodeBucket() {

    const searchParams = useSearchParams();
    const filterType = searchParams.get('filter');

    filterValue(filterType);

    return (
        <main className="codebucket flex flex-col items-center">
            <header className="flex flex-row justify-start items-center mt-[100px] md:px-[180px] px-10 w-full py-20">
                <div className="flex flex-col items-start">
                    <button type="button" className="mb-8 font-rubik"><i className="fi fi-rr-arrow-small-left inline-block translate-y-[7px] me-3 text-2xl"></i>Back</button>
                    <h2 className="text-5xl font-bold font-rubik mb-2">Customized Website UI for Web Development</h2>
                    <p className="opacity-80 font-quicksand">
                        List of Customized UI made with HTML, CSS and Javascript.
                    </p>
                </div>
            </header>
            <section className="codebucketList wrapper flex flex-col justify-start items-start max-w-[1200px] w-full py-28 p-10 gap-8">
                <div className="codebucketListMenu flex justify-between items-center w-full">
                    <div className="showingContainer">
                        <span className="me-2">Showing: </span>
                        <span className="filterTag py-2 px-4 inline-block text-sm font-quicksand border rounded">All UI</span>
                    </div>
                    <div className="filtersContainer">
                        <LinkDropDown collection={codeBucketFilters} />
                    </div>
                </div>
                <div className="flex justify-start md:items-start items-center w-full md:flex-row flex-col gap-10 flex-wrap">
                    <ProjectCard photo="https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Projects%2Fmorsee.png?alt=media&token=2885f3f8-5855-466d-9ad5-a57c6e72b46d" logo="https://firebasestorage.googleapis.com/v0/b/archsfb.appspot.com/o/techstacks%2FNextJS.png?alt=media&token=82522ea9-32c4-42c8-9a47-61e50de284fd" description="Free Online Morse Code Encoder and Decoder API" sourceLink="/" title="Morsee" />
                    <ProjectCard photo="https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Projects%2Fmorsee.png?alt=media&token=2885f3f8-5855-466d-9ad5-a57c6e72b46d" logo="https://firebasestorage.googleapis.com/v0/b/archsfb.appspot.com/o/techstacks%2FNextJS.png?alt=media&token=82522ea9-32c4-42c8-9a47-61e50de284fd" description="Free Online Morse Code Encoder and Decoder API" sourceLink="/" title="Morsee" />
                    <ProjectCard photo="https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Projects%2Fmorsee.png?alt=media&token=2885f3f8-5855-466d-9ad5-a57c6e72b46d" logo="https://firebasestorage.googleapis.com/v0/b/archsfb.appspot.com/o/techstacks%2FNextJS.png?alt=media&token=82522ea9-32c4-42c8-9a47-61e50de284fd" description="Free Online Morse Code Encoder and Decoder API" sourceLink="/" title="Morsee" />
                    <ProjectCard photo="https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Projects%2Fmorsee.png?alt=media&token=2885f3f8-5855-466d-9ad5-a57c6e72b46d" logo="https://firebasestorage.googleapis.com/v0/b/archsfb.appspot.com/o/techstacks%2FNextJS.png?alt=media&token=82522ea9-32c4-42c8-9a47-61e50de284fd" description="Free Online Morse Code Encoder and Decoder API" sourceLink="/" title="Morsee" />
                </div>
            </section>
        </main>
    );
}
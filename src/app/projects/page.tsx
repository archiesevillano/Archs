'use client';

import FrameCard from "@/components/FrameCard";
import { useState, useEffect } from 'react';
import { ProjectLabel, ProjectType } from "../../../types";
import LinkDropDown from "@/components/linkDropDown";
import { projectFilters } from "../../../data";
import HistoryBackBtn from "@/components/HistoryBackBtn";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const ProjectList: any = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/projects`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                next: { revalidate: 3600 }
            }
        );

        const { data } = await response.json();

        return data;
    }
    catch (error) {
        console.log(error);
        return <h1 className="text-center font-bold font-quicksand text-2xl">Something went wrong</h1>;
    }
}

const filteredData = async (filterType: string | null = "") => {

    const data = await ProjectList();
    const projects = data.filter((item: ProjectType) => filterType?.toLowerCase() === "all" || filterType === "" || item.type.toLowerCase() === filterType?.toLowerCase());

    console.log(data);
    console.log("Project List: ", projects);
    const filteredProjects = projects.map((project: ProjectType) => <FrameCard key={project._id} shadowed={true} photo={project.photo} logo={project.logo} title={project.title} projectType={project.type} link={`?pid=${project._id}`} />);

    return filteredProjects;
}

export default function Projects() {

    const [isItemSelected, setSelectedState] = useState<boolean>(false);
    const navigation = useRouter();
    const searchParams = useSearchParams();
    const filterType: string | null = searchParams.get("filter") !== null ? searchParams.get("filter") : "";
    const selectedItemID: string | null = searchParams.get("pid") !== null ? searchParams.get("pid") : "";
    const [data, setData] = useState<null | [] | any>(null);
    const [selectedItem, setSelectedItem] = useState<ProjectType | null>(null);
    console.log("page load");

    const [isClient, setToClient] = useState<boolean>(false);

    useEffect(
        () => {
            setToClient(true);
            setData(filteredData(filterType));
        }
        , []);


    useEffect(() => {
        setData(filteredData(filterType));
        const loadSelected = async () => {
            if (selectedItemID) {
                const item = await ProjectList();
                const data = item.filter((item: ProjectType) => item._id === selectedItemID);
                console.log("data", data);
                if (data.length > 0) {
                    setSelectedItem(data[0]);
                    setSelectedState(true);
                }
            }
            else {
                setSelectedState(false);
            }
        }
        loadSelected();
    }, [searchParams]);

    const handleClose = () => {
        console.log(window.history.length);
        if (window.history.length > 1) {
            navigation.back();
            setSelectedState(false);
        }
        else {
            window.location.href = "http://localhost:3000/projects";
            setSelectedState(false);
        }
    }

    return (
        <main className="projectPage flex flex-col items-center">
            <header className="flex flex-row justify-start items-center mt-[100px] md:px-[180px] px-10 w-full py-20">
                <div className="flex flex-col items-start" >
                    <HistoryBackBtn />
                    <h2 className="text-5xl font-bold font-rubik mb-2">Discover some of my design ideas and projects</h2>
                    <p className="opacity-80 font-quicksand">
                        These projects and designs are not for sale and can only be used as a reference or skill demonstration.
                    </p>
                </div >
            </header >
            <div className="projectListWrapper flex flex-col justify-start items-start max-w-[1300px] w-full py-10 sm:px-10 px-5 gap-10 pb-28">
                <div className="projectListMenu flex justify-between items-center w-full">
                    <div className="showingContainer">
                        <span className="me-2">Showing: </span>
                        <span className="filterTag py-2 px-4 inline-block text-sm font-quicksand border rounded">{isClient ? filterType ? filterType !== "all" ? filterType.replace(filterType[0], filterType[0].toUpperCase()) : "All works" : "All works" : <></>}</span>
                    </div>
                    <div className="filtersContainer">
                        <LinkDropDown collection={projectFilters} />
                    </div>
                </div>
                <div className="projectList flex justify-start md:items-start items-center md:flex-row flex-col gap-10 w-full flex-wrap">
                    {isClient ? data : <></>}
                </div>
            </div>
            {
                isItemSelected &&
                <div className="fixed w-full h-full z-50 flex md:flex-row gap-10 items-center justify-evenly drop-shadow-2xl" style={{ backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.4)" }}>
                    <button className="bg-transparent absolute right-0 top-0 p-3 cursor-pointer z-[1]" onClick={handleClose}>
                        <i className="fi fi-bs-cross text-white"></i>
                    </button>
                    <div className="flex md:flex-row flex-col items-center justify-center gap-10 bg-white rounded-xl drop-shadow-xl md:w-[75%] md:h-[75%] w-[95%] h-[95%]">
                        <div className="projectImageSection md:h-full h-[20%] md:w-[50%] w-full flex items-center justify-center">
                            <Image src={selectedItem?.photo !== undefined ? selectedItem?.photo : ""} alt="Project Image" className="object-cover object-top md:w-[75%] md:h-[75%] w-full h-full" width={900} height={900} />
                        </div>
                        <div className="projectDetails flex flex-col justify-between items-center md:h-[80%] h-[80%] md:w-[50%] w-full px-5 md:py-0 py-5">
                            <div className="flex flex-col items-start w-full divide-y-2">
                                <div className="flex flex-col items-start">
                                    <h1 className="font-bold font-mukta text-2xl">
                                        {isClient ? selectedItem !== null ? selectedItem?.title : "" : null}
                                    </h1>
                                    <div className="text-center px-2 py-1 flex flex-row items-center gap-3">
                                        {
                                            isClient ? selectedItem !== null ?
                                                selectedItem.type === ProjectLabel.Design ?
                                                    <i className="fi fi-rr-palette inline-block translate-y-[3px]"></i>
                                                    :
                                                    selectedItem.type === ProjectLabel.Website ?
                                                        <i className="fi fi-rr-browser inline-block translate-y-[3px]"></i>
                                                        : null : "" : null
                                        }

                                        <span className="font-quicksand text-xs">{isClient ? selectedItem !== null ? selectedItem.type : "" : null}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col p-5 ps-0">
                                    <h2 className="font-bold font-mukta">Project Description: </h2>
                                    <p className="font-quicksand text-sm">
                                        {isClient ? selectedItem !== null ? selectedItem.description : "" : null}
                                    </p>
                                    <div className="flex flex-col py-2 w-full gap-2 mt-5">
                                        {
                                            selectedItem?.details.map((item, index) => <p key={`details_${index}`} className="font-bold font-quicksand italic text-xs text-primary-100">
                                                <i className="fi fi-rs-check-circle inline-block translate-y-[3px] me-3"></i>
                                                {item}
                                            </p>)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="flex lg:flex-row flex-col md:items-center md:justify-start gap-3 w-full">
                                <Link className="inline-block py-2 px-3 rounded font-quicksand flex flex-row gap-3 text-white bg-random-red border-2 border-random-red lg:w-[50%] w-full justify-center items-center" href={selectedItem?.liveLink === undefined ? "" : selectedItem?.liveLink}>
                                    <i className="fi fi-br-globe inline-block translate-y-[3px]"></i>
                                    <span className="text-sm">Visit Live Link</span>
                                </Link>
                                <Link className="inline-block py-2 px-3 rounded font-quicksand flex flex-row gap-3 lg:w-[50%] w-full border-2 bg-random-dark text-white border-random-dark justify-center items-center" href={selectedItem?.sourceLink === undefined ? "" : selectedItem?.sourceLink}>
                                    <i className="fi fi-rr-display-code inline-block translate-y-[3px]"></i>
                                    <span className="text-sm">View Source Code</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </main >
    );
}
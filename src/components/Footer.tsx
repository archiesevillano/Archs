'use client';

import Link from "next/link";
import { IconLink } from "./IconLink";
import { about, socialLinks } from "./../../data";
import Image from "next/image";
import qrcode from "@/assets/images/qrcode.png";

const Footer = async () => {

    const isBrowser = () => typeof window !== 'undefined';

    const scrollToTop = () => {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer className="appFooter flex flex-col gap-3 md:px-[170px] px-10 pt-[70px] pb-[10px] bg-secondary-200">
            <div className="flex md:justify-end justify-center">
                <p className="opacity-50 text-sm">
                    <i>
                        Do not sell my information
                    </i>
                </p>
            </div>
            <div className="">
                <p className="font-bold text-xl uppercase">{process.env.NEXT_PUBLIC_APP_NAME}</p>
            </div>
            <div className="">
                <p className="text-sm opacity-70 md:text-start text-center">Personal Portfolio of Archie Cedeño Sevillano</p>
            </div>
            <div className="flex md:flex-row flex-col mt-10 justify-between items-center md:gap-0 gap-10">
                <div className="flex md:flex-row flex-col md:gap-40 gap-10">
                    <ul className="md:text-start text-center">
                        <li className="text-lg font-bold">Sitemap</li>
                        <li key="backToTopFooterLink"><button className="text-sm" onClick={scrollToTop} >Back to Top</button></li>
                        <li key="projectsPath"><Link className="text-sm" href={"/projects"}>Projects</Link></li>
                        <li key="webToolsPath"><Link className="text-sm" href={"/webTools"}>Web Tools</Link></li>
                        <li key="codeBucket"><Link className="text-sm" href={"/codeBucket"}>Code Bucket</Link></li>
                        <li key="aboutPath"><Link className="text-sm" href={"/about"}>About</Link></li>
                    </ul>
                    <ul className="md:text-start text-center">
                        <li className="text-lg font-bold">About me</li>
                        {aboutSegments()}
                    </ul>
                </div>
                <div className="flex flex-col md:items-end items-center justify-center gap-3">
                    <p className="font-quicksand text-xs w-[200px] md:text-end text-center" style={{ color: "#f2f2f2" }}>You can also access my website via scanning this QR Code.</p>
                    <Image src={qrcode} alt="QR Code" className="" width={100} height={100} />
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:justify-between items-center mt-14">
                <div className="left flex md:flex-row flex-col justify-start items-center md:gap-0 gap-8">
                    <ul>
                        {socialList()}
                    </ul>

                    <p className="flex items-center justify-start mx-4 text-sm md:text-start text-center">
                        <i className="fi fi-ts-language me-2"></i>
                        English
                    </p>

                    <p className="flex items-center justify-start text-sm md:text-start text-center">
                        <i className="fi fi-br-marker me-2 md:inline-block hidden"></i>
                        Las piñas City, Metro Manila Philippines
                    </p>
                </div>
                <div className="right flex flex-col md:text-end text-center md:items-end items-center mt-8 md:mt-0">
                    <p className="opacity-30 text-xs">Send me an email here:</p>
                    <p className="text-sm">archie.sevillano29@gmail.com</p>
                </div>

            </div>
            <div className="mt-10 opacity-40 flex md:flex-row flex-col md:justify-between items-center">
                <p className="text-sm">&copy; 2023 Archs</p>
                <ul className="m-0 p-0">
                    <li className="inline opacity-60 me-5 text-xs" key={"privacyLink"}><Link href={`${process.env.NEXT_PUBLIC_HOST}/privacy`}>Privacy</Link></li>
                    <li className="inline opacity-60 me-5 text-xs" key={"accessibilityLink"}><Link href={`${process.env.NEXT_PUBLIC_HOST}/accessibility`}>Accessibility</Link></li>
                    <li className="inline opacity-60 me-5 text-xs" key={"termsLinks"}><Link href={`${process.env.NEXT_PUBLIC_HOST}/terms`}>Terms</Link></li>
                </ul>
            </div>
        </footer>
    );
}

const aboutSegments = () => {
    return about.map(item => <li key={item.id}><Link className="text-sm" href={item.href}>{item.name}</Link></li>)
}

const socialList = () => {
    return socialLinks.map(item => <li key={item.id} className="inline-block me-5" style={{ transform: "scale(0.8)" }} id={item.id}><IconLink toolTipText={item.name} to={item.link} iconClass={item.iconClass} /></li>);
}

export default Footer;
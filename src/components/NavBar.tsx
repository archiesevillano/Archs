'use client';

import Link from "next/link";
import Brand from "./Brand";
import { navigationItems } from "../../data";
import { useEffect, useState, useReducer } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { about, socialLinks } from "./../../data";
import { NavToggleActionType, ToggleNavLabel, navItems } from "../../types";

const NavBar = () => {

    const [scrolled, setScrolling] = useState<boolean>(false);
    const activeLink: string | null = useSelectedLayoutSegment();

    const reducer = (state: { payload: boolean }, action: NavToggleActionType) => {
        switch (action.type) {
            case ToggleNavLabel.ON:
                return { payload: true };
                break;
            case ToggleNavLabel.OFF:
                return { payload: false };
                break;
            default:
                return state;
        }
    };

    const [toggleState, dispatch] = useReducer(reducer, { payload: false });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                // Change the scroll threshold (100 in this case) as needed
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar w-full fixed top-0 left-0 z-30 py-2 flex items-center justify-center border-b bg-body-plain border-gray-100`}>
            <div className="flex items-center justify-between gap-5 max-w-[1300px] md:px-10 w-full">
                <Brand />
                <ul className={`navigationList w-full md:text-right md:static fixed top-[65px] left-0 z-[29] h-screen md:h-[auto] bg-zinc-300 md:p-0 ps-10 pt-[50px] ${toggleState.payload ? "active" : ""}`}>
                    {navItems(activeLink ? activeLink : "")}
                    <li className="my-5 md:hidden block pointer-events-none flex items-center w-full"><hr style={{ border: "1px solid rgba(0,0,0,0.2)", width: "80%", borderRadius: "10px" }} /></li>
                    <li className="ms-10 text-center hidden md:inline">
                        <Link href="/">
                            <i className="fi fi-brands-github text-3xl translate-y-[7px] opacity-70 inline-block"></i>
                        </Link>
                    </li>
                    {extras(activeLink ? activeLink : "")}
                </ul>
                <div className="responsiveMenu cursor-pointer px-4 md:hidden inline-block flex flex-row justify-end items-center gap-3">
                    <Link href="https://github.com/archiesevillano">
                        <i className="fi fi-brands-github text-3xl translate-y-[3px] opacity-70 inline-block"></i>
                    </Link>
                    <button type="button" onClick={() => dispatch({ type: toggleState.payload ? ToggleNavLabel.OFF : ToggleNavLabel.ON, payload: !toggleState })}>
                        {toggleState.payload ? <i className="fi fi-bs-cross text-2xl translate-y-[4px] inline-block"></i> : <i className="fi fi-bs-menu-burger text-2xl translate-y-[4px] inline-block"></i>}
                    </button>
                </div>
            </div>
        </nav>
    );
}

const navItems = (activeLink: string = "/") => {
    return navigationItems.map((navItem: navItems) => <li key={navItem.id} className="md:inline block md:mx-3 m-0 md:w-[100px] w-full"><Link href={navItem.href} className={`navbarItems w-full md:w-max inline-block py-2 md:px-3 px-0 font-quicksand font-bold md:hover:text-primary-100 md:hover:opacity-100 transition duration-[500ms] ${activeLink.replace("/", "") === navItem.href.replace("/", "") ? 'active' : ''}`}>{navItem.name}</Link></li>);
}

const extras = (activeLink: string = "/") => {
    return about.map((navItem: navItems) => <li key={navItem.id} className="md:hidden block md:mx-2 m-0 md:w-[100px] w-full"><Link href={navItem.href} className={`navbarItems w-full md:w-max inline-block py-2 md:px-3 px-0 font-quicksand font-bold md:hover:text-primary-100 opacity-70 hover:opacity-100 transition duration-[500ms] text-sm ${activeLink.replace("/", "") === navItem.href.replace("/", "") ? 'active' : ''}`}>{navItem.name}</Link></li>);
}

export default NavBar;
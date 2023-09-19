import { LinkDropDownItemType, ProjectFilterType, navItems } from "./types";

export const navigationItems: navItems[] = [
    {
        id: "hmnav",
        name: "Home",
        href: "/",
    },
    {
        id: "pfnav",
        name: "Projects",
        href: "/projects",
    },
    {
        id: "wtnav",
        name: "Web Tools",
        href: "/webTools",
    },
    {
        id: "abnav",
        name: "About",
        href: "/about",
    }
]

export const about = [
    {
        id: "about1",
        name: "Tech stack",
        href: "/about/techstack"
    },
    {
        id: "about2",
        name: "Certificates & Achievements",
        href: "/about/certificates"
    },
    {
        id: "about3",
        name: "Experiences",
        href: "/about/experiences"
    },
    {
        id: "about4",
        name: "Hobbies",
        href: "/about/hobbies"
    },
];

export const socialLinks = [
    {
        id: "fb1",
        name: "Facebook",
        iconClass: "fi fi-brands-facebook",
        link: "https://www.facebook.com/archie.sevillano.10"
    },
    {
        id: "li2",
        name: "LinkedIn",
        iconClass: "fi fi-brands-linkedin",
        link: "www.linkedin.com/in/archie-sevillano-24118227a"
    },
    {
        id: "gh3",
        name: "GitHub",
        iconClass: "fi fi-brands-github",
        link: "https://github.com/archiesevillano"
    },
];

export const codeBucketFilters: LinkDropDownItemType[] = [
    {
        name: "All UI",
        href: "?filter=all"
    },
    {
        name: "Loaders",
        href: "?filter=loaders"
    },
    {
        name: "Inputs",
        href: "?filter=inputs"
    },
    {
        name: "Forms",
        href: "?filter=forms"
    }
];

export const projectFilters: ProjectFilterType[] = [
    {
        name: "All works",
        href: "?filter=all"
    },
    {
        name: "Designs",
        href: "?filter=design"
    },
    {
        name: "Websites",
        href: "?filter=website"
    },
];
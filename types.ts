import mongoose from "mongoose"
import { StaticImageData } from "next/image"

export type navItems = {
    id: string,
    name: string,
    href: string
}

export type NavToggleActionType = {
    type: ToggleNavLabel,
    payload: boolean
}

export enum ToggleNavLabel {
    ON = "on",
    OFF = "off"
}

export type IconLinkType = {
    toolTipText: string,
    to: string,
    iconClass: string,
}

export type MiniBoxType = {
    logo: string | StaticImageData,
    title: string,
    subTitle: string
}

export type BarRoute = {
    title: string,
    subTitle: string,
    href: string
}

export type StackCardType = {
    index: number,
    title: string,
    description: string,
    path: string,
    photo: string
}

export type TechstackType = {
    _id: mongoose.Types.ObjectId,
    name: string,
    logo: string,
    href: string,
    description: string
}

export enum ProjectLabel {
    Website = 'Website',
    Design = 'Design',
    logo = "Logo"
}

export type FrameCardType = {
    photo: string,
    logo: string,
    title: string,
    projectType: ProjectLabel,
    link: string,
    shadowed: boolean
}

export type ProjectType = {
    _id: string,
    logo: string,
    photo: string,
    title: string,
    description: string,
    sourceLink: string,
    details: string[],
    type: ProjectLabel,
    liveLink: string
}

export type WebtoolType = {
    name: string,
    logo: string,
    photo: string,
    link: string,
    description: string,
}

export type LinkDropDownItemType = {
    name: string,
    href: string
}

export type LinkDropDownItemsType = {
    collection: LinkDropDownItemType[];
}

export type ProjectFilterType = {
    name: string,
    href: string
}

export type CertificateType = {
    _id: string,
    title: string,
    issuedDate: string,
    organization: string,
    photo: string,
    description: string,
    logo: string
}

export type WorkExpType = {
    position: string,
    date: string,
    companyName: string,
    companyLogo: string
}

export type PhotoDescription = {
    image: string,
    description: string
}

export type HobbyDataType = {
    textContents: string[],
    illustration: PhotoDescription[]
}
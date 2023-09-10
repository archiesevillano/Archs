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

export type ProjectType = {
    repository: string,
    logo: string,
    imageShowcase: string,
    title: string,
    description: string,
    liveLink?: string,
    publishDate: string
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

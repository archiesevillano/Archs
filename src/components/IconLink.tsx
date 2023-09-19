import Link from "next/link";
import { useState, useEffect } from 'react';
import "./componentStyles.css";

export const IconLink = async ({ toolTipText, to, iconClass }: IconLinkType) => {

    return (
        <Link href={to} target="_blank" className="iconLink relative">
            <i className={`${iconClass} text-3xl`}></i>
            <span className="iconLink__toolTipText absolute text-xs top-5 left-0 inline-block p-1 px-2 rounded-md">{toolTipText}</span>
        </Link>
    );
}
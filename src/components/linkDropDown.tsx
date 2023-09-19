'use client';

import Link from "next/link";
import { LinkDropDownItemType, LinkDropDownItemsType } from "../../types";
import { useState } from "react";

const getDropDownItems = (collection: LinkDropDownItemType[]) => {
    return collection.map((item: LinkDropDownItemType) => <li key={item.href + "fls"} className="inline-block w-full"><Link className="font-quicksand w-full px-3 py-2 inline-block" href={item.href}>{item.name}</Link></li>);
}

const LinkDropDown = ({ collection }: LinkDropDownItemsType) => {

    const [openView, setView] = useState<boolean>(false);

    const handleToggleView = () => {
        setView(prev => !prev);
    }

    return (
        <div className="linkDropDown relative">
            <button className="linkDropDownBtn border w-[140px] p-2 " onClick={handleToggleView}><span className="text-sm">Show Filters </span><i className="fi fi-br-angle-small-down ms-4 translate-y-[3px] inline-block"></i></button>
            <ul style={{ display: openView ? "block" : "none" }} className="linkDropDownItems absolute w-full top-0 left-0 z-[11] bg-body-plain drop-shadow-lg" onClick={handleToggleView}>
                {getDropDownItems(collection)}
            </ul>
            <div style={{ display: openView ? "block" : "none" }} className="fixed w-full h-full top-0 left-0 z-[10]" onClick={handleToggleView}></div>
        </div>
    );
}

export default LinkDropDown;
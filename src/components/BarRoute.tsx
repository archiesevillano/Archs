import Link from "next/link";
import { BarRoute } from "../../types";

const BarRoute = async ({ title, subTitle, href }: BarRoute) => {
    return (
        <div className="barRoute py-2 px-3 cursor-pointer hover:bg-secondary-200 bg-secondary-100 rounded-lg">
            <Link href={href} className="flex justify-between items-center" style={{ color: "var(--forecolor)" }}>
                <div className="flex flex-col">
                    <p className="title">{title}</p>
                    <span className="subTitle opacity-70 text-xs">{subTitle}</span>
                </div>
                <i className="fi fi-rr-arrow-small-right translate-y-[3px] text-xl"></i>
            </Link>
        </div>
    );
}

export default BarRoute;
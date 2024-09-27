import Link from "next/link";
import React from "react";
import { RxArrowLeft } from "react-icons/rx";
import { blind75Data } from "@/data/data.js";
import CustomAccordion from "@/components/custom-ui/CustomAccordion";

const page = () => {
    return (
        <div className="sm:w-10/12 lg:w-7/12 xl:w-5/12 sm:px-8 ">
            <div>
                <Link href={"/"} className="flex gap-2 items-center text-sm">
                    <RxArrowLeft />
                    Home
                </Link>
            </div>
            <div>
                <CustomAccordion data={blind75Data} title="Blind 75 Leetcode" questions={"75"} />
            </div>
        </div>
    );
};

export default page;

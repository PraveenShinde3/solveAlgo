"use client";
import Link from "next/link";
import React from "react";
import { RxTarget } from "react-icons/rx";
import { RxArrowTopRight } from "react-icons/rx";

const QuestionsCard = () => {
 
  return (
    <div className="pt-8  ">
      <div className="rounded-3xl bg-[#F8F8F8] p-2 w-full flex gap-2 ">
        <div className="group bg-white rounded-2xl flex-1 h-28  hover:scale-[1.015] transition-all cursor-pointer">
          <Link href={"/blind-75-leetcode"} className="flex-1">
            <div className="p-4 h-full flex flex-col justify-between">
              <div className="flex gap-2 items-start ">
                <RxTarget className="text-3xl" />
                <p className="text-sm font-medium leading-4">
                  <span>Blind 75</span> <br></br> Leetcode
                </p>
              </div>
              <div className="flex gap-2 justify-end">
                <RxArrowTopRight className="group-hover:text-lg" />
              </div>
            </div>
          </Link>
        </div>

        <div className="group bg-white rounded-2xl h-28 flex-1 hover:scale-[1.015]  transition-all cursor-pointer">
          <Link href={"/must-do-leetcode-questions"} className="flex-1">
            <div className="p-4 h-full flex flex-col justify-between">
              <div className="flex gap-2 items-start ">
                <RxTarget className="text-3xl" />
                <p className="text-sm font-medium leading-4">
                  <span>Must Do</span> <br></br> Leetcode Questions
                </p>
              </div>
              <div className="flex gap-2 justify-end">
                <RxArrowTopRight className="group-hover:text-lg" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionsCard;

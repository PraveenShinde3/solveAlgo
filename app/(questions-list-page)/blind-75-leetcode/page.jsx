"use client";
import Link from "next/link";
import React from "react";
import { RxArrowLeft } from "react-icons/rx";
import { blind75Data } from "@/data/data.js";
import CustomAccordion from "@/components/custom-ui/CustomAccordion";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import progressService from "@/app/api/service/progressService";

const Page = () => {
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const { toast } = useToast();
  const getProgress = async () => {
    try {
      const response = await progressService.getProgress();
      await setCompletedQuestions(response);
      console.log(response);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to fetch progress",
        description: "Please check your internet connection",
      });
      console.log(error);
    }
  };
  useEffect(() => {
    getProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const doUpdateProgress = async (questionName, isCompleted) => {
    console.log(questionName, isCompleted);
    try {
      await progressService.updateProgress(questionName, isCompleted);
      await getProgress();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to update progress",
        description: "Please check your internet connection",
      });
      console.log(error);
    }
  };
  return (
    <div className=" w-full sm:w-10/12 lg:w-7/12 xl:w-5/12 sm:px-8 ">
      <div>
        <Link href={"/"} className="flex gap-2 items-center text-sm">
          <RxArrowLeft />
          Home
        </Link>
      </div>
      <div>
        <CustomAccordion
          data={blind75Data}
          completedData={completedQuestions}
          title="Blind 75 Leetcode"
          questions={"75"}
          doUpdateProgress={doUpdateProgress}
        />
      </div>
    </div>
  );
};

export default Page;

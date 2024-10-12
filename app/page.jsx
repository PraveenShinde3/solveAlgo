"use client";

import LandingPage from "@/components/custom-ui/LandingPage";
import CustomAccordion from "@/components/custom-ui/CustomAccordion";
import QuestionsCard from "@/components/custom-ui/QuestionsCard";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import progressService from "./api/service/progressService";
import { algoData } from "@/data/data.js";
import Navbar from "@/components/custom-ui/Navbar";

export default function Home() {
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
    <div className="sm:w-10/12 lg:w-7/12 xl:w-5/12 sm:px-8">
      <Navbar />
      <LandingPage />
      <QuestionsCard />
      <CustomAccordion
        data={algoData}
        completedData={completedQuestions}
        title="Algorithms"
        questions="111"
        doUpdateProgress={doUpdateProgress}
      />
    </div>
  );
}

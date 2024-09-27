import LandingPage from "@/components/custom-ui/LandingPage";
import CustomAccordion from "@/components/custom-ui/CustomAccordion";
import QuestionsCard from "@/components/custom-ui/QuestionsCard";

import { algoData } from "@/data/data.js";

export default function Home() {
  return (
    <div className="sm:w-10/12 lg:w-7/12 xl:w-5/12 sm:px-8">
      <LandingPage />
      <QuestionsCard />
      <CustomAccordion data={algoData} title="Algorithms" questions="111" />
    </div>
  );
}

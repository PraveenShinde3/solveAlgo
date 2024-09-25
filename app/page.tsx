import LandingPage from "@/components/custom-ui/LandingPage";
import AlgoAccordion from "@/components/custom-ui/AlgoAccordion";
import QuestionsCard from "@/components/custom-ui/QuestionsCard";

export default function Home() {
  return (
    <div className=" min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className=" container flex flex-col  items-center justify-center ">
        <div className="sm:w-10/12 lg:w-7/12 xl:w-5/12 sm:px-8">
          <LandingPage />
          <QuestionsCard />
          <AlgoAccordion />
        </div>

        {/* <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol> */}
      </main>
    </div>
  );
}

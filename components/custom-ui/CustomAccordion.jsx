"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
const CustomAccordion = ({
  data,
  title,
  questions,
  completedData,
  doUpdateProgress,
}) => {
  let count = 0;

  const handleCheckboxChange = async (questionName, isCompleted) => {
    doUpdateProgress(questionName, isCompleted);
  };

  const checkedCount = Object.values(completedData).filter(Boolean).length;

  return (
    <div className="pt-6 w-full">
      {title && (
        <h1 className=" text-center font-medium flex justify-center items-center px-4 py-3   rounded-xl mb-2">
          <p className=" text-center w-fit p-1 px-3 rounded-xl bg-zinc-50 ">
            {title} |{" "}
            <span className="text-sm">
              {checkedCount}/{questions}{" "}
            </span>
          </p>
        </h1>
      )}
      <div className="bg-[#F8F8F8] p-2 rounded-3xl w-full">
        <Accordion type="single" collapsible className="flex flex-col gap-2">
          {data.topics.map((item) => {
            count++;
            return (
              <AccordionItem key={item.name} value={item.name}>
                <AccordionTrigger>
                  <div>
                    <p>
                      {count}. {item.name}
                    </p>
                  </div>{" "}
                </AccordionTrigger>
                <AccordionContent>
                  {item?.article && (
                    <p className="px-1 flex gap-1 items-center">
                      Article :{" "}
                      <a
                        href={item.article.link}
                        target="_blank"
                        className="hover:underline underline-offset-4"
                      >
                        {item.article.name}
                      </a>
                      <ArrowTopRightIcon />
                    </p>
                  )}
                  <div className="pt-2">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead></TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Difficulty</TableHead>
                          <TableHead>Link</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {item.questions.map((question) => {
                          const isChecked =
                            completedData.some(
                              (item) =>
                                item.question === question.name &&
                                item.isCompleted
                            ) || false;
                          return (
                            <TableRow key={question.name}>
                              <TableCell>
                                <Checkbox
                                  checked={isChecked}
                                  onClick={() =>
                                    handleCheckboxChange(
                                      question.name,
                                      !isChecked
                                    )
                                  }
                                />
                              </TableCell>
                              <TableCell className="font-medium">
                                {question.name}
                              </TableCell>
                              <TableCell>{question.difficulty}</TableCell>
                              <TableCell className="text-right">
                                <a
                                  href={question.link}
                                  target="_blank"
                                  className="hover:underline underline-offset-4 flex gap-1 items-center"
                                >
                                  leetcode
                                  <ArrowTopRightIcon />
                                </a>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default CustomAccordion;

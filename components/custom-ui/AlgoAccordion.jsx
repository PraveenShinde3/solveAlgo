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
} from "@/components/ui/table"
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { data } from "@/data/data.js";

const AlgoAccordion = () => {
    // console.log(data);
    let count = 0;
    return (
        <div className="pt-8 w-full">
            <h1 className="pb-4 text-center">Algorithms</h1>
            <div className="bg-[#F8F8F8] p-2 rounded-3xl w-full">

                <Accordion type="single" collapsible className="flex flex-col gap-2">
                    {data.topics.map((item) => {
                        count++;
                        return (
                            <AccordionItem key={item.name} value={item.name}>
                                <AccordionTrigger>{count}. {item.name}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="px-1 flex gap-1 items-center">Article : <a href={item.article.link} target="_blank" className="hover:underline underline-offset-4">{item.article.name}</a><ArrowTopRightIcon /></p>
                                    <div className="pt-2">
                                        <Table >
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead >Name</TableHead>
                                                    <TableHead>Difficulty</TableHead>
                                                    <TableHead>Link</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {item.questions.map((question) => {
                                                    return (
                                                        <TableRow key={question.name}>
                                                            <TableCell className="font-medium">{question.name}</TableCell>
                                                            <TableCell>{question.difficulty}</TableCell>
                                                            <TableCell className="text-right"><a href={question.link} target="_blank" className="hover:underline underline-offset-4 flex gap-1 items-center">leetcode<ArrowTopRightIcon /></a></TableCell>
                                                        </TableRow>
                                                    )
                                                })}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>)
                    })}
                </Accordion>
            </div>
        </div>
    );
};

export default AlgoAccordion;

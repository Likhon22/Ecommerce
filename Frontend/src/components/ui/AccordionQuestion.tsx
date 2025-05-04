import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { TAccordionQuestion } from "@/types/accordionQuesiton";

type AccordionQuestionProps = {
  questions: TAccordionQuestion;
};
const AccordionQuestion = ({ questions }: AccordionQuestionProps) => {
  return (
    <div>
      <Accordion type="single" collapsible>
        {questions.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-semibold text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-secondary">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionQuestion;

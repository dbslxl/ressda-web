import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function FAQ() {
  return (
    <div className='pt-4 px-8 flex-row'>
      <p className="text-3xl font-semibold py-6">자주 하는 질문</p>
      <Accordion type="single" collapsible className='pb-1'>
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-xl text-gray-700 hover:text-gray-900'>Is it accessible?</AccordionTrigger>
          <AccordionContent className='text-lg'>
            Yes. It adheres to the WAI-ARIA design pattern.
            Yes. It adheres to the WAI-ARIA design pattern.
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className='pb-1'>
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-xl text-gray-700 hover:text-gray-900'>Is it accessible?</AccordionTrigger>
          <AccordionContent className='text-lg'>
            Yes. It adheres to the WAI-ARIA design pattern.
            Yes. It adheres to the WAI-ARIA design pattern.
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className='pb-1'>
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-xl text-gray-700 hover:text-gray-900'>Is it accessible?</AccordionTrigger>
          <AccordionContent className='text-lg'>
            Yes. It adheres to the WAI-ARIA design pattern.
            Yes. It adheres to the WAI-ARIA design pattern.
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className='pb-1'>
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-xl text-gray-700 hover:text-gray-900'>Is it accessible?</AccordionTrigger>
          <AccordionContent className='text-lg'>
            Yes. It adheres to the WAI-ARIA design pattern.
            Yes. It adheres to the WAI-ARIA design pattern.
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className='pb-1'>
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-xl text-gray-700 hover:text-gray-900'>Is it accessible?</AccordionTrigger>
          <AccordionContent className='text-lg'>
            Yes. It adheres to the WAI-ARIA design pattern.
            Yes. It adheres to the WAI-ARIA design pattern.
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    
  )
}

export default FAQ
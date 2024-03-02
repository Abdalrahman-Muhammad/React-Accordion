import { useState } from 'react';
import AccordionItem from './AccordionItem';
const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className='accordion'>
      {data.map((ele, i) => (
        <AccordionItem
          key={ele.title}
          title={ele.title}
          number={i + 1}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {ele.text}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;

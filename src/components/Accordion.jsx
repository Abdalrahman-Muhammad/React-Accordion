import AccordionItem from './AccordionItem';
const Accordion = ({ data }) => {
  return (
    <div className='accordion'>
      {data.map((ele, i) => (
        <AccordionItem
          key={ele.title}
          title={ele.title}
          text={ele.text}
          number={i + 1}
        />
      ))}
    </div>
  );
};

export default Accordion;

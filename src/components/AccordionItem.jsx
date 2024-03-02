const AccordionItem = ({ title, number, curOpen, onOpen, children }) => {
  const isOpen = number === curOpen; //devired state

  const handleToggle = () => {
    onOpen(() => {
      if (curOpen === number) return null;
      return number;
    });
  };
  console.log(curOpen);
  return (
    <div className={`item ${isOpen && 'open'}`} onClick={handleToggle}>
      <p className='number'>{number < 9 ? `0${number}` : number}</p>
      <p className={`title`}>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {isOpen && <div className='content-box'>{children}</div>}
    </div>
  );
};

export default AccordionItem;

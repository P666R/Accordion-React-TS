import { useState } from 'react';

interface Item {
  title: string;
  text: string;
}

const faqs: Item[] = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

function App(): JSX.Element {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }: { data: Item[] }): JSX.Element {
  return (
    <div className="accordion">
      {data.map<JSX.Element>((el, index) => (
        <AccordionItem key={index} {...el} num={index} />
      ))}
    </div>
  );
}

function AccordionItem({
  num,
  title,
  text,
}: Item & { num: number }): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleToggle() {
    setIsOpen((i: boolean): boolean => !i);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>

      {isOpen && <p className="content-box">{text}</p>}
    </div>
  );
}

export default App;

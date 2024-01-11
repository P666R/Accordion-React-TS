import { useState } from 'react';

interface Item {
  title: string;
  text: string;
}

interface AccordionProps {
  data: Item[];
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

function Accordion({ data }: AccordionProps): JSX.Element {
  const [currOpen, setCurrOpen] = useState<number | null>(null);

  return (
    <div className="accordion">
      {data.map<JSX.Element>((el, index) => (
        <AccordionItem
          key={index}
          title={el.title}
          num={index}
          currOpen={currOpen}
          onOpen={setCurrOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

interface AccordionItemProps {
  title: string;
  num: number;
  currOpen: number | null;
  onOpen: (num: number | null) => void;
  children: string;
}

function AccordionItem({
  num,
  title,
  currOpen,
  onOpen,
  children,
}: AccordionItemProps): JSX.Element {
  const isOpen: boolean = currOpen === num;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>

      {isOpen && <p className="content-box">{children}</p>}
    </div>
  );
}

export default App;

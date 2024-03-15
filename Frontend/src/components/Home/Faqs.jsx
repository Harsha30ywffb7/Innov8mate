
import React from 'react'
import { useState } from 'react';


const Faqs = () => {


  return (
    <div className="container">
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
  )
}

function Question({ question }) {
    const [isOpen, setOpen] = useState(false);
  
    return (
      <section className=''>
        <div className='bg-slate-300 flex p-4 m-4 rounded cursor-pointer justify-between font-sans'>
          <h4>{question.title}</h4>
          <p onClick={() => setOpen(!isOpen)} >{!isOpen ? '⬇️' : '⬆️'}</p>
        </div>
        {isOpen && <p className='m-4 border-r-8'>{question.info}</p>}
      </section>
    );
  }
const questions = [
    {
      id: 1,
      title: "Are the Placement Opportunities are available?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
      id: 2,
      title: "How Do I track my progress?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
      id: 3,
      title: "Is there any Customer Support?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 4,
        title: "How I get started?",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
      }
  ];

export default Faqs;
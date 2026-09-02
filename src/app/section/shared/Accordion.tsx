"use client";
import React, { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

const Accordion = ({
  items,
  defaultActive = 0,
}: {
  items: FaqItem[];
  defaultActive?: number | null;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultActive);

  const toggle = (index: number) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <ul className="accordion-box">
      {items.map((item, index) => (
        <li
          key={item.question}
          className={`accordion block ${activeIndex === index ? "active-block" : ""} ${
            index === items.length - 1 ? "mb-0" : ""
          }`}
        >
          <div
            className={`acc-btn ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggle(index)}
          >
            {item.question}
            <i className="icon fa fa-plus"></i>
          </div>
          <div className={`acc-content ${activeIndex === index ? "current" : ""}`}>
            <div className="content">
              <div className="text">{item.answer}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;

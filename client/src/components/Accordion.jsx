import React, { useState } from "react";

function Accordion({ title, content, img, postIcon }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="accordion">
        <div className="accordtion-box">
          <div className="accordion-icon">
            <img src={img} alt="" />
          </div>
          <div className="accordion-header" onClick={toggleAccordion}>
            <h3>{title}</h3>
            <img src={postIcon} alt="" className="accordion-PostIcon" />
            {/* <span className={`accordions ${isOpen ? "open" : ""}`}></span> */}
          </div>
        </div>
        {isOpen && <div className="accordion-content">{content}</div>}
      </div>
    </>
  );
}

export default Accordion;

import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./Collapse.scss";
import arrowIcon from "../../assets/icons/arrow.svg";

//Display a collapsible section with a title and content
function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
  if (isOpen) {
    // Set the maxHeight to the scrollHeight of the content, allowing content to fully expand if isOpen
    contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
  } else {
    //Hide the content if not open
    contentRef.current.style.maxHeight = "0px";
  }
}, [isOpen]); // This effect runs whenever the isOpen state changes.

  return (
    <div className="collapse-container">
      <div className="collapse-title">
        <h2>{title}</h2>
        <img
          onClick={() => setIsOpen(!isOpen)}
          className={`arrow-icon ${isOpen ? "rotate" : ""}`}
          src={arrowIcon}
        ></img>
      </div>
      <div ref={contentRef} className="collapse-content">
        <div className="collapse-text">{children}</div>
      </div>
    </div>
  );
}
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};

export default Collapse;

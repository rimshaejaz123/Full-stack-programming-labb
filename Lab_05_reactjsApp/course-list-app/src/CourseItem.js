import React from "react";

function CourseItem(props) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px"
    }}>
      <h3>{props.courseName}</h3>
      <p>Instructor: {props.instructor}</p>
      <p>Duration: {props.duration}</p>
      <p>Type: {props.type}</p>
    </div>
  );
}

export default CourseItem;
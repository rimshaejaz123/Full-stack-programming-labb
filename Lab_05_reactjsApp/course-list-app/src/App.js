import React from "react";
import CourseItem from "./CourseItem";

function App() {

  const courses = [
    {courseName:"Web Development", instructor:"Dr Ahmed", duration:"8 weeks", type:"Online"},
    {courseName:"Data Structures", instructor:"Prof Ali", duration:"10 weeks", type:"Offline"},
    {courseName:"AI Basics", instructor:"Dr Sara", duration:"6 weeks", type:"Online"},
    {courseName:"Database Systems", instructor:"Dr Khan", duration:"9 weeks", type:"Offline"},
    {courseName:"Machine Learning", instructor:"Dr Hassan", duration:"12 weeks", type:"Online"}
  ];

  return (
    <div>
      <h1>Course List</h1>

      {courses.map((course,index) => (
        <CourseItem
          key={index}
          courseName={course.courseName}
          instructor={course.instructor}
          duration={course.duration}
          type={course.type}
        />
      ))}

    </div>
  );
}

export default App;
import React from "react";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <h1>Student Information</h1>

      <StudentCard
        name="Rimsha Ejaz"
        rollNo="21-CS-101"
        department="Computer Science"
        university="UAF"
        color="lightblue"
      />

      <StudentCard
        name="Eshal fatima"
        rollNo="21-CS-102"
        department="Software Engineering"
        university="UAF"
        color="lightgreen"
      />

      <StudentCard
        name="Hassan Raza"
        rollNo="21-CS-103"
        department="Information Technology"
        university="UAF"
        color="yellow "
      />

    </div>
  );
}

export default App;
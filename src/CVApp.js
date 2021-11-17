import React, { useState } from "react";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/App.css";

function CVApp() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [personalFields, setPersonalFields] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    website: "",
    phone: "",
    email: "",
    description: "",
  });
  const [eduFields, setEduFields] = useState([
    { schoolName: "", study: "", studyFrom: "", studyTo: "" },
  ]);
  const [expFields, setExpFields] = useState([
    { company: "", title: "", workFrom: "", workTo: "", jobDescription: "" },
  ]);

  const allFields = { personalFields, eduFields, expFields };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const onEdit = () => {
    setIsSubmitted(false);
  };

  const onInputChange = (e, index, fieldName) => {
    const target = e.target;
    const targetName = target.name;
    const value = target.value;
    if (fieldName === "personalFields") {
      setPersonalFields((prevFields) => ({
        ...prevFields,
        [targetName]: value,
      }));
    } else if (fieldName === "eduFields") {
      const newFields = [...eduFields];
      newFields[index] = { ...newFields[index], [targetName]: value };
      setEduFields(newFields);
    } else {
      const newFields = [...expFields];
      newFields[index] = { ...expFields[index], [targetName]: value };
      setExpFields(newFields);
    }
  };

  const onAddEduField = () => {
    setEduFields((prevFields) => [
      ...prevFields,
      { schoolName: "", study: "", studyFrom: "", studyTo: "" },
    ]);
  };

  const onRemoveEduField = (index) => {
    setEduFields((prevFields) => eduFields.filter((field, i) => i !== index));
  };

  const onAddExpField = () => {
    setExpFields((prevFields) => [
      ...prevFields,
      { company: "", title: "", workFrom: "", workTo: "", jobDescription: "" },
    ]);
  };

  const onRemoveExpField = (index) => {
    setExpFields((prevFields) => expFields.filter((field, i) => i !== index));
  };

  const additionalEduFields = eduFields.slice(1).map((field, i) => {
    return (
      <Education
        key={i + 1}
        index={i + 1}
        data={eduFields}
        onRemove={(e) => onRemoveEduField(i + 1)}
        onChange={(e) => onInputChange(e, i + 1, "eduFields")}
      />
    );
  });

  const additionalExpFields = expFields.slice(1).map((field, i) => {
    return (
      <Experience
        key={i + 1}
        index={i + 1}
        data={expFields}
        onRemove={(e) => onRemoveExpField(i + 1)}
        onChange={(e) => onInputChange(e, i + 1, "expFields")}
      />
    );
  });

  return (
    <div className="App">
      <header className="Header">
        <h1 className="Title">CV CRAFT</h1>
      </header>
      {!isSubmitted && (
        <CVForm
          onSubmit={onSubmit}
          onChange={onInputChange}
          onAddEdu={onAddEduField}
          eduFields={additionalEduFields}
          onAddExp={onAddExpField}
          expFields={additionalExpFields}
          data={allFields}
        />
      )}
      {isSubmitted && <CVPreview data={allFields} onEdit={onEdit} />}
    </div>
  );
}

export default CVApp;

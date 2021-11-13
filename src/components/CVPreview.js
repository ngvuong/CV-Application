import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import CVPage from "./CVPage";

function CVPreview(props) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({ content: () => componentRef.current });
  return (
    <main>
      <CVPage reference={componentRef} data={props.data} />
      <button className="Btn EditBtn" onClick={props.onEdit}>
        Edit
      </button>
      <button className="Btn PrintBtn" onClick={handlePrint}>
        Print CV
      </button>
    </main>
  );
}

export default CVPreview;

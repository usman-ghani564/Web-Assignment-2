import * as React from "react";
import SearchBarComponent from "./SearchBarComponent";
import TeacherRow from "./TeacherRow";
import data from "./data/RowsData.json"

function BaseComponent(props) {
  return (
    <div>
      <SearchBarComponent />
      <div>
      {data.rows.map((row)=>{
        return <TeacherRow teacher_row = {row}></TeacherRow>
      })}
      </div>
      
    </div>
  );
}

export default BaseComponent;

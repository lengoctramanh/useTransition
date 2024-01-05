/* eslint-disable react/prop-types */
// REACT
import { Fragment } from "react";

// eslint-disable-next-line react/prop-types
export const StudentList = ({data}) => {
  return (
    <Fragment>
      {data.map((student, index) => (
        <p key={index}>{student}</p>
      ))}
    </Fragment>
  );
};

export default StudentList;


import React from "react";
import NameField from "./Field";
import DateField from "./Date";
import UpdateBtn from "./Update";

let name, date;

const Form = ({ formData }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const viewValues = Object.values(formData.view);
  const childrenValues = Object.values(viewValues[0].children);
  const childrenKeys = Object.keys(viewValues[0].children);
  // debugger;
  const dataValues = Object.values(formData.data);
  console.log(dataValues[0]);

  const keys = Object.keys(dataValues[0]);
  for (let i = 0; i < keys.length; i++) {
    date = dataValues[0][keys[0]].toLocaleString().slice(0, 10);
    name = dataValues[0][keys[1]];
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>{viewValues[0].title}</h2>

      {childrenValues.map((value) => {
        switch (value.component) {
          case "Text":
            return (
              <NameField key={childrenKeys[0]} value={value} name={name} />
            );
          case "Date":
            return (
              <DateField key={childrenKeys[1]} value={value} date={date} />
            );
          case "Command":
            return <UpdateBtn key={childrenKeys[2]} value={value} />;
          default:
            return (
              <NameField key={childrenKeys[0]} value={value} name={name} />
            );
        }
      })}
    </form>
  );
};

export default Form;

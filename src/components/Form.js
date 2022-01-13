import React from "react";
import NameField from "./Field";
import DateField from "./Date";
import UpdateBtn from "./Update";

const Form = ({ formData }) => {
  const { title, children } = Object.values(formData.view)[0];
  // console.log(children);

  const data = Object.values(formData.data)[0];
  // console.log(data);
  // console.log(Object.keys(children).map((key) => ({...children[key], id: {key}})));

  return (
    <form>
      <h2>{title}</h2>
      {Object.keys(children).map((key) => {
        // console.log(key);
        // console.log(children[key]);
        const { component, label, name, path, text } = children[key];
        // console.log(data[path]);

        switch (component) {
          case "Text":
            return (
              <NameField
                key={key}
                value={data[path]}
                name={name}
                label={label}
              />
            );
          case "Date":
            return (
              <DateField
                key={key}
                value={data[path].toLocaleString().slice(0, 10)}
                name={name}
                label={label}
              />
            );
          case "Command":
            return <UpdateBtn key={key} text={text} />;
          default:
            return (
              <NameField
                key={key}
                value={data[path]}
                name={name}
                label={label}
              />
            );
        }
      })}
    </form>
  );
};

export default Form;

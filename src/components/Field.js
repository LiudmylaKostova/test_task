const NameField = ({ value, name }) => {
  const { path, label } = value;
  return (
    <div className="wrapper">
      <input
        className="input"
        type={path}
        name={label}
        value={name}
      />
      <label
        className="label"
        // htmlFor={value.component}
      >
        {label}
      </label>
    </div>
  );
};

export default NameField;

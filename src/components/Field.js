const NameField = ({ value, name, label }) => {
  return (
    <div className="wrapper">
      <input className="input" type="text" name={name} value={value} />
      <label className="label">{label}</label>
    </div>
  );
};

export default NameField;

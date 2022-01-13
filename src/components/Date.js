const DateField = ({ value, name, label }) => {
  return (
    <div className="wrapper">
      <input className="input" type="date" name={name} value={value} />
      <label className="label">{label}</label>
    </div>
  );
};

export default DateField;

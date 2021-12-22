const DateField = ({ value, date }) => {
  const {path, label} = value
    return (
    <div className="wrapper">
      <input
        className="input"
        type={path}
        name={label}
        value={date}
      />
      <label className="label">{label}</label>
    </div>
  );
};

export default DateField;


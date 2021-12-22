const UpdateBtn = ({ value }) => {
  return (
    <div className="wrapp">
      <button
        className="button"
        // key={childrenKeys[2]}
      >
        {value.text}
      </button>
    </div>
  );
};

export default UpdateBtn;

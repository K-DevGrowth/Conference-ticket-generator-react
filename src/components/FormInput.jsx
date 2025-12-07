const FormInput = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className="py-2">
      <label className="text-Neutral-0 font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        className="border placeholder-Neutral-500 outline-none focus:ring-1 ring-offset-2 ring-offset-Neutral-900 ring-Neutral-300 hover:bg-Neutral-500/50 bg-Neutral-700/20 border-Neutral-500 block w-full px-3 py-2 rounded-md text-Neutral-300"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {error && (
        <div className="text-Orange-700 flex items-center space-x-1">
          <img src="icon-info.svg" alt="" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default FormInput;

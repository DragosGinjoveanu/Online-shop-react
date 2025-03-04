export default function CustomInput({
  label,
  id,
  type,
  trailingElement,
  className = "w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-500",
  ...props
}) {
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea id={id} className={className} {...props}></textarea>
      ) : (
        <div className="relative">
          <input id={id} type={type} className={className} {...props} />
          {trailingElement && (
            <div className="absolute right-3 top-3 text-gray-600">
              {trailingElement}
            </div>
          )}
        </div>
      )}
    </>
  );
}

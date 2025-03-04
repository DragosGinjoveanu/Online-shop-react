export default function CustomButton({
  children,
  color = "bg-blue-500",
  hoverColor = "bg-blue-700",
  position = "",
  ...props
}) {
  let className = `${position} w-full ${color} text-white font-bold py-2 px-4 rounded hover:${hoverColor} focus:outline-none focus:ring`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

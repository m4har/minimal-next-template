import { InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
}
function Input(props: Props) {
  const { label, placeholder } = props;
  return (
    <div className="my-4">
      <p>{label}</p>
      <input
        {...props}
        className="border-2 rounded px-2 h-10 w-48"
        placeholder={placeholder}
      />
    </div>
  );
}

export default memo(Input);

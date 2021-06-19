import { InputHTMLAttributes, memo, forwardRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
}
const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, placeholder } = props;
  return (
    <div className="my-4">
      <p>{label}</p>
      <input
        {...props}
        ref={ref}
        className="border-2 rounded px-2 h-10 w-48"
        placeholder={placeholder}
      />
    </div>
  );
});

export default memo(Input);

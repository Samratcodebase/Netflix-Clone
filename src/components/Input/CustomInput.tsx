type CustomInputProps = {
  setFunction: (value: string) => void;
} & React.ComponentProps<"input">;

export default function CustomInput({
  setFunction,
  type,
  placeholder,

  ...props
}: CustomInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...props}
      onChange={(e) => {
        setFunction(e.target.value);
      }}
    />
  );
}

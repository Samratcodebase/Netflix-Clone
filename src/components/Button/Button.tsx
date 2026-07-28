interface ButtonProps {
  Type: "button" | "reset" | "submit";
  Text: string;
  isDisabled: boolean;
}

export default function Button({ Type, Text, isDisabled }: ButtonProps) {
  return (
    <button className="app-button" type={Type} disabled={isDisabled}>
      {Text}
    </button>
  );
}

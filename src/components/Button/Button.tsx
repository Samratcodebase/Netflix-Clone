interface ButtonProps {
  Type: "button" | "reset" | "submit";
  Text: string;
}

export default function Button({ Type, Text }: ButtonProps) {
  return <button className="app-button" type={Type}>
    {Text}
  </button>;
}

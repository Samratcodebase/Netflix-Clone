import "./Login.css";
import logo from "../../assets/logo.png";
import CustomInput from "../../components/Input/CustomInput";
import { useState } from "react";
import Button from "../../components/Button/Button";

export default function Login() {
  const [Email, setEmail] = useState<string>("");
  const [Name, setName] = useState<string>("");
  const [Phone, setPhone] = useState<string>("");
  const [isLoading, setisLoading] = useState<boolean>(false);
  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisLoading(true);
    console.log("Making Api call Wait");

    setTimeout(() => {
      console.log("Email", Email);
      console.log("Name", Name);
      console.log("Phone ", Phone);

      console.log("API call Done");
      setisLoading(false);
    }, 3000);
  };

  return (
    <div className="Login">
      <img src={logo} className="login-logo" alt="login-logo" />
      <div className="login-form">
        <h1>Sign In</h1>
        <form action="" onSubmit={handleSubmission}>
          <CustomInput
            setFunction={setName}
            type="text"
            placeholder="Enter your Name"
            value={Name}
          />
          <CustomInput
            setFunction={setEmail}
            type="email"
            placeholder="Enter your Email"
            value={Email}
          />
          <CustomInput
            setFunction={setPhone}
            type="tel"
            placeholder="Enter your Phone"
            value={Phone}
          />
          <Button Type="submit" Text={isLoading ? "Submiting...." : "Signup"} />
        </form>
      </div>
    </div>
  );
}

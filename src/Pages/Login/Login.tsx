import "./Login.css";
import logo from "../../assets/logo.png";
import CustomInput from "../../components/Input/CustomInput";
import { useState, type FormEventHandler } from "react";
import Button from "../../components/Button/Button";

export default function Login() {
  const [signState, setSignState] = useState<boolean>(true);
  const [Email, setEmail] = useState<string>("");
  const [Name, setName] = useState<string>("");
  const [Phone, setPhone] = useState<string>("");
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [Error, setError] = useState<boolean>(false);

  const handleSubmission: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (Email.trim() == "" || Name.trim() == "" || Phone.trim() == "") {
      setError(true);
      return;
    }

    setisLoading(true);
    console.log("Making Api call Wait");

    setTimeout(() => {
      console.log("Email", Email);
      console.log("Name", Name);
      console.log("Phone ", Phone);

      console.log("API call Done");
      setisLoading(false);
      setError(false);
    }, 3000);
  };

  const ChangePageState = (): void => {
    setName("");
    setisLoading(false);
    setError(false);
    setSignState((prev) => !prev);
  };

  return (
    <div className="Login">
      <img src={logo} className="login-logo" alt="login-logo" />
      <div className="login-form">
        <h1>{signState ? "Login" : "Sign Up"}</h1>
        <form action="" onSubmit={handleSubmission}>
          {signState ? (
            <></>
          ) : (
            <CustomInput
              setFunction={setName}
              type="text"
              placeholder="Enter your Name"
              value={Name}
            />
          )}

          <CustomInput
            setFunction={setEmail}
            type="email"
            placeholder="Enter your Email"
            value={Email}
          />
          <CustomInput
            setFunction={setPhone}
            type="password"
            placeholder="Enter your Password"
            value={Phone}
          />
          <Button
            Type="submit"
            Text={
              signState
                ? isLoading
                  ? " Sigining In "
                  : "Sing In"
                : isLoading
                  ? " Signing Up "
                  : "Sing Up"
            }
            isDisabled={isLoading}
          />
        </form>
        <div>
          {" "}
          <p>
            {" "}
            {signState ? (
              <p> New To Netflix ?</p>
            ) : (
              <p>Already Have Account ?</p>
            )}
          </p>
          <button onClick={ChangePageState}>
            {" "}
            {signState ? "Sign Up" : "Sign In"}
          </button>
          {Error ? <h1>All Fileds Required</h1> : ""}
        </div>
      </div>
    </div>
  );
}

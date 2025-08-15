import { SiGnuprivacyguard } from "react-icons/si";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { useContext } from "react";

const SignUp = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  function callApi(values) {
    axios.post("https://myeasykart.codeyogi.io/signup", {
      fullName: values.fullName,
      username: values.userName,
      email: values.email,
      password: values.password
    }).then((response) => {
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      setUser(user);
      navigate("/");
    }).catch((err) => {
      console.log("error", err.response?.data || err)
    });
  }

  const schema = Yup.object().shape({
    fullName: Yup.string().required("FullName is required"),
    userName: Yup.string().required("UserName is required"),
    email: Yup.string().min(3, "Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),

  });

  const initialValues = {
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-no-repeat bg-[url('https://tse1.mm.bing.net/th/id/OIP.nn8CQsrncHyC-RasmGfLSQHaEK?pid=Api&P=0&h=180')] px-4">
      <div className="flex flex-col items-center gap-6 w-full max-w-sm md:max-w-md bg-white/10 p-6 rounded-xl backdrop-blur-sm">
        <SiGnuprivacyguard className="text-white text-7xl md:text-9xl" />
        <Formik initialValues={initialValues} onSubmit={callApi} validationSchema={schema}>
          <Form className="flex flex-col gap-3 w-full">
            <Input
              label="Full Name"
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full Name"

            />
            <Input
              label="User Name"
              id="userName"
              name="userName"
              type="text"
              placeholder="User Name"
            />
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />

            <Input
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <Input
              label="Confirm Password"
              id="ConfirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="bg-white text-blue-950 px-4 py-2 mt-4 rounded hover:bg-blue-100 transition font-medium"
            >
              Submit
            </button>
            <p className="text-white text-sm self-center">
              Already have an account?{" "}
              <Link to="/login" className="hover:underline">
                Login
              </Link>{" "}
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
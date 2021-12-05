import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import type { NextPage } from "next";
import * as Yup from "yup";
import FormTextInput from "../../components/form/FormTextInput";

const SignIn: NextPage = () => {
  return (
    <section className="flex justify-center align-middle mt-10">
      <div className="border p-10 w-96 shadow-md">
        <p className="font-bold mb-10 text-center">SIGN IN</p>
        <Formik
          initialValues={{
            email: "",
            pass: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            pass: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <div className="mb-2">
              <FormTextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-2">
              <FormTextInput
                label="Password"
                name="pass"
                type="text"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-center">
              <Button className="text-center" type="submit" variant="contained">
                Sign In
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};
export default SignIn;

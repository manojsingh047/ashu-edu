import { Button, MenuItem } from "@mui/material";
import { Form, Formik } from "formik";
import type { NextPage } from "next";
import * as Yup from "yup";
import FormSelect from "../../components/form/FormSelect";
import FormTextInput from "../../components/form/FormTextInput";

const qualficationOptions = [
  {
    value: "bTech",
    label: "B.Tech",
  },
  {
    value: "bA",
    label: "B.A",
  },
  {
    value: "bSc",
    label: "B.Sc",
  },
  {
    value: "diploma",
    label: "Diploma",
  },
];
const qualificationValue = qualficationOptions.map((option) => option.value);

const SignUp: NextPage = () => {
  return (
    <section className="flex justify-center align-middle mt-10">
      <div className="border p-10 w-96 shadow-md">
        <p className="font-bold mb-10 text-center">SIGN UP</p>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            qualification: "", // added for our select
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            phone: Yup.string().required("Required"),
            qualification: Yup.string()
              .oneOf(qualificationValue)
              .required("Required"),
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
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="mb-2">
              <FormTextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Doe"
              />
            </div>
            <div className="mb-2">
              <FormTextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="jane@formik.com"
              />
            </div>
            <div className="mb-2">
              <FormTextInput
                label="Phone"
                name="phone"
                type="text"
                placeholder="9876543210"
              />
            </div>
            <div className="mb-2">
              <FormSelect
                label="Qualifications"
                name="qualification"
                options={qualficationOptions}
              />
            </div>
            <div className="flex justify-center">
              <Button className="text-center" type="submit" variant="contained">
                Submit
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};
export default SignUp;

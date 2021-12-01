import type { NextPage } from "next";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
interface LoginProps {}

const SignIn: NextPage<LoginProps> = () => {
  //   const [, login] = useLoginMutation();
  //   const router = useRouter();

  return (
    <div>
      <Heading mb={10} textAlign="center">
        Login
      </Heading>
      <Formik
        initialValues={{
          userNameOrEmail: "",
          password: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
          //   const response = await login({
          //     options: {
          //       userNameOrEmail: values.userNameOrEmail,
          //       password: values.password
          //     }
          //   });
          //   if (!!response.data?.login.errors) {
          //     setErrors(toErrorMap(response.data.login.errors));
          //   } else if (!!response.data?.login.user) {
          //     if (typeof router.query.next === 'string') {
          //       router.push(router.query.next);
          //     } else {
          //       router.push('/');
          //     }
          //   }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box mt={4}>
              <Input
                name="userNameOrEmail"
                placeholder="userNameOrEmail"
                label="Username Or Email"
              />
            </Box>
            <Box mt={4}>
              <Input
                name="password"
                placeholder="password"
                type="password"
                label="Password"
              />
            </Box>
            <Flex>
              <Box ml="auto" mt="2">
                {/* <NextLink href="/forgot-password">Forgot Password?</NextLink> */}
              </Box>
            </Flex>
            <Button mt={4} type="submit" isLoading={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default SignIn;

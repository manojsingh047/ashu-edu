import type { NextPage } from "next";
import { APP_NAME } from "../constants/Constants";

const Home: NextPage = () => {
  return (
    <div>
      <h1>{APP_NAME}</h1>
    </div>
  );
};

export default Home;

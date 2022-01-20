import React from "react";
import NewQuestion from "../../components/NewQuestion";
import Faq from "../../components/Faq";
import Layout from "../../components/Layout";

const forum = () => {
  return (
    <div>
      <Layout>
        <Faq />

        <h3 className="text-8xl text-center text-one font-second mt-24 mb-24">
          {" "}
          Vous avez une question, posez là !
        </h3>
        <NewQuestion />
      </Layout>
    </div>
  );
};

export default forum;

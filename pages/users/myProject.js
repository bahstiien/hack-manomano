import Router from "next/router";
import InputAutoComplete from "../../components/inputAutoComplete";
import AddIcon from "@mui/icons-material/Add";
import BtnUsers from "../../components/Btn";
import Layout from "../../components/Layout";

export default function MyProject() {
  return (
    <Layout>
      <div className="flex justify-center items-center flex-col mt-12">
        <div className="mb-10">
          <BtnUsers
            icon={<AddIcon />}
            className="cursor-pointer bg-three"
            onClick={() => Router.push("users/createProject")}
            content="Créer un projet"
          />
        </div>

        <InputAutoComplete />
      </div>
    </Layout>
  );
}

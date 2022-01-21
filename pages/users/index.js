import Router from "next/router";
import InputAutoComplete from "../../components/inputAutoComplete";
import AddIcon from "@mui/icons-material/Add";
import BtnUsers from "../../components/Btn";
import Layout from "../../components/Layout";
import DevisModuleArtisan from "../../components/DevisModuleArtisan";

export default function MyProject() {
  return (
    <Layout>
      <div className="flex justify-center items-center flex-col mt-12">
        <div className="mb-10">
          <BtnUsers
            icon={<AddIcon />}
            className="cursor-pointer bg-three"
            onClick={() => Router.push("users/createProject")}
            content="Projet en cour"
          />
        </div>
        <InputAutoComplete />
        <div className="mt-12 w-full px-10 flex ">
          <DevisModuleArtisan />
        </div>
        <main className="flex-grow-1" />
      </div>
    </Layout>
  );
}

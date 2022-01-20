import Router from "next/router";
import InputAutoComplete from "../../components/inputAutoComplete";
import AddIcon from "@mui/icons-material/Add";
import BtnUsers from "../../components/Btn";

export default function MyProject() {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-12">
        <div className="mb-10">
          <BtnUsers
            icon={<AddIcon />}
            className="cursor-pointer"
            onClick={() => Router.push("users/createProject")}
            content="Créer un projet"
          />
        </div>
       
        <InputAutoComplete />
      </div>
     
    </>
  );
}

import Layout from "../../../components/Layout";
import DashboardArtisan from "../../../components/DashboardArtisan";
import style from "../../../styles/Activity.module.css";

export default function DashboardPro() {
  return (
    <>
      <Layout>
        <DashboardArtisan />
        <div className={style.pushFooter}> </div>
      </Layout>
    </>
  );
}

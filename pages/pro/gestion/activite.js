import Layout from "../../../components/Layout";
import DashboardArtisan from "../../../components/DashboardArtisan";
import ServiceResultPro from "../../../components/ServiceResultPro";
import pax4 from "../../../public/worker/pax4.jpg";
import style from "../../../styles/Activity.module.css";
import Link from "next/link";

export default function Activité() {
  return (
    <>
      <Layout>
        <DashboardArtisan />
        <h2 className={style.titlePageUpdate}>
          Mettez à jour les informations de votre profil
        </h2>
        <div className={style.pageContainer}>
          <ServiceResultPro
            img={pax4}
            activity={
              <input
                type="text"
                className={style.priceInputForm}
                autoComplete="off"
                placeholder="Renovation"
              />
            }
            note="4.7"
            nb="8"
            name={
              <input
                type="text"
                className={style.priceInputForm}
                autoComplete="off"
                placeholder="Therese Tapalo"
              />
            }
            city={
              <input
                type="text"
                className={style.priceInputForm}
                autoComplete="off"
                placeholder="GIVORS"
              />
            }
            description={
              <textarea
                type="text"
                className={style.descriptionInput}
                autoComplete="off"
                placeholder="Je suis passionnée de rénovation, je suis architecte
       d'intérieur, disponible et à votre écoute"
              />
            }
          />
        </div>
        <Link passHref href="/service/details">
          <div className={style.linkBecomeArtisan}>Mettre a jour le profil</div>
        </Link>
      </Layout>
    </>
  );
}

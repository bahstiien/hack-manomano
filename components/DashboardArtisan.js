import style from "../styles/Dashboard.module.css";
import Link from "next/link";

export default function DashboardArtisan() {
  return (
    <>
      <div className={style.dashboardContainer}>
        <h1 className={style.titleDashboard}> Tableau de bord </h1>
        <div className={style.navLinkDashboard}>
          <Link passHref href="/pro/gestion/activite">
            <div className={style.linkDashboard}>DETAILS DE MON ACTIVITE</div>
          </Link>
          <Link passHref href="/pro/gestion/calendrier">
            <div className={style.linkDashboard}>GESTION CALENDRIER</div>
          </Link>
          <Link passHref href="/pro/gestion/tarifs">
            <div className={style.linkDashboard}>GESTION TARIFS / DEVIS</div>
          </Link>
          <Link passHref href="/pro/gestion/realisations">
            <div className={style.linkDashboard}>MES REALISATION </div>
          </Link>
        </div>
      </div>
    </>
  );
}

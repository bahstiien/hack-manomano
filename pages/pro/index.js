import Link from "next/link";
import style from "../../styles/PagePro.module.css";

export default function PagePro() {
  return (
    <>
      <h1>Bienvenue dans l&apos;espace pro</h1>
      <div className={style.containerWelcomePro}>
        <Link passHref href="/pro/become-manomano-team">
          <div>
            <h2 className={style.title}> Devenez Artisan labelisé @ManoMano</h2>
          </div>
        </Link>
        <h2>Accèdez à votre espace de gestion</h2>
      </div>
    </>
  );
}

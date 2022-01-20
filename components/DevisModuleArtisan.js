import style from "../styles/DevisModuleArtisan.module.css";
import Link from "next/link";
import Image from "next/image";
import checkIcon from "../public/images/checkIcon.png";

export default function DevisModuleArtisan() {
  const projects = [
    {
      devis: "00125412",
      client: "JoeLaBricole",
      projet: "salle de bain",
      date: "10/01/2022",
      prix: "1200.00",
      checked: true,
    },
    {
      devis: "34525412",
      client: "YannisB",
      projet: "salle de sport",
      date: "1/12/2021",
      prix: "1200.00",
      checked: false,
    },
    {
      devis: "90412125",
      client: "PedroDelaVega",
      projet: "sol salon",
      date: "10/01/2022",
      prix: "500.00",
      checked: true,
    },
    {
      devis: "21290415",
      client: "Mme Latour",
      projet: "abris de jardin",
      date: "02/03/2020",
      prix: "950.00",
      checked: true,
    },
    {
      devis: "93547893",
      client: "EDER G",
      projet: "Potager bio",
      date: "10/03/2021",
      prix: "90.00",
      checked: false,
    },
    {
      devis: "09458239",
      client: "Valentin G",
      projet: "chateau en espagne",
      date: "30/03/2020",
      prix: "1 200 900.00",
      checked: false,
    },
    {
      devis: "59372943",
      client: "Lea Sorceries",
      projet: "divers",
      date: "02/03/2020",
      prix: "9000.00",
      checked: true,
    },
    {
      devis: "13640415",
      client: "Jeannot",
      projet: "comptoir du bad",
      date: "02/01/2020",
      prix: "2500.00",
      checked: true,
    },
  ];
  return (
    <>
      <div className={style.devisListContainer}>
        <table className={style.tableDocument}>
          <caption>
            <h2 className={style.infoTitleDevisList}>
              Gestion de vos documents
            </h2>
          </caption>

          <thead className={style.tHeadDocument}>
            <tr className={style.trDocument}>
              <th className={style.th1}> Devis n°</th>
              <th className={style.th2}>Client</th>
              <th className={style.th3}> Projet</th>
              <th className={style.th4}> Date</th>
              <th className={style.th5}> Prix</th>

              <th className={style.th6}>
                <Image
                  src={checkIcon}
                  height={30}
                  width={30}
                  layout="fixed"
                  alt="icon-checked"
                />
              </th>
            </tr>
          </thead>
          <tbody className={style.tableBody}>
            {projects.map((project) => {
              return (
                <tr key={projects}>
                  <td className={style.td1}>{project.devis}</td>
                  <td className={style.td2}>{project.client}</td>
                  <td className={style.td3}>{project.projet}</td>
                  <td className={style.td4}>{project.date}</td>
                  <td className={style.td5}>{project.prix}€/TTC</td>
                  <td className={style.td6}>
                    {project.checked === true ? "OK" : "NO"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

import style from "../styles/ProjectModule.module.css";

import Image from "next/image";
import checkIcon from "../public/images/checkIcon.png";

export default function ProjectModuleArtisan() {
  const publications = [
    {
      projet: "salle de bain",
      date: "10/01/2022",
    },
    {
      projet: "salle de sport",
      date: "1/12/2021",
    },
    {
      projet: "sol salon",
      date: "10/01/2022",
    },
    {
      projet: "abris de jardin",
      date: "02/03/2020",
    },
    {
      projet: "Potager bio",
      date: "10/03/2021",
    },
    {
      projet: "chateau en espagne",
      date: "30/03/2020",
    },
  ];
  return (
    <>
      <div className={style.devisListContainer}>
        <h2 className={style.titlePublication}>Historique publication</h2>
        <table className={style.tableDocument}>
          <thead className={style.tHeadDocument}>
            <tr className={style.trDocument}>
              <th className={style.th1}> date</th>
              <th className={style.th2}>titre</th>
            </tr>
          </thead>
          <tbody className={style.tableBody}>
            {publications.map((publication) => {
              return (
                <tr key={publication}>
                  <td className={style.td1}>{publication.date}</td>
                  <td className={style.td2}>{publication.projet}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

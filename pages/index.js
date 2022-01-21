import Image from "next/image";
import Layout from "../components/Layout";
import logo from "../public/logoManoMano.png";
import image1 from "../public/image-01.jpeg";
import image2 from "../public/image-02.jpeg";
import image3 from "../public/image-03.jpeg";
import pub from "../public/images/pub.jpg";
import ReactPlayer from "react-player/youtube";
import work from "../public/worker/work.png";
import idea from "../public/worker/idea.png";
import question from "../public/worker/question.png";
import Link from "next/link";

export default function Home() {
  return (
    <Layout pageTitle="Mano Mano la communauté">
      <div>
        <link
          rel="stylesheet"
          href="https://cdn.tailgrids.com/tailgrids-fallback.css"
        />

        <section>
          <div className="container">
            <div className="flex justify-center mb-12">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=dQqDSuoc5Lk"
                className="react-player"
                height="500px"
                width="900px"
                controls={false}
                loop={true}
                playing={true}
                pip={false}
              />
            </div>
            <div>
              <div className="flex flex-col  justify-center items-center mt-12 mb-12 md:flex-row">
                <div className=" bg-gray-50 rounded-2xl shadow-2xl h-36 w-1/4 mb-8 flex justify-center items-center m-8 hover:bg-gray-200 hover:text-one ">
                  <div className="font-second text-5xl mx-2 text-center">
                    <h1 className="uppercase"> Un projet ? </h1>
                    <p className=" text-2xl">
                      Les artisans ManoMano sont là pour vous{" "}
                    </p>
                  </div>
                  <div className="m-2">
                    <Image src={work} alt="worker" />
                  </div>
                </div>

                <div className=" bg-gray-50 rounded-2xl shadow-2xl h-36 w-1/4 mb-8 flex justify-center items-center m-8 hover:bg-gray-200 hover:text-one ">
                  <div className="font-second text-5xl mx-2 text-center">
                    <h1 className="uppercase"> Une idée </h1>
                    <p className=" text-2xl">Inspirez vous</p>
                  </div>
                  <div className="m-2">
                    <Image src={idea} alt="worker" />
                  </div>
                </div>

                <div className=" bg-gray-50 rounded-2xl shadow-2xl h-36 w-1/4 mb-8 flex justify-center items-center m-8 hover:bg-gray-200 hover:text-one ">
                  <div className="font-second text-5xl mx-2 text-center">
                    <h1 className="uppercase"> Une question</h1>
                    <p className=" text-2xl">
                      La communauté répond à vos questions
                    </p>
                  </div>
                  <div className="m-2">
                    <Image src={question} alt="worker" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                passHref
                href="https://www.manomano.fr/co/tf/soldes-dhiver-691"
                target="_blank"
              >
                <a target="_blank">
                  <Image
                    src={pub}
                    alt="pub"
                    className="w-full rounded-3xl mb-8"
                  />
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

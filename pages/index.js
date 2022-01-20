import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import logo from "../public/logoManoMano.png";
import image1 from "../public/image-01.jpeg";
import image2 from "../public/image-02.jpeg";
import image3 from "../public/image-03.jpeg";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <Layout pageTitle="Mano Mano la communauté">
      <div>
        <div className={styles.container}>
          <Image className="" src={logo} alt="logo" layout="responsive" />
        </div>

        <link
          rel="stylesheet"
          href="https://cdn.tailgrids.com/tailgrids-fallback.css"
        />

        {/* <div className="flex justify-center">
          <iframe
            frameborder="0"
            allow="autoplay; fullscreen;"
            allowfullscreen
            className="w-2/3 h-screen"
            src="https://www.flexclip.com/embed/8e8b7d2755ae2e651a21e66c91ee39fb.html"
          />
        </div> */}
        <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <Image src={image1} alt="image1" className="w-full" />

                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                      >
                        Mano Mano services
                      </a>
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                    ></a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <Image src={image2} alt="image2" className="w-full" />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                      >
                        Mes projets
                      </a>
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                    ></a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <Image src={image3} alt="image" className="w-full" />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                      >
                        Espace Pro
                      </a>
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

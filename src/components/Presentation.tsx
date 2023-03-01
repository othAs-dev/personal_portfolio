import Image from "next/image";
import Me from "../../public/me-emoji.png";
import gradient from "../../public/Gradient.png";
import Skills from "../../public/Skills.png";
import { Preahvihear } from "@next/font/google";
import { useEffect, useState } from "react";
import Cards from "./Cards";
const preahvihear = Preahvihear({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
interface Props {
  presentation: string;
  name: string;
  company: string;
  job: string;
  description: string[];
  dataCards: string[];
}
function MachineAEcrire({ text }: { text: string }) {
  const [textePartiel, setTextePartiel] = useState("");

  useEffect(() => {
    let i = 0;
    const maxIndex = text.length;

    const intervalId = setInterval(() => {
      setTextePartiel(text.substring(0, i));
      i++;

      if (i > maxIndex) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [text]);

  return <div>{textePartiel}</div>;
}
export const Presentation: React.FC<Props> = ({
  presentation,
  name,
  company,
  job,
  description,
  dataCards,
}) => {
  return (
    <div className={`${preahvihear.className}`}>
      <div
        className={`flex justify-center items-center w-full ${preahvihear.className} text-white pt-20`}
      >
        <div className="flex items-center justify-center w-8/12 md:w-11/12 md:flex-col">
          <div
            className="w-2/3 max-w-xs h-56 flex justify-center items-center md:w-52"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)",
            }}
          >
            <Image
              width={170}
              src={Me}
              alt=""
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, #FFFFFF 17.71%, rgba(67, 67, 67, 0) 100%)",
              }}
            />
          </div>
          <div className="flex justify-center items-start flex-col gap-5 md:text-center md:items-center md:mt-2">
            <div className="flex items-start gap-1">
              <svg
                width="79"
                height="48"
                viewBox="0 0 79 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-3 md:hidden"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.409811 47.3962C0.409811 47.3962 0.409727 47.3963 0.540564 47.4697C0.611952 47.6016 0.612045 47.6016 0.612045 47.6016L0.61939 47.5976L0.641876 47.5855L0.730429 47.5382C0.808316 47.4967 0.923207 47.436 1.07095 47.3588C1.36645 47.2044 1.79333 46.9845 2.31837 46.7225C3.36861 46.1985 4.8109 45.5067 6.37975 44.8349C7.94916 44.1628 9.64228 43.5121 11.1948 43.0693C12.753 42.6248 14.1485 42.3961 15.1322 42.5499L15.1785 42.2535C14.1259 42.089 12.6764 42.3347 11.1125 42.7808C9.54291 43.2285 7.83687 43.8846 6.26166 44.5591C4.6859 45.2339 3.23811 45.9284 2.18444 46.4541C1.65752 46.717 1.22898 46.9378 0.932048 47.0929C0.925245 47.0964 0.918512 47.0999 0.911849 47.1034C0.956917 47.0199 1.00764 46.9253 1.06341 46.8204C1.30766 46.3614 1.64894 45.7059 2.03734 44.9196C2.81384 43.3475 3.78001 41.2499 4.53554 39.1525C5.28922 37.0603 5.84074 34.9487 5.77222 33.356C5.73791 32.5586 5.54747 31.871 5.12845 31.3832C4.70476 30.8901 4.06748 30.6243 3.19228 30.6328L3.19519 30.9328C4.00484 30.9249 4.54829 31.1683 4.9009 31.5787C5.25818 31.9946 5.43963 32.6049 5.4725 33.3689C5.53832 34.8989 5.00534 36.9631 4.2533 39.0508C3.50312 41.1333 2.54236 43.2197 1.76836 44.7867C1.38151 45.5699 1.04165 46.2227 0.798567 46.6795C0.677032 46.9079 0.579708 47.0873 0.512822 47.2096C0.479379 47.2707 0.453548 47.3175 0.436106 47.3489L0.416331 47.3845L0.409811 47.3962ZM0.540564 47.4697L0.612045 47.6016L0.156433 47.8481L0.409811 47.3962L0.540564 47.4697Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M38.8032 11.1122C25.9197 18.0561 14.4217 27.8131 7.47084 39.0643L7.72607 39.2219C14.6424 28.0267 26.0951 18.3023 38.9455 11.3763C51.7959 4.45035 66.03 0.330274 78.4998 0.330273V0.0302734C65.9696 0.0302729 51.6867 4.16841 38.8032 11.1122Z"
                  fill="white"
                />
              </svg>
              <p className="md:text-center">
                Hello ! Je suis{" "}
                <strong className="font-bold text-text-purple">{name}</strong>
              </p>
            </div>
            <div className="pl-10 md:pl-0 md:w-10/12">
              {description.map((item, index) => (
                <div key={index}>
                  {index === 0 && <p className="text-sm">{item}</p>}
                  {index === 1 && (
                    <p className="text-lg">
                      {item}
                      <span className="text-text-purple">
                        &lt; saisissant &gt;{" "}
                      </span>
                      ...
                    </p>
                  )}
                  {index === 2 && (
                    <p className="text-sm">
                      et que les deux sont essentiels pour créer des sites web
                      remarquables.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center w-full text-white pt-20 ${preahvihear.className}`}
      >
        <div className="w-8/12 pb-5 md:w-10/12 md:text-center">
          <h1 className="text-2xl pb-1 md:pb-3">
            <MachineAEcrire text={job} />
          </h1>
          <p className="flex flex-row gap-2 md:flex-col md:gap-1 md:items-center">
            Actuellement, je suis développeur web chez{" "}
            <span className="text-ouivalo flex flex-row gap-1">
              {" "}
              <img
                src="https://ouivalo.fr/wp-content/uploads/2022/12/cropped-favicon-96x96-1-32x32.png"
                alt="icone"
                className="h-6 w-6"
              />
              <a href="https://ouivalo.fr">{company}</a>
            </span>
          </p>
        </div>
        <p className="w-8/12 md:w-10/12 text-sm">{presentation}</p>
      </div>
      <div
        className="mt-20 w-full flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${gradient.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "20%",
        }}
      >
        <div className="w-8/12 md:w-10/12">
          <h2 className="text-2xl text-white pb-2">
            Experience professionnelles & Formations
          </h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-5 max-w-7xl">
          {Object.entries(dataCards).map(([key, value]) => (
            <Cards key={key} card={value} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-20 w-full gap-10">
        <div className="w-8/12 md:10/12">
          <h2 className="text-white text-xl text-center md:text-md">
            Technos sur lesquels j'ai travaillé dans des projets en{" "}
            <span className="text-text-purple">entreprise </span>
            ou bien dans des projets{" "}
            <span className="text-text-purple">scolaire</span>.
          </h2>
        </div>
        <div className="w-8/12 md:w-10/12 flex justify-center items-center">
          <Image src={Skills} alt="technos" width={725} />
        </div>
      </div>
    </div>
  );
};

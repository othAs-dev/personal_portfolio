import Image from "next/image";
import img from "../../public/ouivaloLogo.png";
export default function Cards() {
  return (
    <div
      style={{
        background:
          "rgb(19,4,40) linear-gradient(180deg, rgba(19,4,40,1) 0%, rgba(68,29,124,1) 93%);",
      }}
      className="w-4/12 max-w-3xl rounded-lg flex justify-start pl-5 items-center px-1 py-2 border border-t-border md:w-10/12"
    >
      <div className="text-white flex flex-row gap-5">
        <div className="flex items-center">
          <Image src={img} alt="" width={75} />
        </div>
        <div className="flex flex-col w-full  gap-2">
          <h3 className="text-md font-bold">Développeur Full-stack</h3>
          <p>
            développeur Full-stack xxxxxxxxxx développeur Full-stack xxxxxxxxxx
            développeur Full-stack xxxxxxxxxx{" "}
          </p>
          <div className="flex justify-start">
            <button className="bg-color-btn border border-border rounded-lg py-1 w-40">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

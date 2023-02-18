import Image from "next/image";
import img from "../../public/ouivaloLogo.png";
export default function Cards() {
  return (
    <div
      style={{
        background:
          "rgb(19,4,40) linear-gradient(180deg, rgba(19,4,40,1) 0%, rgba(68,29,124,1) 93%);",
      }}
      className="w-4/12 max-w-3xl rounded-lg flex justify-center items-center px-1 py-5 border border-t-border md:w-10/12"
    >
      <div className="text-white flex flex-row gap-5">
        <div className="flex items-center">
          <Image src={img} alt="" width={80} />
        </div>
        <div className="flex flex-col w-2/3 gap-3">
          <h3 className="text-xl font-bold">Développeur Full-stack</h3>
          <p>développeur Fullsack</p>
          <button className="bg-color-btn border border-border rounded-lg py-2 w-40">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

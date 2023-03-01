import logo from "../../public/logo.png.png";
import { Roboto } from "@next/font/google";
import Image from "next/image";
const inter = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export function Footer() {
  return (
    <div className="bg-purple">
      <div className="flex w-full justify-">
        <div className="w-6/12 lg:w-4/12 block md:flex justify-center md:hidden">
          <Image src={logo} alt="logo" width={100} />
        </div>
        <div
          className={`flex justify-end items-center text-white ${inter.className} mr-6 w-10/12 max-w-xl lg:w-6/12 md:mt-8 md:mb-8 md:w-full md:justify-center`}
        >
          <div className="flex items-center text-xl gap-5 lg:justify-around lg:gap-3">
            <a href="https://www.linkedin.com/in/othmane-ait-salah-36736423a/">
              {" "}
              <i className="fa-brands fa-linkedin text-white cursor-pointer hover:text-2xl"></i>
            </a>
            <a href="https://github.com/othAs-dev">
              <i className="fa-brands fa-github text-white cursor-pointer hover:text-2xl"></i>
            </a>
            <a href="mailto:othmane.developer@gmail.com">
              <i className="fa fa-envelope text-white cursor-pointer hover:text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="pt-1 pb-1 text-white bg-deep-purple text-center">
        <p>
          By <strong>Othmane Ait Salah</strong>
        </p>
      </div>
    </div>
  );
}

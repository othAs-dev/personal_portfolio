import Image from "next/image";
import logo from "../../public/logo.png.png";
export function Navbar() {
  return (
    <header className="bg-purple">
      <nav className="flex w-full justify-center">
        <div className="w-7/12 lg:w-4/12 block md:flex justify-center ">
          <Image src={logo} alt="logo" width={100} />
        </div>
        <div
          className={`flex w-4/12 max-w-xl justify-between items-center text-white  lg:w-6/12 md:hidden`}
        >
          <a href="#" className="bg-low-purple p-3 rounded-xl">
            Home
          </a>
          <a href="" className="hover:bg-low-purple p-3 rounded-xl">
            Projets
          </a>
          <a href="#form" className="hover:bg-low-purple p-3 rounded-xl">
            Contactez-moi
          </a>
          <div className="flex items-center justify-between text-xl gap-5 lg:justify-around lg:gap-3">
            <a href="https://www.linkedin.com/in/othmane-ait-salah-36736423a/">
              {" "}
              <i className="fa-brands fa-linkedin text-white cursor-pointer hover:text-2xl"></i>
            </a>
            <a href="https://github.com/othAs-dev">
              <i className="fa-brands fa-github text-white cursor-pointer hover:text-2xl"></i>
            </a>
            <a href="tel:+33755384212">
              <i className="fa fa-phone text-white cursor-pointer hover:text-2xl"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

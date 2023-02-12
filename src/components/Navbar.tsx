import Image from "next/image";
import logo from "../../public/logo.png.png"
import { Roboto } from '@next/font/google'
const inter = Roboto({ weight: ['400', '700'], style: ['normal', 'italic'], subsets: ['latin'], })
export function Navbar() {
    return (
        <header className="w-full bg-purple">
            <nav className="flex w-11/12 justify-around">
                <div className="w-6/12">
                    <Image src={logo} alt="logo" width={100}/>
                </div>
                <div className={`flex w-6/12 justify-between items-center text-white ${inter.className}`}>
                    <a href="#" className="bg-low-purple p-3 rounded-xl">Home</a>
                    <a href="" className="hover:bg-low-purple p-3 rounded-xl">A propos</a>
                    <a href="" className="hover:bg-low-purple p-3 rounded-xl">Projets</a>
                    <a href="" className="hover:bg-low-purple p-3 rounded-xl">Contactez-moi</a>
                <div className="flex items-center text-xl">
                    <i className="fa-brands fa-linkedin text-white mr-3"></i>
                    <i className="fa-brands fa-github text-white"></i>
                </div>
                </div>
            </nav>
        </header>
    )
}
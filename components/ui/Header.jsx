import Link from "next/link";
import { Button } from "./button";


// components
import Nav from "../Nav";
import MobileNav from "./MobileNav";

const Header = () =>{
    return (
    <header className="py-8 xl:py-12 text-white bg-blue-50/20">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Henock <span className="text-accent">.</span>
                </h1>
            </Link>

            {/* desktop nav & hire me button*/}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="./contact">
                <Button class="bg-sky-500 hover:bg-sky-700 ...">Hire me</Button>
                </Link>
            </div>
            {/* mobile nav */}
            <div className="xl:hidden"> 
                <MobileNav  /> 
                 </div>
        </div>
    </header>
    );
};

export default Header;
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

type Prop = {};
const Navbar = (props: Prop) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-2xl font-black font-mono">EffMation</p>
      </aside>

      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center list-none gap-4">
          <li>
            <Link href={"#"}>Products</Link>
          </li>{" "}
          <li>
            <Link href={"#"}>Pricing</Link>
          </li>{" "}
          <li>
            <Link href={"#"}>Clients</Link>
          </li>{" "}
          <li>
            <Link href={"#"}>Resources</Link>
          </li>{" "}
          <li>
            <Link href={"#"}>Documentation</Link>
          </li>{" "}
          <li>
            <Link href={"#"}>Enterpise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link href={"/dashboard"}
        className="relative"
        >
            {true ? 'Dashboard':"Get Started"}
        </Link>
      </aside>
      <MenuIcon className="md:hidden"/>
    </header>
  );
};

export default Navbar;

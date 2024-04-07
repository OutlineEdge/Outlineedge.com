import React from "react";
interface Props {
  title: string;
  activeTitle: string;
  href: string;
  children: React.ReactNode;
}
const NavBtn = ({ title, activeTitle, href, children }: Props) => {
  return (
    <li>
      <a aria-current="page" href={href}>
        <button
          className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white   active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize ${
            title.toLowerCase() === activeTitle.toLowerCase()
              ? "bg-gradient-to-tr from-blue-600 to-blue-400 hover:shadow-blue-500/40 shadow-md shadow-blue-500/20 hover:shadow-lg"
              : "hover:bg-white/10"
          }`}
          type="button"
        >
          {children}
          <p className="block font-sans text-base antialiased font-medium leading-relaxed capitalize text-inherit">
            {title}
          </p>
        </button>
      </a>
    </li>
  );
};

export default NavBtn;

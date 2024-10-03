import {
  SiFireship,
  SiGithub,
  SiSupabase,
} from "@icons-pack/react-simple-icons";
import React from "react";

const Header = () => {
  return (
    <header className="border-b-2  w-full h-20">
      <div className="w-[90%]  m-auto lg:w-[80%] xl:w-[1224px] flex justify-between align-baseline">
        <div className="flex gap-2 items-center text-slate-600 pt-3">
          <div className="flex flex-col gap-1">
            <SiFireship color="#E6522C" />
            <SiSupabase color="#E6522C" />
          </div>
          <div className="flex flex-col gap-0">
            <span className="tracking-wide font-bold text-xl leading-none">
              Awesome
            </span>
            <span className="tracking-wide font-bold text-xl leading-none">
              Prometheus
            </span>
            <span className="tracking-wide font-bold text-xl leading-none">
              Toolkit
            </span>
          </div>
        </div>
        <div className="flex gap-2 items-center align-baseline mt-8">
          <SiGithub color="#64748b" className="text-sm" />
          <span className="text-slate-500 text-base">125 stars</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

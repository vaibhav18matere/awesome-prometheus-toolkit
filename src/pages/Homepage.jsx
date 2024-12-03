import React, { useState } from "react";
import { Card } from "../components/Card";
import { libraries } from "../utils/libraries";
import { databases } from "../utils/databases";
import { CgFormatSlash } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLibraries = libraries.filter((lib) =>
    lib.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDatabases = databases.filter((database) =>
    database.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="w-[90%] py-16 m-auto lg:w-[80%] xl:w-[1224px] dark:bg-gray-900">
      <div className="text-black dark:text-white font-medium text-xl leading-7">
        Browse Library
      </div>

      <div className="serchBar relative">
        <input
          type="text"
          placeholder="Search for a component"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-8 text-sm border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-md p-2 indent-6 pr-10 font-normal relative outline-none tracking-normal"
        />
        <IoIosSearch className="serchIcon absolute left-3 top-11 indent-10 font-semibold text-gray-400" />
        <CgFormatSlash className="slashIcon absolute right-3 top-10 bg-gray-100 dark:bg-gray-700 text-xl text-gray-500" />
      </div>

      <section>
        <h2 className="uppercase text-[10px] font-semibold text-black dark:text-white py-4">
          Basic Resource Monitoring
        </h2>
        <div className="grid  md:grid-cols-3 gap-4">
          {filteredLibraries.map((lib) => (
            <Card
              key={lib.heading}
              icon={lib.icon}
              rules={lib.rules}
              description={lib.description}
              heading={lib.heading}
              link={lib.link}
              className="description  mt-4"
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="uppercase text-[10px] font-semibold text-slate-400 pt-8 ">
          Databases and Brokers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {filteredDatabases.map((database) => (
            <Card
              key={database.heading}
              icon={database.icon}
              classname={database.classname}
              rules={database.rules}
              description={database.description}
              heading={database.heading}
              link={database.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Homepage;

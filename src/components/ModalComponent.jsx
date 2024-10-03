import React from "react";

export const ModalComponent = ({ data }) => {
  return (
    <div className="h-[500px] px-4 py-8 overflow-y-auto ">
      {data.length === 0 ? (
        <p>No data available for this service.</p>
      ) : (
        <div className="flex gap-6 flex-col">
          {data.map((item, index) => (
            <div key={index} className="min-w-[300px] flex-shrink-0">
              <div className="flex gap-4 items-center">
                {/* Index number inside a circle */}
                <span className="text-[#64748B] rounded-full h-10 w-10 p-3 text-xs font-bold bg-[#F1F5F9] leading-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-medium leading-5 text-[#475569]">
                    {item.name}
                  </p>
                  <p className="text-xs font-medium leading-4 text-[#64748B]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Content section */}
              <div className="ml-[72px] bg-[#F8FAFC] rounded-md h-auto text-slate-400 p-5 mt-4 overflow-x-auto">
                {/* Alert details */}
                <p className="text-sm text-[#032F62] font-mono">
                  <span className="text-[14px] font-[400] text-[#22863A]">
                    - alert :
                  </span>{" "}
                  {item.name}
                </p>
                <p className="text-sm text-[#032F62] font-mono ml-5 text-nowrap">
                  <span className="text-[14px] font-[400] text-[#22863A]">
                    expr :
                  </span>{" "}
                  {item.query}
                </p>
                <p className="text-sm text-[#032F62] font-mono ml-5">
                  <span className="text-[14px] font-[400] text-[#22863A]">
                    For:
                  </span>{" "}
                  {item.for || "0m"}
                </p>

                {/* Labels section */}
                <ul className="list-disc ml-5 ">
                  <li className="text-[14px] font-[400] font-mono text-[#22863A]">
                    labels:
                    <ul className="ml-4">
                      <li className="text-sm text-[#032F62] font-mono">
                        <span className="text-[14px] font-[400] text-[#22863A]">
                          Severity:
                        </span>{" "}
                        {item.severity}
                      </li>
                    </ul>
                  </li>
                </ul>

                {/* Annotations section */}
                <ul className="ml-5 ">
                  <li className="text-[14px] font-[400] font-mono text-[#22863A]">
                    annotations:
                    <ul className="ml-4">
                      <li className="text-sm text-[#032F62] font-mono">
                        <span className="text-[14px] font-[400] text-[#22863A]">
                          summary:
                        </span>{" "}
                        {item.name}
                      </li>
                      <li className="text-sm text-[#032F62] font-mono text-nowrap">
                        <span className="text-[14px] font-[400] text-[#22863A]">
                          description:
                        </span>{" "}
                        {item.description}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

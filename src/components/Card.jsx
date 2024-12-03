import React, { useState, useEffect } from "react";
import { Modal } from "./Modal"; // Adjust the path as necessary
import { ModalComponent } from "./ModalComponent";

export const Card = ({
  icon: Icon,
  heading,
  rules,
  description,
  classname,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched Data:", data);
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching the JSON data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOpenModal = () => {
    if (!jsonData) return;

    if (!Array.isArray(jsonData.groups)) {
      console.error("Invalid data structure: groups is not an array");
      return;
    }

    const relevantData = jsonData.groups.flatMap((group) =>
      Array.isArray(group.services)
        ? group.services.flatMap((service) =>
            service.name === heading ? service.exporters : []
          )
        : []
    );

    const extractedData = relevantData.flatMap((exporter) =>
      exporter.rules.map((rule) => ({
        name: rule.name,
        query: rule.query,
        for: rule.for,
        severity: rule.severity,
        description: rule.description,
      }))
    );

    // console.log("Extracted Data:", extractedData);
    setModalData(extractedData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 border p-4 rounded dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-2">
        {Icon && <Icon className={classname} />}
        <span className="text-sm font-bold text-black dark:text-white">{heading}</span>
      </div>
      <div>
        <span className="text-xs font-bold uppercase text-slate-400 bg-slate-100 dark:bg-gray-700 p-[6px] rounded-xl">
          {rules} rules
        </span>
        <span className="text-xs font-medium text-black dark:text-white ml-2">
          {description}
        </span>
      </div>
      <button
        onClick={handleOpenModal}
        className="inline-flex border items-center justify-center text-black dark:text-white dark:border-gray-600 rounded font-semibold text-xs leading-4 px-1 py-2 gap-[10px]"
      >
        Visit Alert Rules
      </button>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="flex items-center gap-4 border-b py-4 px-2">
          <div className="flex items-center gap-2">
            {Icon && <Icon className={classname} />}
            <span className="text-base font-semibold leading-6 text-slate-600">
              {heading}
            </span>
          </div>
          <div>
            <span className="text-xs font-light uppercase text-slate-500 bg-slate-100 p-1 rounded-xl">
              {rules} rules
            </span>
          </div>
        </div>
        <ModalComponent data={modalData} />
      </Modal>
    </div>
  );
};

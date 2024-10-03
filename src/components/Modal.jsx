import React from "react";
import PropTypes from "prop-types";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[90%] md:w-[60%] xl:[55%]  m-auto relative ">
        <div className="">
          <button
            onClick={onClose}
            className="absolute top-3 right-2 text-base  text-gray-500 hover:text-gray-800"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

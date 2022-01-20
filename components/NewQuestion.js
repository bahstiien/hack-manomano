import React from "react";

const newQuestion = () => {
  return (
    <div>
      <div className="flex justify-center items-center antialiased">
        <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
          <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
            <p className="font-semibold font-second text-5xl text-one">
              Nouvelle question
            </p>
          </div>

          <div className="flex flex-col px-6 py-5 bg-gray-50">
            <p className="mb-2 font-semibold text-gray-700">Question ?</p>
            <textarea
              type="text"
              name=""
              placeholder="..."
              className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
            ></textarea>
            <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
              <div className="w-full sm:w-1/2">
                <p className="mb-2 font-semibold text-gray-700">Catégorie</p>
                <select
                  type="text"
                  className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                >
                  <option value="0">Agencement</option>
                  <option value="0">Plomberie</option>
                  <option value="0">Menuiserie</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
            <p className="font-semibold text-gray-600">Annulation</p>
            <button className="px-4 py-2 text-white font-semibold bg-four rounded">
              Partage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newQuestion;

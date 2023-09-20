import React from "react";
import FeatureButton from "./FeatureButton";

function Cards({ item }) {
  return (
    <div className="w-full  h-full  p-5 rounded-2xl bg-slate-800 flex flex-col justify-between transition-all  hover:bg-slate-700 ">
      <h2 className="text-2xl font-semibold text-white text-center">
        {item.title}
      </h2>
      <div className="my-2 mx-1">
        {item.description.map((item) => (
          <FeatureButton title={item} />
        ))}
      </div>

      <div className="py-4 text-center">
        {item.route !== undefined ? (
          <>
            <a
              href={item.route}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block"
            >
              {item.btnTitle}
            </a>
          </>
        ) : (
          <button
            onClick={item.onclick}
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block"
          >
            {item.btnTitle}
          </button>
        )}
      </div>
    </div>
  );
}

export default Cards;

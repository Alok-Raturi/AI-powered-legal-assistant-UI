import React from "react";
import Cards from "./Cards";

const Main = ({ handleSidebarChat }) => {
  const data = [
    {
      title: "Generate Your Document",
      description: [
        "Loan Agreement",
        "Amending Agreement",
        "Confidentiality Agreement",
      ],
      btnTitle: "More",
      route: "Generate-Token",
    },
    {
      title: "Customize your document",
      description: [
        "Recent document",
        "Any Other Documents",
        "Upload document to customize",
      ],
      btnTitle: "Modify-Docs",
      route: "Customize-Docs",
    },
    {
      title: "Consult with Expert",
      description: [
        "Coperate Consulting",
        "Criminal Defense consulting",
        "Tax Consulting",
      ],
      btnTitle: "Get Legal Help",
      onclick: handleSidebarChat,
    },
  ];

  return (
    <div className="flex flex-col py-6  justify-between items-center gap-7  bg-transparent">
      <div className="bg-slate-900 p-4 rounded-lg text-center text-white m-2 md:m-0">
        <h1 className="text-xl  md:text-3xl font-bold  mb-3">
          Welcome to LEGAL DASTAVEZ
        </h1>
        <p className="hidden md:block text-sm  ">
          A Legal assistant for your day to day Government Documents and
          Affidavits and many more
        </p>
      </div>
      <div className="w-full h-full p-4  flex flex-col md:flex-row  justify-center items-stretch gap-4">
        {data.map((item, index) => {
          return <Cards item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import UploadDocs from "./UploadDocs";
import AfterUpload from "./AfterUpload";

const CustomiseDocuments = ({ open, handleSideBar, comp }) => {
  return (
    <div className="App">
      <div className="bg-slate-800">
        <Header show={open} handleSideBar={handleSideBar} />
      </div>
      <div
        className={`flex flex-col justify-between gap-2 h-full${
          open ? "h-full w-4/5 absolute right-0 transition-all" : "w-full"
        }`}
      >
        <Navbar show={open} handleSideBar={handleSideBar} />
        <div>
          <div className="bg-slate-900 p-4 rounded-lg text-center text-white m-4">
            <h1 className="text-xl md:text-3xl font-bold  ">
              Welcome to LEGAL DASTAVEZ
            </h1>
            <p className="hidden md:block text-sm  ">
              A Legal assistant for your day to day Government Documents and
              Affidavits and many more
            </p>
          </div>
          <div className="bg-slate-800 m-4 rounded-lg leading-5 p-5 text-center mb-20">
            <h1 className="text-xl md:text-2xl font-bold  mb-3">
              Customize your document
            </h1>
            <p className="hidden md:block text-sm">
              For any suggestions or for the better result of the Legal Document
              for the Judicial work . Connect with legal Dastavez to get your
              own document in easy word process and customize with the help of
              Dastavez Legal Norms Under the Government of India
            </p>
          </div>
          {comp === "/Customize-Docs" ? <UploadDocs /> : <AfterUpload />}
        </div>
      </div>
    </div>
  );
};

export default CustomiseDocuments;

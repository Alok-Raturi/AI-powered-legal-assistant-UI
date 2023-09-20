import React from "react";

const AfterUpload = () => {
  return (
    <div className=" flex m-3 gap-5 flex-col md:flex-row justify-center items-center">
      <div className="w-full h-full">
        <p className="text-black text-center p-2">Uploaded Document</p>
        <div className=" bg-black  rounded-lg p-2 overflow-auto text-justify">
          <p>
            The content of your uploaded document will be visible here. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Veniam, maxime
            cumque similique magni modi voluptatibus quam sapiente quisquam
            assumenda nostrum animi cupiditate reiciendis accusamus voluptate
            exercitationem? Facilis est dicta eaque?
          </p>
        </div>
      </div>
      <div className="flex flex-col  p-4">
        <div className="text-center text-black">
          <p>
            Document wise generated text for the Verify Update and Renewal
            Option
          </p>
        </div>
        <div className="w-full h-full bg-black"></div>
        <div className="flex flex-row flex-wrap justify-evenly items-center gap-4">
          <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-500">
            Verify Document
          </button>
          <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-500">
            Update Document
          </button>
          <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-500">
            Renew Document
          </button>
        </div>
        <div className="text-center bg-black p-4 rounded-full my-7 hover:bg-slate-500">
          <button>Download Your Document</button>
        </div>
      </div>
    </div>
  );
};

export default AfterUpload;

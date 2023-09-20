import React from "react";

function About() {
  return (
    <div className="bg-gray-100 py-16 about my-3">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-slate-900 p-4 rounded-lg text-center text-white mb-6">
            <h1 className="text-xl md:text-3xl font-bold  mb-3">
              Welcome to LEGAL DASTAVEZ
            </h1>
            <p className="hidden md:block text-sm  ">
              A Legal assistant for your day to day Government Documents and
              Affidavits and many more
            </p>
          </div>
          <p className="mt-2 text-sm md:text-xl text-gray-600 py-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            justo eget urna dignissim convallis. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Nullam ut
            malesuada quam. Nullam non dui ac lectus tincidunt semper. Fusce
            eget est ut elit pharetra varius eu id libero.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

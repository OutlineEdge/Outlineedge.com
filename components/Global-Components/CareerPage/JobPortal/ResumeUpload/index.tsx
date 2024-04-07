import React from "react";

const ResumeUpload = () => {
  return (
    <div>
      <div className="relative flex items-center py-5">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">XFOSOFT</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      <div className="w-full p-4 bg-white border border-l-4 rounded-xl border-slate-300 border-l-cyan-500">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between gap-4 md:gap-2">
            <div className="text-justify">
              <p className="text-lg text-gray-600 md:text-2xl">
                Not finding suitable job?
              </p>
              <p>
                Fill up the form and upload your resume. We will reach out to
                you when we find a suitable post that matches your criteria
              </p>
            </div>
            <a
              href="#"
              target="_blank"
              className="flex items-center justify-center flex-shrink-0 w-24 h-8 gap-2 text-xs font-semibold text-black bg-transparent border-2 border-gray-600 md:text-lg md:w-40 rounded-3xl md:h-10 hover:text-white hover:bg-blue-700"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;

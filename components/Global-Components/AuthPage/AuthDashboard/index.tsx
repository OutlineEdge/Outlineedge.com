"use client";
import React, { useEffect, useState } from "react";
import { LogoutBtn } from "../Auth";
import { fetchAllJobs, fetchSubscriptions } from "@/app/dashboard/_actions";
import { Book, UserPlus } from "lucide-react";

const AuthDashboard = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [allSubscriptions, setAllSubscriptions] = useState([]);
  useEffect(() => {
    const getAllJobs = async () => {
      const jobs: any = await fetchAllJobs();
      setAllJobs(jobs.jobs);
    };
    const getSubscriptions = async () => {
      const subscriptions: any = await fetchSubscriptions();
      setAllSubscriptions(subscriptions.subscriptions);
    };
    getSubscriptions();
    getAllJobs();

    return () => {};
  }, []);

  return (
    <div className="mt-12">
      <div className="grid mb-12 gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl shadow-gray-400">
          <div className="absolute grid w-16 h-16 mx-4 -mt-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400 shadow-orange-500/40 place-items-center">
            <Book />
          </div>
          <div className="p-4 text-right">
            <p className="block font-sans text-lg antialiased font-bold leading-normal text-blue-gray-600">
              JOBS
            </p>
            <h4 className="block font-sans text-2xl antialiased leading-snug tracking-normal text-blue-gray-900">
              {allJobs.length}
            </h4>
          </div>
          <div className="p-4 border-t border-blue-gray-50">
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-600">
              <strong className="text-orange-500">
                Total number of avaliable jobs.
              </strong>
            </p>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl shadow-gray-400">
          <div className="absolute grid w-16 h-16 mx-4 -mt-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 shadow-orange-500/40 place-items-center">
            <UserPlus />
          </div>
          <div className="p-4 text-right">
            <p className="block font-sans text-lg antialiased font-bold leading-normal text-blue-gray-600">
              SUBSCRIPTIONS
            </p>
            <h4 className="block font-sans text-2xl antialiased leading-snug tracking-normal text-blue-gray-900">
              {allSubscriptions.length}
            </h4>
          </div>
          <div className="p-4 border-t border-blue-gray-50">
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-600">
              <strong className="text-blue-500">
                Total number of avaliable jobs.
              </strong>
            </p>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 gap-6 mb-4 xl:grid-cols-3">
        <div className="relative flex flex-col overflow-hidden text-gray-700 bg-white shadow-md bg-clip-border rounded-xl xl:col-span-2">
          <div className="relative flex items-center justify-between p-6 m-0 overflow-hidden text-gray-700 bg-transparent shadow-none bg-clip-border rounded-xl">
            <div>
              <h6 className="block mb-1 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Projects
              </h6>
              <p className="flex items-center gap-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
                <strong>30 done</strong> this month
              </p>
            </div>
            <button
              aria-expanded="false"
              aria-haspopup="menu"
              id=":r5:"
              className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currenColor"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="p-6 px-0 pt-0 pb-2 overflow-x-scroll">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      companies
                    </p>
                  </th>
                  <th className="px-6 py-3 text-left border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      budget
                    </p>
                  </th>
                  <th className="px-6 py-3 text-left border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      completion
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                        Material XD Version
                      </p>
                    </div>
                  </td>

                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <p className="block font-sans text-xs antialiased font-medium text-blue-gray-600">
                      $14,000
                    </p>
                  </td>
                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <div className="w-10/12">
                      <p className="block mb-1 font-sans text-xs antialiased font-medium text-blue-gray-600">
                        60%
                      </p>
                      <div className="flex w-full h-1 overflow-hidden font-sans text-xs font-medium rounded-sm flex-start bg-blue-gray-50">
                        <div className="flex items-center justify-center h-full text-white bg-gradient-to-tr from-blue-600 to-blue-400"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                        Add Progress Track
                      </p>
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <p className="block font-sans text-xs antialiased font-medium text-blue-gray-600">
                      $3,000
                    </p>
                  </td>
                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <div className="w-10/12">
                      <p className="block mb-1 font-sans text-xs antialiased font-medium text-blue-gray-600">
                        10%
                      </p>
                      <div className="flex w-full h-1 overflow-hidden font-sans text-xs font-medium rounded-sm flex-start bg-blue-gray-50">
                        <div className="flex items-center justify-center h-full text-white bg-gradient-to-tr from-blue-600 to-blue-400"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                        Fix Platform Errors
                      </p>
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <p className="block font-sans text-xs antialiased font-medium text-blue-gray-600">
                      Not set
                    </p>
                  </td>
                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <div className="w-10/12">
                      <p className="block mb-1 font-sans text-xs antialiased font-medium text-blue-gray-600">
                        100%
                      </p>
                      <div className="flex w-full h-1 overflow-hidden font-sans text-xs font-medium rounded-sm flex-start bg-blue-gray-50">
                        <div className="flex items-center justify-center h-full text-white bg-gradient-to-tr from-green-600 to-green-400"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                        Launch our Mobile App
                      </p>
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <p className="block font-sans text-xs antialiased font-medium text-blue-gray-600">
                      $20,500
                    </p>
                  </td>
                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <div className="w-10/12">
                      <p className="block mb-1 font-sans text-xs antialiased font-medium text-blue-gray-600">
                        100%
                      </p>
                      <div className="flex w-full h-1 overflow-hidden font-sans text-xs font-medium rounded-sm flex-start bg-blue-gray-50">
                        <div className="flex items-center justify-center h-full text-white bg-gradient-to-tr from-green-600 to-green-400"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                        Add the New Pricing Page
                      </p>
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <p className="block font-sans text-xs antialiased font-medium text-blue-gray-600">
                      $500
                    </p>
                  </td>
                  <td className="px-5 py-3 border-b border-blue-gray-50">
                    <div className="w-10/12">
                      <p className="block mb-1 font-sans text-xs antialiased font-medium text-blue-gray-600">
                        25%
                      </p>
                      <div className="flex w-full h-1 overflow-hidden font-sans text-xs font-medium rounded-sm flex-start bg-blue-gray-50">
                        <div className="flex items-center justify-center h-full text-white bg-gradient-to-tr from-blue-600 to-blue-400"></div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AuthDashboard;

import { NavLink } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Layout = ({ children }) => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className=" min-h-full bg-white">
        <div className="min-h-screen bg-gray-300">
          <div className="space-x-2 bg-[#1b1464] py-4 px-6 relative">
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.0}
                stroke="white"
                className="w-10 h-10"
                // width="100px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-white text-2xl px-2 font-semibold flex">
                Smartcheck
              </p>
            </div>
          </div>
          <div className="flex justify-between bg-white px-6">
            <div className="flex space-x-4">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-cyan-300 py-2 flex items-center space-x-2"
                    : "flex items-center space-x-2"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <span>Home</span>
              </NavLink>
              <NavLink
                to={"/servers"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-cyan-300 py-2 flex items-center space-x-2"
                    : "flex items-center space-x-2"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                  />
                </svg>

                <a href="/">Server</a>
              </NavLink>
              <NavLink
                to={"/applications"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-cyan-300 py-2 flex items-center space-x-2"
                    : "flex items-center space-x-2"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>

                <a href="/">Application</a>
              </NavLink>
            </div>

            <button
              onClick={openModal}
              className="rounded-md bg-cyan-300 px-4 py-1 my-2 font-medium text-cyan-800"
            >
              Check health status
            </button>
          </div>

          <div className="px-6">{children}</div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-60" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={
                  "inline-block text-left mt-14 bg-white transform rounded-2xl shadow-xl w-full max-w-screen-lg"
                }
              >
                <div className="px-12 py-8">
                  <h2 className="text-xl font-semibold ">
                    Conduct Health check
                  </h2>
                  <div className="px-12">
                    <div className="flex mt-6 ">
                      <h3 className="w-36">Applications</h3>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <input
                            id="app"
                            type="checkbox"
                            className=" w-9 h-4 text-blue-600 bg-cyan-50 rounded border-cyan-200 focus:ring-cyan-500"
                          />
                          <label htmlFor="app" className="w-32">
                            All Applications
                          </label>
                        </div>
                        <div className="mt-6 ">
                          <h2 className="mb-2">Select Applications</h2>
                          <div className="border-2 w-2/3 px-3 py-2">
                            <div className="flex items-center border-b py-1">
                              <input
                                id="app"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-cyan-50 rounded border-cyan-200 focus:ring-cyan-500"
                              />
                              <label htmlFor="app" className="ml-3">
                                App Name 1
                              </label>
                            </div>
                            <div className="flex items-center border-b py-1">
                              <input
                                id="app"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-cyan-50 rounded border-cyan-200 focus:ring-cyan-500"
                              />
                              <label htmlFor="app" className="ml-3">
                                App Name 2
                              </label>
                            </div>
                            <div className="flex items-center border-b py-1">
                              <input
                                id="app"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-cyan-50 rounded border-cyan-200 focus:ring-cyan-500"
                              />
                              <label htmlFor="app" className="ml-3">
                                App Name 3
                              </label>
                            </div>
                            <div className="flex items-center py-1">
                              <input
                                id="app"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-cyan-50 rounded border-cyan-200 focus:ring-cyan-500"
                              />
                              <label htmlFor="app" className="ml-3">
                                App Name 4
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-6">
                      <h3 className=" w-36">Server</h3>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <input
                            id="server"
                            type="checkbox"
                            className="w-9 h-4 text-blue-600 bg-cyan-50 rounded border-cyan-200 focus:ring-cyan-500"
                          />
                          <label htmlFor="app" className="">
                            All Servers
                          </label>
                        </div>
                        <div className="mt-6 ">
                          <h2 className="mb-2">Select Server</h2>
                          <div className="border w-2/3 px-3 py-2">
                            <div className="flex items-center border-b py-1">
                              <input
                                id="server"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-cyan-50 rounded border-cyan-200 focus:ring-cyan-500"
                              />
                              <label htmlFor="app" className="ml-3">
                                Server 1
                              </label>
                            </div>
                            <div className="flex items-center border-b py-1">
                              <input
                                id="server"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-cyan-50 rounded border-cyan-200 focus:ring-cyan-500"
                              />
                              <label htmlFor="server" className="ml-3">
                                Server 2
                              </label>
                            </div>
                            <div className="flex items-center border-b py-1">
                              <input
                                id="server"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-cyan-50 rounded border-cyan-200 focus:ring-cyan-500"
                              />
                              <label htmlFor="server" className="ml-3">
                                Server 3
                              </label>
                            </div>
                            <div className="flex items-center py-1">
                              <input
                                id="app"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-cyan-50 rounded border-cyan-200 focus:ring-cyan-500"
                              />
                              <label htmlFor="app" className="ml-3">
                                Server 4
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-10">
                    <div className="flex space-x-2">
                      <button onClick={closeModal}>Cancel</button>
                      <button className="rounded-md bg-cyan-300 px-4 py-1 my-2 font-medium text-cyan-800">
                        Check health status
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Layout;

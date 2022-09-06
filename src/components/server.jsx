import Layout from "../shared/Layout";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const DetailsIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
    </svg>
  );
};

const Server = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <Layout>
      <div className="mt-4 rounded-md bg-white py-4 px-8">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex w-10 items-center rounded-tl-md rounded-bl-md bg-gray-200 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <input
                type="input"
                id="default-search"
                className="rounded-lg border border-gray-200 bg-gray-50 p-1 pl-12 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Search"
              />
            </div>
            <div>
              <select
                name=""
                id=""
                className="w-40 rounded-lg border border-gray-200 p-1 text-gray-500"
              >
                <option value="" disabled selected hidden>
                  Active status
                </option>
                <option value="">Active</option>
                <option value="">Inactive</option>
                <option value="">All</option>
              </select>
            </div>
          </div>
          <button
            onClick={openModal}
            className="rounded-md bg-cyan-300 px-4 py-1 my-2 font-medium text-cyan-800"
          >
            Create Server
          </button>
        </div>
        <div className="relative mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-200 text-xs uppercase text-gray-700">
              <tr>
                <th scope="col" className="whitespace-nowrap py-3 px-6">
                  s/n
                </th>
                <th scope="col" className="py-3 px-6">
                  Server name
                </th>
                <th scope="col" className="whitespace-nowrap py-3 px-6">
                  ip address
                </th>
                <th scope="col" className="py-3 px-6">
                  cpu(%)
                </th>
                <th scope="col" className="py-3 px-6">
                  memory(%)
                </th>
                <th scope="col" className="py-3 px-6">
                  storage(%)
                </th>
                <th scope="col" className="py-3 px-6">
                  action
                </th>
                <th scope="col" className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white text-sm text-gray-700">
                <td className="whitespace-nowrap py-4 px-6">1</td>
                <td className="whitespace-nowrap py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    <p>Server name goes here</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-1">
                    {/* <span className="">3</span> */}
                    <p> IP address goes here</p>
                  </div>
                </td>
                <td className="py-4 px-6 uppercase ">85.6</td>
                <td className="whitespace-nowrap py-4 px-6">73.9</td>
                <td className="whitespace-nowrap py-4 px-6">50</td>
                <td className="whitespace-nowrap py-4 px-6">
                  <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                    Edit
                  </button>
                </td>
                <td className="whitespace-nowrap py-4 px-6">
                  <DetailsIcon className="h-5 w-5" />
                </td>
              </tr>
              <tr className="border-b bg-white text-sm text-gray-700">
                <td className="whitespace-nowrap py-4 px-6">2</td>
                <td className="whitespace-nowrap py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    <p>Server name goes here</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-1">
                    {/* <span className="">3</span> */}
                    <p> IP address goes here</p>
                  </div>
                </td>
                <td className="py-4 px-6 uppercase">85.6</td>
                <td className="whitespace-nowrap py-4 px-6">73.9</td>
                <td className="whitespace-nowrap py-4 px-6">50</td>
                <td className="whitespace-nowrap py-4 px-6">
                  <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                    Edit
                  </button>
                </td>
                <td className="whitespace-nowrap py-4 px-6">
                  <DetailsIcon className="h-5 w-5" />
                </td>
              </tr>
              <tr className="border-b bg-white text-sm text-gray-700">
                <td className="whitespace-nowrap py-4 px-6">3</td>
                <td className="whitespace-nowrap py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    <p>Server name goes here</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-1">
                    {/* <span className="">3</span> */}
                    <p> IP address goes here</p>
                  </div>
                </td>
                <td className="py-4 px-6 uppercase">85.6</td>
                <td className="whitespace-nowrap py-4 px-6">73.9</td>
                <td className="whitespace-nowrap py-4 px-6">50</td>
                <td className="whitespace-nowrap py-4 px-6">
                  <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                    Edit
                  </button>
                </td>
                <td className="whitespace-nowrap py-4 px-6">
                  <DetailsIcon className="h-5 w-5" />
                </td>
              </tr>
              <tr className="border-b bg-white text-sm text-gray-700">
                <td className="whitespace-nowrap py-4 px-6">4</td>
                <td className="whitespace-nowrap py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    <p>Server name goes here</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-1">
                    {/* <span className="">3</span> */}
                    <p> IP address goes here</p>
                  </div>
                </td>
                <td className="py-4 px-6 uppercase">85.6</td>
                <td className="whitespace-nowrap py-4 px-6">73.9</td>
                <td className="whitespace-nowrap py-4 px-6">50</td>
                <td className="whitespace-nowrap py-4 px-6">
                  <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                    Edit
                  </button>
                </td>
                <td className="whitespace-nowrap py-4 px-6">
                  <DetailsIcon className="h-5 w-5" />
                </td>
              </tr>
              <tr className="border-b bg-white text-sm text-gray-700">
                <td className="whitespace-nowrap py-4 px-6">5</td>
                <td className="whitespace-nowrap py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-red-500"></span>
                    <p>Server name goes here</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-1">
                    {/* <span className="">3</span> */}
                    <p> IP address goes here</p>
                  </div>
                </td>
                <td className="py-4 px-6 uppercase">85.6</td>
                <td className="whitespace-nowrap py-4 px-6">73.9</td>
                <td className="whitespace-nowrap py-4 px-6">50</td>
                <td className="whitespace-nowrap py-4 px-6">
                  <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                    Edit
                  </button>
                </td>
                <td className="whitespace-nowrap py-4 px-6">
                  <DetailsIcon className="h-5 w-5" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center mb-9 mt-9 space-x-1">
          <div className="uppercase">previous</div>
          <div className="flex">
            <div className="bg-cyan-300 rounded-full h-8 w-8 flex justify-center items-center text-sm">
              1
            </div>
            <div className="h-8 w-8 flex justify-center items-center text-sm">
              2
            </div>
            <div className="h-8 w-8 flex justify-center items-center text-sm">
              3
            </div>
            <div className="h-8 w-8 flex justify-center items-center text-sm">
              4
            </div>
            <div className="h-8 w-8 flex justify-center items-center text-sm">
              5
            </div>
            <div className="h-8 w-8 flex justify-center items-center text-sm">
              ...
            </div>
            <div className="h-8 w-8 flex justify-center items-center text-sm">
              1539
            </div>
          </div>
          <div className="uppercase">next</div>
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
                <div className="px-12 py-8  ">
                  <h2 className="text-xl font-semibold">Create a Server</h2>
                  <div className="px-12 w-2/3 space-y-4 mx-auto">
                    <h3 className="py-4">Enter Server details</h3>
                    <div className="flex items-center space-x-4">
                      <p className="w-32">Server Name</p>
                      <input className="rounded-md flex-1 border border-gray-200 bg-gray-50 py-3 px-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600" />
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="w-32">Server IP</p>
                      <input className="rounded-md flex-1 border border-gray-200 bg-gray-50 py-3 px-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600" />
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="w-32">CPU</p>
                      <input className=" rounded-md flex-1 border border-gray-200 bg-gray-50 py-3 px-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600" />
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="w-32">Storage</p>
                      <input className=" rounded-md flex-1 border border-gray-200 bg-gray-50 py-3 px-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600" />
                    </div>
                    <div className="flex justify-end mt-10">
                      <div className="flex space-x-4">
                        <button onClick={closeModal}>Cancel</button>
                        <button className="rounded-md bg-cyan-300 px-4 py-1 my-2 font-medium text-cyan-800">
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Layout>
  );
};

export default Server;

import Layout from "../shared/Layout";

const CheckingCircleIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="#24c977"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const DetailsIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="#e0b237"
      {...props}
    >
      <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
    </svg>
  );
};

const Dashboard = () => {
  return (
    <>
      <Layout>
        <div className="mt-4 flex space-x-4">
          <div className=" w-1/3 space-y-3 rounded-md border border-gray-200 bg-white py-2 px-4 shadow">
            <h2 className="text-sm">Application Status</h2>
            <div className="flex justify-between">
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full border-2 border-[#1b1464] bg-white px-2 py-1">
                  10
                </div>
                <p className="text-sm">All</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full border-2 border-transparent bg-[#24c977] px-3 py-1 text-white">
                  6
                </div>
                <p className="text-sm">Available</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full border-2 border-transparent bg-[#dc2626] px-3 py-1 text-white">
                  4
                </div>
                <p className="text-sm">Critical</p>
              </div>
            </div>
          </div>
          <div className="w-1/3 space-y-3 rounded-md border border-gray-200 bg-white py-2 px-4 shadow">
            <h2 className="text-sm">Servers</h2>
            <div className="flex justify-between">
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full border-2 border-[#1b1464] bg-white px-3 py-1">
                  4
                </div>
                <p className="text-sm">All</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full border-2 border-transparent bg-[#24c977] px-3 py-1 text-white">
                  2
                </div>
                <p className="text-sm">Available</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full border-2 border-transparent bg-[#e0b237] px-3 py-1 text-white">
                  2
                </div>
                <p className="text-sm">Critical</p>
              </div>
            </div>
          </div>
          <div className="w-1/3 space-y-3 rounded-md border border-gray-200 bg-white py-2 px-4 shadow">
            <h2 className="text-sm">Health check Count</h2>
            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <div className="rounded-full border-2 border-transparent bg-white px-2 text-3xl font-semibold text-gray-600">
                  60
                </div>
                <p className="text-sm">counts</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-md bg-white py-4 px-8">
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
                className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-1 pl-12 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter a Search Keyword"
              />
            </div>
            <div>
              <select
                name=""
                id=""
                className="w-40 rounded-lg border border-gray-200 p-1 text-gray-500"
              >
                <option value="" disabled selected hidden>
                  All application
                </option>
                <option value="">All application</option>
                <option value="">Application name 1</option>
                <option value="">Application name 2</option>
              </select>
            </div>
            <div>
              <select
                name=""
                id=""
                className="w-40 rounded-lg border border-gray-200 p-1 text-gray-500"
              >
                <option value="" diasbled selected hidden>
                  All servers
                </option>
                <option value="">All Servers</option>
                <option value="">Server 1</option>
                <option value="">Server 2</option>
              </select>
            </div>
            <div>
              <select
                name=""
                id=""
                className="w-44 rounded-lg border border-gray-200 p-1 text-gray-500"
              >
                <option value="" disabled selected hidden>
                  Health Check Status
                </option>
                <option value="">All Status</option>
                <option value="">Healthy</option>
                <option value="">Critical</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex px-4 py-4 relative justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>

              <p className="px-4">Showing 10 of 5000 Entries</p>
            </div>

            <div className="relative mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500">
                <thead className="bg-gray-200 text-xs uppercase text-gray-700">
                  <tr>
                    <th scope="col" className="whitespace-nowrap py-3 px-6">
                      s/n
                    </th>
                    <th scope="col" className="py-3 px-6">
                      application
                    </th>
                    <th scope="col" className="whitespace-nowrap py-3 px-6">
                      servers mapped
                    </th>
                    <th scope="col" className="whitespace-nowrap py-3 px-10">
                      last scan date
                    </th>
                    <th scope="col" className="py-3 px-6">
                      status
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
                        <p>Apllication name goes here</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1 text-cyan-500">
                        <span className="">3</span>
                        <p>servers</p>
                      </div>
                    </td>
                    <td className="py-4 px-6 uppercase">11/12/20 3:57:29 pm</td>
                    <td className="whitespace-nowrap py-4 px-6">
                      <div className="flex items-center space-x-1 text-center">
                        <div>
                          <CheckingCircleIcon className="h-5 w-5" />
                        </div>
                        <p className="px-2">Healthy</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-4 px-6">
                      <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                        View Result
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
                        <p>Apllication name goes here</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1 text-cyan-500">
                        <span className="">3</span>
                        <p>servers</p>
                      </div>
                    </td>
                    <td className="py-4 px-6 uppercase">11/12/20 3:57:29 pm</td>
                    <td className="whitespace-nowrap py-4 px-6">
                      <div className="flex items-center space-x-1 text-center">
                        <div className="h-5 w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="orange"
                            viewBox="0 0 24 24"
                            // strokeWidth={1.5}
                            stroke="white"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-4 px-6">
                      <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                        View Result
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
                        <p>Apllication name goes here</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1 text-cyan-500">
                        <span className="">3</span>
                        <p>servers</p>
                      </div>
                    </td>
                    <td className="py-4 px-6 uppercase">11/12/20 3:57:29 pm</td>
                    <td className="whitespace-nowrap py-4 px-6">
                      <div className="flex items-center space-x-1 text-center">
                        <CheckingCircleIcon className="h-5 w-5" />
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-4 px-6">
                      <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                        View Result
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
                        <p>Apllication name goes here</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1 text-cyan-500">
                        <span className="">3</span>
                        <p>servers</p>
                      </div>
                    </td>
                    <td className="py-4 px-6 uppercase">11/12/20 3:57:29 pm</td>
                    <td className="whitespace-nowrap py-4 px-6">
                      <div className="flex items-center space-x-1 text-center">
                        <CheckingCircleIcon className="h-5 w-5" />
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-4 px-6">
                      <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                        View Result
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
                        <p>Apllication name goes here</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1 text-cyan-500">
                        <span className="">3</span>
                        <p>servers</p>
                      </div>
                    </td>
                    <td className="py-4 px-6 uppercase">11/12/20 3:57:29 pm</td>
                    <td className="whitespace-nowrap py-4 px-6">
                      <div className="flex items-center space-x-1 text-center">
                        <CheckingCircleIcon className="h-5 w-5" />
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-4 px-6">
                      <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                        View Result
                      </button>
                    </td>
                    <td className="whitespace-nowrap py-4 px-6">
                      <DetailsIcon className="h-5 w-5" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-center mt-9 mb-9 space-x-1">
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
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;

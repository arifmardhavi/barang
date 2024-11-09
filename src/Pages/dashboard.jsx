import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Cards from "../components/Card"
import {Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import ProgressCircle from "../components/Chart/progressCharts";
import DataTable from "react-data-table-component"

const Dashboard = () => {
    const data = [
        {
            year: '2014',
            cost: 15,
        },
        {
            year: '2015',
            cost: 45,
        },
        {
            year: '2016',
            cost: 55,
        },
        {
            year: '2017',
            cost: 15,
        },
        {
            year: '2018',
            cost: 75,
        },
        {
            year: '2019',
            cost: 55,
        },
        {
            year: '2020',
            cost: 65,
        },
        {
            year: '2021',
            cost: 65,
        },
        {
            year: '2022',
            cost: 45,
        },
        {
            year: '2023',
            cost: 55,
        }
    ];
    const dataArea = [
        {
            name: 'Page A',
            uv: 1800,
            pv: 2400,
            amt: 2400,
          },
          {
            name: 'Page B',
            uv: 1100,
            pv: 1398,
            amt: 2210,
          },
          {
            name: 'Page C',
            uv: 1800,
            pv: 9800,
            amt: 2290,
          },
          {
            name: 'Page D',
            uv: 1500,
            pv: 3908,
            amt: 2000,
          },
          {
            name: 'Page E',
            uv: 2090,
            pv: 4800,
            amt: 2181,
          },
          {
            name: 'Page F',
            uv: 2290,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'Page G',
            uv: 1690,
            pv: 4300,
            amt: 2100,
          },
        // ... dan seterusnya
      ];
    
      const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Age',
            selector: row => row.age,
            sortable: true
        },
        {
            name: 'Action',
            selector: row => row.action,
            sortable: true
        },
    ]

    const dataAnggota = [
        { name: 'John Doe', age: 25 },
        { name: 'Jane Doe', age: 30 },
        { name: 'Michael Smith', age: 28 },
        { name: 'Emily Johnson', age: 22 },
        { name: 'Chris Evans', age: 32 },
        { name: 'Olivia Brown', age: 27 },
        { name: 'Sophia Wilson', age: 24 },
        { name: 'Daniel Martinez', age: 29 },
        { name: 'Mia Anderson', age: 26 },
        { name: 'Alexander Taylor', age: 31 },
        { name: 'Amelia Moore', age: 23 },
        { name: 'Elijah Thomas', age: 27 },
        { name: 'Isabella Jackson', age: 30 },
        { name: 'William White', age: 34 },
        { name: 'Ava Harris', age: 21 },
        { name: 'James Lewis', age: 29 },
        { name: 'Charlotte Clark', age: 25 },
        { name: 'Benjamin Walker', age: 33 },
        { name: 'Mason Hall', age: 26 },
        { name: 'Lucas Young', age: 28 }
    ]
    
    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Navbar />
                <div className="flex flex-col sm:flex-row justify-between px-5 py-3">
                    <Cards className=" w-full max-w-xs flex flex-col my-2 " >
                        <div className="flex flex-row justify-between mb-5">
                            <p className="text-xs font-thick text-slate-500">Cost Per Unit</p>
                            <span className="text-xs font-thick w-fit bg-blue-300 rounded-md px-1.5 py-0.5 text-blue-700 font-bold">Daily</span>
                        </div>
                        <div className="flex flex-row justify-between items-center sm:my-3 " >
                            <h1 className="sm:text-3xl text-xl font-semibold text-slate-700">$17.21</h1>
                            <span className="text-xs font-thick text-slate-500 flex flex-row items-center">12.5% <IoIosArrowRoundUp className="ml-1 text-green-500 text-lg" />  </span>
                        </div>
                        <div className=" w-full p-2">
                        <div className=' w-full bg-gray-200  rounded-full h-1 dark:bg-gray-700'>
                            <div className="bg-emerald-400 h-1 rounded-full w-1/6"></div>
                            </div>
                        </div>
                    </Cards>
                    <Cards className=" w-full max-w-xs flex flex-col my-2 " >
                        <div className="flex flex-row justify-between mb-5">
                            <p className="text-xs font-thick text-slate-500">Market Revenue</p>
                            <span className="text-xs font-thick w-fit bg-blue-300 rounded-md px-1.5 py-0.5 text-blue-700 font-bold">Per Week</span>
                        </div>
                        <div className="flex flex-row justify-between items-center sm:my-3 " >
                            <h1 className="sm:text-3xl text-xl font-semibold text-slate-700">$1875.54</h1>
                            <span className="text-xs font-thick text-slate-500 flex flex-row items-center">18.71% <IoIosArrowRoundDown className="ml-1 text-red-500 text-lg" />  </span>
                        </div>
                        <div className=" w-full p-2">
                        <div className=' w-full bg-gray-200  rounded-full h-1 dark:bg-gray-700'>
                            <div className="bg-red-400 h-1 rounded-full w-2/3"></div>
                            </div>
                        </div>
                    </Cards>
                    <Cards className=" w-full max-w-xs flex flex-col my-2 " >
                        <div className="flex flex-row justify-between mb-5">
                            <p className="text-xs font-thick text-slate-500">Expenses</p>
                            <span className="text-xs font-thick w-fit bg-blue-300 rounded-md px-1.5 py-0.5 text-blue-700 font-bold">Per Month</span>
                        </div>
                        <div className="flex flex-row justify-between items-center sm:my-3 " >
                            <h1 className="sm:text-3xl text-xl font-semibold text-slate-700">$784.62</h1>
                            <span className="text-xs font-thick text-slate-500 flex flex-row items-center">57% <IoIosArrowRoundUp className="ml-1 text-green-500 text-lg" />  </span>
                        </div>
                        <div className=" w-full p-2">
                        <div className=' w-full bg-gray-200  rounded-full h-1 dark:bg-gray-700'>
                            <div className="bg-yellow-400 h-1 rounded-full w-2/4"></div>
                            </div>
                        </div>
                    </Cards>
                    <Cards className=" w-full max-w-xs flex flex-col my-2 " >
                        <div className="flex flex-row justify-between mb-5">
                            <p className="text-xs font-thick text-slate-500">Daily Visits</p>
                            <span className="text-xs font-thick w-fit bg-blue-300 rounded-md px-1.5 py-0.5 text-blue-700 font-bold">All Time</span>
                        </div>
                        <div className="flex flex-row justify-between items-center sm:my-3 " >
                            <h1 className="sm:text-3xl text-xl font-semibold text-slate-700">1,15,187</h1>
                            <span className="text-xs font-thick text-slate-500 flex flex-row items-center">17.8% <IoIosArrowRoundDown className="ml-1 text-red-500 text-lg" />  </span>
                        </div>
                        <div className=" w-full p-2">
                        <div className=' w-full bg-gray-200  rounded-full h-1 dark:bg-gray-700'>
                            <div className="bg-blue-400 h-1 rounded-full w-1/3"></div>
                            </div>
                        </div>
                    </Cards>
                </div>
                <div className="flex flex-col sm:flex-row justify-between px-5" >
                    <Cards className=" w-full max-w-md flex flex-col my-2 " >
                        <h1 className="sm:text-xl text-sm font-semibold text-slate-700">Sales Analytics</h1>
                        <p className="sm:text-sm text-xs font-thick text-slate-500 mb-5">From date of 1st Jan 2020 to continue</p>
                        <div className="w-full h-[40vh] text-sm">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <Bar dataKey="cost" fill="#00C2B2" barSize={15} />
                                    <XAxis dataKey="year" />
                                    <YAxis />
                                    <Tooltip />
                                    <CartesianGrid strokeDasharray="3 3" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Cards>
                    <Cards className=" w-full max-w-sm flex flex-col my-2 " >
                        <h1 className="sm:text-xl text-sm font-semibold text-slate-700">Stock</h1>
                        <p className="sm:text-sm text-xs font-thick text-slate-500 mb-5">Recent Stock</p>
                        <div className="h-44">
                            <ProgressCircle percentage={92} />
                        </div>
                        <div className="flex flex-col justify-center items-center text-center text-slate-700 my-3 ">
                            <h1 className="text-md">Total sales made today</h1>
                            <p className="text-sm w-56">
                            Traditional heading elements are designed to work best in the meat of your page content.
                            </p>
                        </div>
                        <div className="flex flex-row justify-between items-center text-slate-700 my-3" >
                            <div className="flex flex-col items-center w-1/2">
                                <p>Target</p>
                                <span className="pt-2 font-bold text-xl flex flex-row items-center"><IoIosArrowRoundUp className=" text-green-500 text-3xl font-black" /> $7.8k</span>
                            </div>
                            <div className="flex flex-col justify-center items-center w-1/2">
                                <p>Target</p>
                                <span className="pt-2 font-bold text-xl flex flex-row items-center"><IoIosArrowRoundDown className=" text-red-500 text-3xl font-black" /> $1.4k</span>
                            </div>
                        </div>
                    </Cards>
                    <Cards className=" w-full max-w-md flex flex-col my-2 " >
                        <h1 className="sm:text-xl text-sm font-semibold text-slate-700">Account Transactions</h1>
                        <p className="sm:text-sm text-xs font-thick text-slate-500 mb-5">Transaction period from 21 July to 25 Aug</p>
                        <div className="flex flex-row justify-between items-center mb-5 pr-5 py-2 w-full" >
                            <p className="text-2xl font-semibold text-slate-700">$7841.12</p>
                            <span className="text-md font-thick w-fit bg-emerald-200 rounded-md px-1.5 py-0.5 text-emerald-500 font-bold"> +7.5%</span>
                        </div>
                        <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart
                                height={400}
                                data={dataArea}
                                margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis   
                        dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </Cards>
                </div>
                <div className="flex flex-col sm:flex-row justify-between px-5" >
                    <Cards className="w-full max-w-screen flex flex-col my-2 " >
                        <DataTable 
                            title="Data Anggota"
                            columns={columns}
                            data={dataAnggota}
                            pagination
                            highlightOnHover
                            fixedHeaderScrollHeight="300px"
                            responsive
                        />
                    </Cards>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard
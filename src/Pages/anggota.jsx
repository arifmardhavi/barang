import Cards from "../components/Card"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import DataTable from "react-data-table-component"

const Anggota = () => {

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
    ]

    const data = [
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
                <div className="flex flex-col w-full p-5">
                    <Cards className=" max-w-screen flex flex-col my-2 " >
                        <DataTable 
                            title="Data Anggota"
                            columns={columns}
                            data={data}
                            pagination
                            highlightOnHover
                            fixedHeader
                            style={{
                                header: {
                                    backgroundColor: '#6d28d9',
                                    color: '#fff',
                                }
                            }}
                        />
                    </Cards>
                </div>
                
            </div>
        </div>
    )
}

export default Anggota
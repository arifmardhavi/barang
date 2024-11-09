import { useEffect, useState } from "react"
import Cards from "../components/Card"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { getBarang } from "../services/barang.services"
import DataTable from "react-data-table-component"
import { Link } from "react-router-dom"

const Barang = () => {
    const [barang, setBarang] = useState([])

    useEffect(() => {
        getBarang((data) => {
            setBarang(data)
            localStorage.setItem('barang', JSON.stringify(data))
        })
    }, [])

    const ActionTable = (barang) => {
        return (
            <div className="flex flex-col" >
                <Link to={`/edit/${barang.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center my-1 rounded" >Edit</Link>
                <Link to={`/delete/${barang.id}`} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 text-center my-1 rounded" >Delete</Link>
            </div>
        )
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('id-ID', {style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });
    };

    const priceBodyTemplate = (barang) => {
        const price = parseInt(barang.harga) ?? 0;
    return formatCurrency(price);
    };

    const columns = [
        {
            name: 'Nama Barang',
            selector: row => row.nama_barang,
            sortable: true
        },
        {
            name: 'Jumlah',
            selector: row => row.jumlah,
            sortable: true
        },
        {
            name: 'Harga',
            selector: priceBodyTemplate,
            sortable: true
        },
        {
            name: 'Aksi',
            selector: ActionTable,
            sortable: true
        },
    ]

    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Navbar />
                <div className="flex flex-col w-full p-5">
                <Cards className=" max-w-screen flex flex-col my-2 " >
                    <DataTable title="Data Barang" columns={columns} data={barang} pagination highlightOnHover fixedHeader responsive />
                </Cards>
                </div>
            </div>
        </div>
    )
}

export default Barang
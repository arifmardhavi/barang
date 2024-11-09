import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center min-h-screen items-center'>
            <img src="../../public/assets/img/404.png" alt="404 Not Found Image" className="w-1/3" />
            <Link to={'/'} className=" w-fit mt-2 bg-blue-200 hover:bg-blue-700 hover:text-blue-200 text-blue-600 p-2 shadow-md rounded-md duration-300">Kembali ke Beranda</Link>
        </div>
    )
}

export default ErrorPage
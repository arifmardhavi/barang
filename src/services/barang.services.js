import axios from "axios";

export const getBarang = (callback) => {
    axios
        .get("http://127.0.0.1:8000/api/data_barang")
        .then((res) => {
            callback(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
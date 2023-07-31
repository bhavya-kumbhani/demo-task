import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductModel from "../../components/ProductModel";

const Users = () => {
    const [model, setModel] = useState(false);
    const [userData, setUserData] = useState([]);
    const [userId, setUserId] = useState("");
    const [singleProductData, setSingleProductData] = useState({});
    const handleClick = (item) => {
        setModel(true);
        setUserId(item.id)
        setSingleProductData(item)
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        await axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log("res", res)
                setUserData(res.data)
            }).catch((err) => {

                console.log("err", err)
            })
    }
    return (
        <>
            <div className="table-responsive-sm">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row" >{index + 1}</th>
                                    <td>{item.title.slice(0, 20) + (item.title.length > 20 ? "..." : "")}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td><i className="fa fa-info-circle" aria-hidden="true" onClick={() => handleClick(item)}></i></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            {model && <ProductModel setModel={setModel} userId={userId} singleProductData={singleProductData}/>}
        </>
    )
}

export default Users
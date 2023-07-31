import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import axios from "axios";

export default function ProductModel({ setModel, userId, singleProductData }) {
    console.log("singleProductData", singleProductData)
    const product = singleProductData;

    return (
        <>
            <div className="h-100 d-flex align-item-center justify-content-center position-fixed left-0 top-0 w-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="card text-black">
                        {/* <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i> */}
                        <i className="d-flex fa fa-lg fa-times justify-content-end pb-1 pt-3 px-3" onClick={() => setModel(false)}></i>

                        <div className="d-flex align-item-center justify-content-center">
                            <img src={product.image}
                                className="card-img-top" alt="Apple Computer" style={{ width: "150px" }} />
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="text-muted mb-4">{product.description}</p>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <span>Category</span><span>{product.category}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Price</span><span>${product.price}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Rating</span><span>{product.rating.count}</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                <span>Total</span><span>${product.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
ProductModel.propTypes = {
    setModel: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired,
    singleProductData: PropTypes.object.isRequired,
};
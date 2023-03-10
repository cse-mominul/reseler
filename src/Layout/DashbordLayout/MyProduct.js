import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../ContextApi/Authcontext';


const MyProduct = () => {
    const { user } = useContext(AuthContext)

    const { data: myProduct, isLoading } = useQuery({
        queryKey: ['myProduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://moresarver-cse-mominul.vercel.app/products`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('Access-token')}`
                }
            })
            const data = await res.json()
            return data;
        }

    })
    if (isLoading) {
        return <h1 className='text-3xl'>Loading...</h1>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>product Name</th>
                            <th>Price </th>
                            <th> Status </th>
                            <th> Advertise </th>
                            <th> Delete </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProduct?.length &&
                            myProduct.map((product) => (
                                <tr key={product._id}>
                                    <th></th>
                                    <th> {product.name} </th>
                                    <th> {product.price} </th>
                                    <th>
                                        {" "}
                                        <button className="btn btn-sm btn-accent">
                                            available
                                        </button>{" "}
                                    </th>
                                    <th>
                                        {" "}

                                    </th>
                                    <th>
                                        {" "}
                                        <button className="btn btn-sm btn-outline">
                                            Delete
                                        </button>{" "}
                                    </th>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default MyProduct;
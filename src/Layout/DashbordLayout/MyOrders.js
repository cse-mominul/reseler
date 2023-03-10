import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../ContextApi/Authcontext';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const { data: products } = useQuery({
        queryKey: ['bookingData', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://moresarver.vercel.app/collections`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('Access-token')}`
                }
            })
            const data = await res.json()
            return data;
        }
    });

    return (
        <div className='mt-5'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>serial</th>
                            <th>product name</th>
                            <th> brand_name </th>
                            <th> Product Price </th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.length &&
                            products.map((product, i) => (
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <th> {product.name} </th>
                                    <th> {product.brand} </th>
                                    <th> Tk :{product.price} </th>
                                    <th>
                                        <button className="btn btn-sm btn-outline">bay Now</button>
                                    </th>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
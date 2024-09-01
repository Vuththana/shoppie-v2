import AuthenticationLayout from '@/Layouts/AuthenticationLayout'
import { PageProps } from '@/types'
import OrderPage from '../Shop/OrderPage';
import { useState } from 'react';

interface PurchaseOrder {
    id: number;
    ordernum: number;
    placedon: string;
    itemorder: string;
    quantity: number;
    price: number;
    status: string;
}

const purchaseOrders: PurchaseOrder[] = [
    { id: 1, ordernum: 1, placedon: "12/08/24, 14:30", itemorder: "Five Nights at Freddy's: Into the Pit", quantity: 1, price: 19.99, status: 'Delivering' },
    { id: 2, ordernum: 2, placedon: "17/07/24, 07:00", itemorder: "Black Myth: Wukong", quantity: 1, price: 59.99, status: 'Awaiting Confirmation' },
    { id: 3, ordernum: 3, placedon: "28/02/24, 18:45", itemorder: "Diablo® IV", quantity: 1, price: 49.99, status: 'Delivering' },
    { id: 4, ordernum: 4, placedon: "05/11/24, 09:15", itemorder: "ELDEN RING", quantity: 1, price: 59.99, status: 'Delivering' },
    { id: 5, ordernum: 5, placedon: "03/01/24, 22:10", itemorder: "Stardew Valley", quantity: 1, price: 19.99, status: 'Awaiting Confirmation' },
];

export default function PurchaseOrder({ auth }: PageProps) {
    function setActiveTab(arg0: string): void {
        throw new Error('Function not implemented.');
    }

    const [selectedTab, setSelectedTab] = useState('All');

    const filteredOrders = purchaseOrders.filter(order =>
        selectedTab === 'All' ? true : order.status === selectedTab
    );

    return (
        <>
            <AuthenticationLayout
                user={auth.user}
                header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'></h2>}
            >
            </AuthenticationLayout>
            <div className='mt-24 text-center'>
                <h1 className='text-4xl font-bold mb-4'>Purchase Order</h1>
            </div>


            {/* Tab component */}
            <div className="text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700 mx-60 my-3">
                <ul className="flex flex-wrap -mb-px">
                    <li className="me-2">
                        <a
                            onClick={() => setSelectedTab('All')}
                            className={`inline-block px-6 py-2 border-b-2 ${selectedTab === 'All' ? 'border-gray-900 text-gray-900' : 'border-transparent hover:text-gray-900 hover:border-gray-900'}`}
                        >
                            All
                        </a>
                    </li>
                    <li className="me-2">
                        <button
                            onClick={() => setSelectedTab('Delivering')}
                            className={`inline-block px-6 py-2 border-b-2 ${selectedTab === 'Delivering' ? 'border-gray-900 text-gray-900' : 'border-transparent hover:text-gray-900 hover:border-gray-900'}`}
                        >
                            Delivering
                        </button>
                    </li>
                    <li className="me-2">
                        <button
                            onClick={() => setSelectedTab('Awaiting Confirmation')}
                            className={`inline-block px-6 py-2 border-b-2 ${selectedTab === 'Awaiting Confirmation' ? 'border-gray-900 text-gray-900' : 'border-transparent hover:text-gray-900 hover:border-gray-900'}`}
                        >
                            Awaiting Confirmation
                        </button>
                    </li>
                </ul>
            </div>


            {/* table component */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-60">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase  dark:bg-gray-800 dark:text-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Order Number
                                    <a href="#">
                                        <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </a>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Placed on
                                    <a href="#">
                                        <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </a>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Item Order
                                    <a href="#">
                                        <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </a>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Quantity
                                    <a href="#">
                                        <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </a>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Price
                                    <a href="#">
                                        <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </a>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Status
                                    <a href="#">
                                        <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </a>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody> {filteredOrders.map((order) => (
                        <tr key={order.id} className="bg-white border-b dark:border-gray-400 text-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-gray-600">{order.ordernum}</th>
                            <td className="px-6 py-4">{order.placedon}</td>
                            <td className="px-6 py-4">{order.itemorder}</td>
                            <td className="px-6 py-4">{order.quantity}</td>
                            <td className="px-6 py-4">$ {order.price}</td>
                            <td className="px-6 py-4">
                                <span className={`${order.status === 'Awaiting Confirmation'
                                    ? 'bg-blue-50 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:text-blue-400 border border-blue-400'
                                    : 'bg-green-50 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:text-green-400 border border-green-400'
                                    }`}>
                                    {order.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}


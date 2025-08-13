import React from "react";

const AllQuotesTable = ({ quotes }) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            PO/Job Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Door Style
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Type
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {quotes.map((quote) => (
                        <tr
                            key={quote.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {quote.readable_date}
                            </th>
                            <td className="px-6 py-4">{quote.po_number}</td>
                            <td className="px-6 py-4">{quote.style}</td>
                            <td className="px-6 py-4">{quote.style}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllQuotesTable;

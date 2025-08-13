import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head, Link } from "@inertiajs/react";
import AllQuotesTable from "./Partials/AllQuotesTable";

const All = ({ quotes }) => {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex ">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        My Quotes
                    </h2>
                    <Link href="/">New Quote</Link>
                </div>
            }
        >
            <Head title="Quotes" />
            <AllQuotesTable quotes={quotes}></AllQuotesTable>
        </AuthenticatedLayout>
    );
};

export default All;

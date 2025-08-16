import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import CreateQuoteForm from "./Partials/CreateQuoteForm";

const Create = ({user}) => {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between ">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        New Quote
                    </h2>
                </div>
            }
        >
            <Head title="New Quote" />
            <CreateQuoteForm user={user}></CreateQuoteForm>
        </AuthenticatedLayout>
    );
};

export default Create;

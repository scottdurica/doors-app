import React from "react";

const AddressCard = ({ title, content}) => {
    return (
        <div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">
                            
                            {title}
                        </dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {content}
                            
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};


export default AddressCard;

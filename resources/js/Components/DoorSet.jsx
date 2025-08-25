import React from "react";
import Checkbox from "@/Components/Checkbox";
import TextInput from "@/Components/TextInput";
import Input from "@/Components/Input";

const DoorSet = ({ row, handleQtyChange, index }) => {
    return (
        <tr key={index} className="divide-x divide-gray-200">
            <td className="py-4 pr-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 text-center">
                <Input
                    id="qty"
                    name="qty"
                    type="text"
                    value={row.qty}
                    onChange={handleQtyChange}
                ></Input>
            </td>
            <td className="p-4 text-sm whitespace-nowrap text-gray-500 text-center">
                12
            </td>
            <td className="p-4 text-sm whitespace-nowrap text-gray-500 text-center">
                12
            </td>

            <td className="text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 text-center">
                <Checkbox id="isglass" name="isglass"></Checkbox>
            </td>
            <td className="text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 text-center">
                <Checkbox id="isslab" name="isslab"></Checkbox>
            </td>
            <td className="text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 text-center">
                <Checkbox id="isrr" name="isrr"></Checkbox>
            </td>
            <td className="text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 text-center">
                <Checkbox id="isbored" name="isbored"></Checkbox>
            </td>
            <td>
                <TextInput></TextInput>
            </td>
        </tr>
    );
};

export default DoorSet;
{
    /* <td className="py-4 pr-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 text-center">
                                                    <Input
                                                        key={index}
                                                        id="qty"
                                                        name="qty"
                                                        type="text"
                                                        value={row}
                                                        onChange={(e) =>
                                                            handleQtyChange(e)
                                                        }
                                                    ></Input>
                                                </td>
                                                <td className="p-4 text-sm whitespace-nowrap text-gray-500 text-center">
                                                    {row.width}
                                                </td>
                                                <td className="p-4 text-sm whitespace-nowrap text-gray-500 text-center">
                                                    {row.height}
                                                </td>

                                                <td className="text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 text-center">
                                                    <Checkbox
                                                        id="isglass"
                                                        name="isglass"
                                                    ></Checkbox>
                                                </td>
                                                <td className="text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 text-center">
                                                    <Checkbox
                                                        id="isslab"
                                                        name="isslab"
                                                    ></Checkbox>
                                                </td>
                                                <td className="text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 text-center">
                                                    <Checkbox
                                                        id="isrr"
                                                        name="isrr"
                                                    ></Checkbox>
                                                </td>
                                                <td className="text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 text-center">
                                                    <Checkbox
                                                        id="isbored"
                                                        name="isbored"
                                                    ></Checkbox>
                                                </td>
                                                <td>
                                                    <TextInput></TextInput>
                                                </td> */
}

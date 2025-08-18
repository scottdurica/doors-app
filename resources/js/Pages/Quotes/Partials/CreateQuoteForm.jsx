import React from "react";
import { useState } from "react";
import LabelWithHintRight from "@/Components/LabelWithHintRight";
import AddressCard from "@/Components/AddressCard";

import {
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

const doorTypes = [
    { id: 1, name: "Shaker", doorCode: "S-001" },
    { id: 2, name: "Slim Shaker", doorCode: "S-002" },
    { id: 3, name: "Tacoma", doorCode: "S-003" },
    { id: 4, name: "RP-120", doorCode: "S-004" },
    { id: 5, name: "Ogee", doorCode: "S-010" },
    { id: 6, name: "Beaded", doorCode: "S-012" },
    { id: 7, name: "Beveled", doorCode: "S-014" },
    { id: 8, name: "Drop Bead", doorCode: "S-020" },
    { id: 9, name: "Denver", doorCode: "S-054" },
    { id: 10, name: "Racine", doorCode: "S-53" },
];
const constructionTypes = [
    { id: 1, name: "One Piece", description: "HDF" },
    { id: 2, name: "Five Piece", description: "C&S" },
];

const CreateQuoteForm = ({ user }) => {
    const quoteTypes = [
        { id: "quote", title: "Quote" },
        { id: "order", title: "Order" },
    ];

    const [pickupOptionVal, setPickupOptionVal] = useState("ship");
    const [isAddressGood, setIsAddressGood] = useState(true);
    const [selectedDoorType, setSelectedDoorType] = useState(doorTypes);
    const [selectedConstructionType, setSelectedConstructionType] =
        useState(constructionTypes);

    return (
        <form>
            <div className="space-y-4 mt-36 p-12">
                {/* General Information */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 dark:border-white/10">
                    <div>
                        <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                            General
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                            Enter your name and quote type.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        <div className="sm:col-span-4">
                            <fieldset>
                                <p className="mt-1 text-sm/6 text-gray-600">
                                    Is this a quote or an order?
                                </p>
                                <div className="mt-6  space-y-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                                    {quoteTypes.map((quoteType) => (
                                        <div
                                            key={quoteType.id}
                                            className="flex items-center"
                                        >
                                            <input
                                                defaultChecked={
                                                    quoteType.id === "quote"
                                                }
                                                id={quoteType.id}
                                                name="quotetype"
                                                type="radio"
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            />
                                            <label
                                                htmlFor={quoteType.id}
                                                className="ml-3 block text-sm/6 font-medium text-gray-900"
                                            >
                                                {quoteType.title}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>
                        <div className="sm:col-span-4">
                            <LabelWithHintRight
                                value="Job Name/PO"
                                hint="Required"
                                name="po_number"
                                id="po_number"
                                type="text"
                                placeholder=""
                                className="text-xs"
                            />
                            <LabelWithHintRight
                                value="Company Name"
                                hint="Optional"
                                name="company"
                                id="company"
                                type="text"
                                placeholder=""
                                className="text-xs"
                            />
                            <LabelWithHintRight
                                value="First Name"
                                hint="Required"
                                name="fname"
                                id="fname"
                                type="text"
                                placeholder=""
                            />
                            <LabelWithHintRight
                                value="Last Name"
                                hint="Required"
                                name="lname"
                                id="lname"
                                type="text"
                                placeholder=""
                            />
                        </div>
                    </div>
                </div>

                {/* Shipping Information */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 dark:border-white/10">
                    <div>
                        <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                            Shipping Details
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                            Choose how to receive your doors.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        <div className="sm:col-span-4">
                            <fieldset>
                                <p className="mt-1 text-sm/6 text-gray-600">
                                    Select a delivery option
                                </p>
                                <div className="mt-6 space-y-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                                    <div className="flex items-center">
                                        <input
                                            id="ship"
                                            name="shipoptions"
                                            type="radio"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            checked={pickupOptionVal === "ship"}
                                            onChange={(e) =>
                                                setPickupOptionVal("ship")
                                            }
                                        />
                                        <label
                                            htmlFor="ship"
                                            className="ml-3 block text-sm/6 font-medium text-gray-900"
                                        >
                                            Ship
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="deliver"
                                            name="shipoptions"
                                            type="radio"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            checked={
                                                pickupOptionVal === "deliver"
                                            }
                                            onChange={(e) =>
                                                setPickupOptionVal("deliver")
                                            }
                                        />
                                        <label
                                            htmlFor="deliver"
                                            className="ml-3 block text-sm/6 font-medium text-gray-900"
                                        >
                                            Deliver
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="pickup"
                                            name="shipoptions"
                                            type="radio"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            checked={
                                                pickupOptionVal === "pickup"
                                            }
                                            onChange={(e) =>
                                                setPickupOptionVal("pickup")
                                            }
                                        />
                                        <label
                                            htmlFor="pickup"
                                            className="ml-3 block text-sm/6 font-medium text-gray-900"
                                        >
                                            Local Pickup
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        {pickupOptionVal === "pickup" && (
                            <div className="sm:col-span-4">
                                <AddressCard
                                    title="Pickup from:"
                                    content="50 Grandview Road, Bow NH 03304"
                                ></AddressCard>
                            </div>
                        )}
                        {pickupOptionVal !== "pickup" &&
                            isAddressGood === true && (
                                <>
                                    <div className="sm:col-span-4">
                                        <AddressCard
                                            title={
                                                pickupOptionVal === "ship"
                                                    ? "Ship to:"
                                                    : "Deliver to:"
                                            }
                                            content={`${user.street}, ${user.city} ${user.state} ${user.zip}`}
                                        ></AddressCard>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <fieldset>
                                            <div className="mt-6 space-y-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                                                <div className="flex items-center">
                                                    <input
                                                        id="good"
                                                        name="addressoptions"
                                                        type="radio"
                                                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                                        checked={
                                                            isAddressGood ===
                                                            true
                                                        }
                                                        onChange={(e) =>
                                                            setIsAddressGood(
                                                                true
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        htmlFor="good"
                                                        className="ml-3 block text-sm/6 font-medium text-gray-900"
                                                    >
                                                        This address is correct
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="setnewaddress"
                                                        name="addressoptions"
                                                        type="radio"
                                                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                                        checked={
                                                            isAddressGood ===
                                                            false
                                                        }
                                                        onChange={(e) =>
                                                            setIsAddressGood(
                                                                false
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        htmlFor="setnewaddress"
                                                        className="ml-3 block text-sm/6 font-medium text-gray-900"
                                                    >
                                                        Ship them somewhere else
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </>
                            )}
                        {pickupOptionVal !== "pickup" &&
                            isAddressGood === false && (
                                <div className="sm:col-span-4">
                                    <LabelWithHintRight
                                        value="Ship To Name"
                                        hint="Required"
                                        name="shiptoname"
                                        id="shiptoname"
                                        type="text"
                                        placeholder=""
                                    />
                                    <LabelWithHintRight
                                        value="Last Name"
                                        hint="Required"
                                        name="lname"
                                        id="lname"
                                        type="text"
                                        placeholder=""
                                    />
                                    <LabelWithHintRight
                                        value="Ship To Address"
                                        hint="Required"
                                        name="street"
                                        id="street"
                                        type="text"
                                        placeholder=""
                                    />
                                    <LabelWithHintRight
                                        value="City"
                                        hint="Required"
                                        name="city"
                                        id="city"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            )}
                    </div>
                </div>

                {/* Personal Information section */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 dark:border-white/10">
                    <div>
                        <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                            Door Details
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                            Set general door deatials here.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="first-name"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="last-name"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                />
                            </div>
                        </div>
                        {/* Construction type selectbox */}
                        <div className="sm:col-span-4">
                            <Listbox
                                value={selectedConstructionType}
                                onChange={setSelectedConstructionType}
                            >
                                <Label className="block text-sm/6 font-medium text-gray-900">
                                    COnstruction Type
                                </Label>
                                <div className="relative mt-2">
                                    <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6">
                                        <span className="col-start-1 row-start-1 flex w-full gap-2 pr-6">
                                            <span className="truncate">
                                                {selectedConstructionType.name}
                                            </span>
                                            <span className="truncate text-gray-500">
                                                {
                                                    selectedConstructionType.description
                                                }
                                            </span>
                                        </span>
                                        <ChevronUpDownIcon
                                            aria-hidden="true"
                                            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </ListboxButton>

                                    <ListboxOptions
                                        transition
                                        className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                                    >
                                        {constructionTypes.map(
                                            (constructionType) => (
                                                <ListboxOption
                                                    key={
                                                        constructionType.description
                                                    }
                                                    value={constructionType}
                                                    className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                                                >
                                                    <div className="flex">
                                                        <span className="truncate font-normal group-data-selected:font-semibold">
                                                            {
                                                                constructionType.name
                                                            }
                                                        </span>
                                                        <span className="ml-2 truncate text-gray-500 group-data-focus:text-indigo-200">
                                                            {
                                                                constructionType.description
                                                            }
                                                        </span>
                                                    </div>

                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                                                        <CheckIcon
                                                            aria-hidden="true"
                                                            className="size-5"
                                                        />
                                                    </span>
                                                </ListboxOption>
                                            )
                                        )}
                                    </ListboxOptions>
                                </div>
                            </Listbox>
                        </div>
                        {/* Door style selectbox */}
                        <div className="sm:col-span-4">
                            <Listbox
                                value={selectedDoorType}
                                onChange={setSelectedDoorType}
                            >
                                <Label className="block text-sm/6 font-medium text-gray-900">
                                    Door style
                                </Label>
                                <div className="relative mt-2">
                                    <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6">
                                        <span className="col-start-1 row-start-1 flex w-full gap-2 pr-6">
                                            <span className="truncate">
                                                {selectedDoorType.name}
                                            </span>
                                            <span className="truncate text-gray-500">
                                                {selectedDoorType.doorCode}
                                            </span>
                                        </span>
                                        <ChevronUpDownIcon
                                            aria-hidden="true"
                                            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </ListboxButton>

                                    <ListboxOptions
                                        transition
                                        className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                                    >
                                        {doorTypes.map((doorType) => (
                                            <ListboxOption
                                                key={doorType.doorCode}
                                                value={doorType}
                                                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                                            >
                                                <div className="flex">
                                                    <span className="truncate font-normal group-data-selected:font-semibold">
                                                        {doorType.name}
                                                    </span>
                                                    <span className="ml-2 truncate text-gray-500 group-data-focus:text-indigo-200">
                                                        {doorType.doorCode}
                                                    </span>
                                                </div>

                                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                                                    <CheckIcon
                                                        aria-hidden="true"
                                                        className="size-5"
                                                    />
                                                </span>
                                            </ListboxOption>
                                        ))}
                                    </ListboxOptions>
                                </div>
                            </Listbox>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="country"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                Country
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus:outline-indigo-500"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                                {/* <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
                                /> */}
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="street-address"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                Street address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="street-address"
                                    name="street-address"
                                    type="text"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label
                                htmlFor="city"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="region"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                State / Province
                            </label>
                            <div className="mt-2">
                                <input
                                    id="region"
                                    name="region"
                                    type="text"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="postal-code"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                ZIP / Postal code
                            </label>
                            <div className="mt-2">
                                <input
                                    id="postal-code"
                                    name="postal-code"
                                    type="text"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 dark:border-white/10">
                    <div>
                        <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                            Notifications
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                            We'll always let you know about important changes,
                            but you pick what else you want to hear about.
                        </p>
                    </div>

                    <div className="max-w-2xl space-y-10 md:col-span-2">
                        <fieldset>
                            <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                                By email
                            </legend>
                            <div className="mt-6 space-y-6">
                                <div className="flex gap-3">
                                    <div className="flex h-6 shrink-0 items-center">
                                        <div className="group grid size-4 grid-cols-1">
                                            <input
                                                defaultChecked
                                                id="comments"
                                                name="comments"
                                                type="checkbox"
                                                aria-describedby="comments-description"
                                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:indeterminate:border-indigo-500 dark:indeterminate:bg-indigo-500 dark:focus-visible:outline-indigo-500 dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:checked:bg-white/10 forced-colors:appearance-auto"
                                            />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25 dark:group-has-disabled:stroke-white/25"
                                            >
                                                <path
                                                    d="M3 8L6 11L11 3.5"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-checked:opacity-100"
                                                />
                                                <path
                                                    d="M3 7H11"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-sm/6">
                                        <label
                                            htmlFor="comments"
                                            className="font-medium text-gray-900 dark:text-white"
                                        >
                                            Comments
                                        </label>
                                        <p
                                            id="comments-description"
                                            className="text-gray-500 dark:text-gray-400"
                                        >
                                            Get notified when someones posts a
                                            comment on a posting.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex h-6 shrink-0 items-center">
                                        <div className="group grid size-4 grid-cols-1">
                                            <input
                                                id="candidates"
                                                name="candidates"
                                                type="checkbox"
                                                aria-describedby="candidates-description"
                                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:indeterminate:border-indigo-500 dark:indeterminate:bg-indigo-500 dark:focus-visible:outline-indigo-500 dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:checked:bg-white/10 forced-colors:appearance-auto"
                                            />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25 dark:group-has-disabled:stroke-white/25"
                                            >
                                                <path
                                                    d="M3 8L6 11L11 3.5"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-checked:opacity-100"
                                                />
                                                <path
                                                    d="M3 7H11"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-sm/6">
                                        <label
                                            htmlFor="candidates"
                                            className="font-medium text-gray-900 dark:text-white"
                                        >
                                            Candidates
                                        </label>
                                        <p
                                            id="candidates-description"
                                            className="text-gray-500 dark:text-gray-400"
                                        >
                                            Get notified when a candidate
                                            applies for a job.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex h-6 shrink-0 items-center">
                                        <div className="group grid size-4 grid-cols-1">
                                            <input
                                                id="offers"
                                                name="offers"
                                                type="checkbox"
                                                aria-describedby="offers-description"
                                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:indeterminate:border-indigo-500 dark:indeterminate:bg-indigo-500 dark:focus-visible:outline-indigo-500 dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:checked:bg-white/10 forced-colors:appearance-auto"
                                            />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25 dark:group-has-disabled:stroke-white/25"
                                            >
                                                <path
                                                    d="M3 8L6 11L11 3.5"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-checked:opacity-100"
                                                />
                                                <path
                                                    d="M3 7H11"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-sm/6">
                                        <label
                                            htmlFor="offers"
                                            className="font-medium text-gray-900 dark:text-white"
                                        >
                                            Offers
                                        </label>
                                        <p
                                            id="offers-description"
                                            className="text-gray-500 dark:text-gray-400"
                                        >
                                            Get notified when a candidate
                                            accepts or rejects an offer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                                Push notifications
                            </legend>
                            <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                                These are delivered via SMS to your mobile
                                phone.
                            </p>
                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input
                                        defaultChecked
                                        id="push-everything"
                                        name="push-notifications"
                                        type="radio"
                                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-white/10 dark:bg-white/5 dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:focus-visible:outline-indigo-500 dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
                                    />
                                    <label
                                        htmlFor="push-everything"
                                        className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                                    >
                                        Everything
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="push-email"
                                        name="push-notifications"
                                        type="radio"
                                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-white/10 dark:bg-white/5 dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:focus-visible:outline-indigo-500 dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
                                    />
                                    <label
                                        htmlFor="push-email"
                                        className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                                    >
                                        Same as email
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="push-nothing"
                                        name="push-notifications"
                                        type="radio"
                                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-white/10 dark:bg-white/5 dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:focus-visible:outline-indigo-500 dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
                                    />
                                    <label
                                        htmlFor="push-nothing"
                                        className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                                    >
                                        No push notifications
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    className="text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:focus-visible:outline-indigo-500"
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default CreateQuoteForm;

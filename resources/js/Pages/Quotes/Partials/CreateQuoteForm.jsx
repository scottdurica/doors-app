import React from "react";
import { useState } from "react";
import LabelWithHintRight from "@/Components/LabelWithHintRight";
import AddressCard from "@/Components/AddressCard";

const onePieceDoorTypes = [
    {
        name: "Shaker",
        official: "S-001",
        imgPath: "/images/Shaker.png",
    },
    {
        name: "Beveled Shaker",
        official: "S-002",
        imgPath: "/images/Bevel-shaker.png",
    },
    {
        name: "Double Shaker",
        official: "S-003",
        imgPath: "/images/Dbl-shaker.png",
    },
    {
        name: "Slim Shaker",
        official: "S-004",
        imgPath: "/images/Slim-shaker.png",
    },
    {
        name: "Skinny 150V",
        official: "S-005",
        imgPath: "/images/Skinny-150v.png",
    },
    {
        name: "Skinny Bead 125",
        official: "S-006",
        imgPath: "/images/Skinny-Bead-125.png",
    },
    {
        name: "Inside Bead 125",
        official: "S-008",
        imgPath: "/images/Inside-Bead.png",
    },
    {
        name: "Step Bead 250",
        official: "S-009",
        imgPath: "/images/Step-bead.png",
    },
    {
        name: "Step Bead RP",
        official: "S-010",
        imgPath: "/images/Step-bead-rp.png",
    },
    {
        name: "Lima",
        official: "S-032",
        imgPath: "/images/Lima.png",
    },
    {
        name: "Tacoma",
        official: "S-033",
        imgPath: "/images/Tacoma.png",
    },
    {
        name: "Denver",
        official: "S-034",
        imgPath: "/images/Denver.png",
    },
    {
        name: "Auburn",
        official: "S-035",
        imgPath: "/images/Auburn.png",
    },
    {
        name: "Racine",
        official: "S-061",
        imgPath: "/images/Racine.png",
    },
    {
        name: "Madison",
        official: "S-063",
        imgPath: "/images/Madison.png",
    },
    {
        name: "Franklin",
        official: "S-081",
        imgPath: "/images/Franklin.png",
    },
];
const fivePieceDoorTypes = [
    {
        name: "Shaker-5PC",
        official: "S-001",
        imgPath: "/images/Shaker.png",
    },
    {
        name: "Beveled Shaker-5PC",
        official: "S-002",
        imgPath: "/images/Bevel-shaker.png",
    },
    {
        name: "Double Shaker-5PC",
        official: "S-003",
        imgPath: "/images/Dbl-shaker.png",
    },
];

const woodTypesForOnePiece = [{ name: "MDF" }];
const woodTypesForFivePiece = [
    { name: "MDF" },
    { name: "Maple" },
    { name: "White Oak" },
    { name: "Red Oak" },
    { name: "Hickory" },
    { name: "Cherry" },
];

const CreateQuoteForm = ({ user }) => {
    const quoteTypes = [
        { id: "quote", title: "Quote" },
        { id: "order", title: "Order" },
    ];

    const [pickupOptionVal, setPickupOptionVal] = useState("ship");
    const [isAddressGood, setIsAddressGood] = useState(true);
    const [selectedDoorType, setSelectedDoorType] = useState(
        onePieceDoorTypes[0].name
    );
    const [selectedConstructionType, setSelectedConstructionType] =
        useState("One Piece");
    const [doorStyleImgPath, setDoorStyleImgPath] = useState(
        onePieceDoorTypes[0].imgPath
    );
    const [doorList, setDoorList] = useState(onePieceDoorTypes);
    const [woodType, setWoodType] = useState("MDF");
    const [woodTypeList, setWoodTypeList] = useState(woodTypesForOnePiece);
    const handleDoorStyleChange = (e) => {
        const style = e.target.value;
        switch (style) {
            case onePieceDoorTypes[0].name:
                setDoorStyleImgPath(onePieceDoorTypes[0].imgPath);
                break;
            case onePieceDoorTypes[1].name:
                setDoorStyleImgPath(onePieceDoorTypes[1].imgPath);
                break;
            case onePieceDoorTypes[2].name:
                setDoorStyleImgPath(onePieceDoorTypes[2].imgPath);
                break;
            case onePieceDoorTypes[3].name:
                setDoorStyleImgPath(onePieceDoorTypes[3].imgPath);
                break;
            case onePieceDoorTypes[4].name:
                setDoorStyleImgPath(onePieceDoorTypes[4].imgPath);
                break;
            case onePieceDoorTypes[5].name:
                setDoorStyleImgPath(onePieceDoorTypes[5].imgPath);
                break;
            case onePieceDoorTypes[6].name:
                setDoorStyleImgPath(onePieceDoorTypes[6].imgPath);
                break;
            case onePieceDoorTypes[7].name:
                setDoorStyleImgPath(onePieceDoorTypes[7].imgPath);
                break;
            case onePieceDoorTypes[8].name:
                setDoorStyleImgPath(onePieceDoorTypes[8].imgPath);
                break;
            case onePieceDoorTypes[9].name:
                setDoorStyleImgPath(onePieceDoorTypes[9].imgPath);
                break;
            case onePieceDoorTypes[10].name:
                setDoorStyleImgPath(onePieceDoorTypes[10].imgPath);
                break;
            case onePieceDoorTypes[11].name:
                setDoorStyleImgPath(onePieceDoorTypes[11].imgPath);
                break;
            case onePieceDoorTypes[12].name:
                setDoorStyleImgPath(onePieceDoorTypes[12].imgPath);
                break;
            case onePieceDoorTypes[13].name:
                setDoorStyleImgPath(onePieceDoorTypes[13].imgPath);
                break;
            case onePieceDoorTypes[14].name:
                setDoorStyleImgPath(onePieceDoorTypes[14].imgPath);
                break;
            case onePieceDoorTypes[15].name:
                setDoorStyleImgPath(onePieceDoorTypes[15].imgPath);
                break;
            case fivePieceDoorTypes[0].name:
                setDoorStyleImgPath(fivePieceDoorTypes[0].imgPath);
                break;
            case fivePieceDoorTypes[1].name:
                setDoorStyleImgPath(fivePieceDoorTypes[1].imgPath);
                break;
            case fivePieceDoorTypes[2].name:
                setDoorStyleImgPath(fivePieceDoorTypes[2].imgPath);
                break;
            default:
                console.log(console.error);
        }
    };
    const handleConstructionTypeChange = (e) => {
        setSelectedConstructionType(e.target.value);
        if (e.target.value === "One Piece") {
            setDoorList(onePieceDoorTypes);
            setDoorStyleImgPath(onePieceDoorTypes[0].imgPath);
            setWoodTypeList(woodTypesForOnePiece);
        } else {
            setDoorList(fivePieceDoorTypes);
            setDoorStyleImgPath(fivePieceDoorTypes[0].imgPath);
            setWoodTypeList(woodTypesForFivePiece);
        }
    };
    const handleWoodTypeChange = (e) => {
        setWoodType(e.target.value);
    };

    return (
        <form>
            <div className="space-y-4 mt-8 p-12">
                {/* General Information */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 dark:border-white/10">
                    <div>
                        <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                            General
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                            Enter a PO/Job and quote type.
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
                            Set general door details here.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        {/* Construction type selectbox */}
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="location"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Construction Type
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="location"
                                    name="location"
                                    defaultValue="Canada"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
                                    onChange={(e) =>
                                        handleConstructionTypeChange(e)
                                    }
                                >
                                    <option>One Piece</option>
                                    <option>Five Piece</option>
                                </select>
                            </div>
                        </div>
                        {/* Door style selectbox */}
                        <div className="sm:col-span-4">
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="location"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Construction Type
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        id="location"
                                        name="location"
                                        defaultValue={selectedDoorType}
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
                                        onChange={(e) =>
                                            handleDoorStyleChange(e)
                                        }
                                    >
                                        {doorList.map((type) => (
                                            <option key={type.name}>
                                                {type.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-3 h-auto max-w-full">
                            <img src={doorStyleImgPath} alt="Image Here" />
                        </div>
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="location"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Wood Type
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="location"
                                    name="location"
                                    defaultValue={woodType}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
                                    onChange={(e) => handleWoodTypeChange(e)}
                                >
                                    {woodTypeList.map((type) => (
                                        <option key={type.name}>
                                            {type.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full"></div>

                        <div className="sm:col-span-2 sm:col-start-1"></div>

                        <div className="sm:col-span-2"></div>

                        <div className="sm:col-span-2"></div>
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

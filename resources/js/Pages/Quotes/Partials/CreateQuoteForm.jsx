import React, { useEffect } from "react";
import { useState } from "react";
import LabelWithHintRight from "@/Components/LabelWithHintRight";
import AddressCard from "@/Components/AddressCard";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/Input";
import TextInput from "@/Components/TextInput";
import DoorSet from "@/Components/DoorSet";

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
const fractions = [
    '1"',
    '1-1/4"',
    '1-1/2"',
    '1-3/4"',
    '2"',
    '2-1/4"',
    '2-1/2"',
];
const centerPanelStyles = [
    "RP-Beveled(MDF)",
    "RP-Ogee(MDF)",
    "RP-Cove(MDF)",
    "Flat(MDF)",
    "RP-Ogee(Solid Wood)",
    "RP-Beveled(Solid Wood)",
    "RP-Cove(Solid Wood)",
    "RP-Step Bead(Solid Wood)",
    "Flat(Solid Wood)",
];
const hingeBoreOptions = ["No Bore", "35mm cup", "35mm cup with dowels"];
const woodTypesForOnePiece = [{ name: "MDF" }];
const woodTypesForFivePiece = [
    { name: "MDF" },
    { name: "Maple" },
    { name: "White Oak" },
    { name: "Red Oak" },
    { name: "Hickory" },
    { name: "Cherry" },
];
const outsideEdgeStyles = [
    "Hand Broken(standard)",
    '1/16" Roundover',
    '1/8" Roundover',
    "Other(Note style below)",
];
const hingeTypes = [
    'Face Frame - full-overlay (1-1/4")',
    'Face Frame - partial overlay (1/2")',
    'Face Frame - inset (1/16" gap)',
    'Frameless - full-overlay (5/8")',
    'Frameless - partial overlay (1/4")',
    'Frameless - inset (1/16" gap)',
];
const doorListDoorTypes = [
    "Door",
    "Drawer Front",
    "Panel",
    "Glass",
    "Glass w/lites",
];
const tenBlankRows = [
    {
        id: "1",
        qty: "",
        width: "",
        height: "",
        glass: "",
        slab: "",
        rr: "",
        bore: "",
        notes: "",
    },
    {
        id: "2",
        qty: "",
        width: "",
        height: "",
        glass: "",
        slab: "",
        rr: "",
        bore: "",
        notes: "",
    },
    {
        id: "3",
        qty: "",
        width: "",
        height: "",
        glass: "",
        slab: "",
        rr: "",
        bore: "",
        notes: "",
    },
    {
        id: "4",
        qty: "",
        width: "",
        height: "",
        glass: "",
        slab: "",
        rr: "",
        bore: "",
        notes: "",
    },
    {
        id: "5",
        qty: "",
        width: "",
        height: "",
        glass: "",
        slab: "",
        rr: "",
        bore: "",
        notes: "",
    },
    {
        id: "6",
        qty: "",
        width: "",
        height: "",
        glass: "",
        slab: "",
        rr: "",
        bore: "",
        notes: "",
    },
    {
        id: "7",
        qty: "",
        width: "",
        height: "",
        glass: "",
        slab: "",
        rr: "",
        bore: "",
        notes: "",
    },
    {
        id: "8",
        qty: "",
        width: "",
        height: "",
        glass: "",
        slab: "",
        rr: "",
        bore: "",
        notes: "",
    },
    {
        id: "9",
        qty: "",
        width: "",
        height: "",
        glass: "",
        slab: "",
        rr: "",
        bore: "",
        notes: "",
    },
    {
        id: "10",
        qty: "",
        width: "",
        height: "",
        glass: "",
        slab: "",
        rr: "",
        bore: "",
        notes: "",
    },
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
    const [railStileWidth, setRailStileWidth] = useState(fractions[6]);
    const [centerPanel, setCenterPanel] = useState();
    const [outsideEdge, setOutsideEdge] = useState();
    const [rrWidth, setRRWidth] = useState();
    const [hingeBoreOption, setHingeBoreOption] = useState("No Bore");
    const [supplyHingeOption, setSupplyHingeOption] = useState();
    const [hingeType, setHingeType] = useState();
    const [finishOption, setFinishOption] = useState();
    const [doorEntries, setDoorEntries] = useState(tenBlankRows);
    const [hasGlassDoors, setHasGlassDoors] = useState("No");
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

    const handleDoorSetChange = (e, index) => {
        console.log({ index });
        const { name, value } = e.target;
        console.log(name, value);
        const newDoorEntries = [...doorEntries];
        newDoorEntries[index][name] = value;
        console.log(newDoorEntries[index][name]);
        setDoorEntries(newDoorEntries);
        //console.log(newDoorEntries);
    };

    const addDoorRows = () => {
        setDoorEntries([
            ...doorEntries,
            {
                id: doorEntries.length + 1,
                qty: "",
                width: "",
                height: "",
                glass: "",
                slab: "",
                rr: "",
                bore: "",
                notes: "",
            },
        ]);
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

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-6 md:col-span-2">
                        <div className="sm:col-span-4">
                            <fieldset>
                                <p className="mt-1 text-sm/6 text-gray-600">
                                    Is this a quote or an order?
                                </p>
                                <div className="mt-2 mb-4 space-y-1 lg:flex lg:items-center lg:space-y-0 lg:space-x-10">
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
                            Shipping
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                            Choose how to receive your doors.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-6 md:col-span-2">
                        <div className="sm:col-span-4">
                            <fieldset>
                                <p className="mt-1 text-sm/6 text-gray-600">
                                    Select a delivery option
                                </p>
                                <div className="mt-2 mb-4 space-y-1 lg:flex lg:items-center lg:space-y-0 lg:space-x-10">
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
                                    <div className="sm:col-span-4 ">
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
                                        value="Ship To"
                                        hint="Required"
                                        name="shiptoname"
                                        id="shiptoname"
                                        type="text"
                                        placeholder=""
                                    />

                                    <LabelWithHintRight
                                        value="Address"
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

                {/* Door Details section */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 dark:border-white/10">
                    <div>
                        <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                            Door Details
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                            Set general door details.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 md:col-span-2">
                        {/* Construction type selectbox */}
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="location"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Construction Type
                            </label>
                            <div className="mt-0 grid grid-cols-1">
                                <select
                                    id="location"
                                    name="location"
                                    defaultValue="Canada"
                                    className="col-start-1 row-start-1 w-full  appearance-none rounded-sm bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
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
                                    Door Style
                                </label>
                                <div className="mt-0 grid grid-cols-1">
                                    <select
                                        id="location"
                                        name="location"
                                        defaultValue={selectedDoorType}
                                        className="col-start-1 row-start-1 w-full  appearance-none rounded-sm bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
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
                        {/* Door style image */}
                        <div className="sm:col-span-3 h-auto max-w-full">
                            <img src={doorStyleImgPath} alt="Image Here" />
                        </div>
                        {/* Wood type section */}
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="woodtype"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Wood Type
                            </label>
                            <div className="mt-0 grid grid-cols-1">
                                <select
                                    id="woodtype"
                                    name="woodtype"
                                    defaultValue={woodType}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-sm bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
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

                        <div className="sm:col-span-4">
                            <label
                                htmlFor="rswidth"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Rail and Stile Width
                            </label>
                            <div className="mt-0 grid grid-cols-1">
                                <select
                                    id="rswidth"
                                    name="rswidth"
                                    // defaultValue={fractions[6]}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-sm bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
                                    onChange={(e) =>
                                        setRailStileWidth(e.target.value)
                                    }
                                >
                                    {fractions.map((size) => (
                                        <option key={size}>{size}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="rrwidth"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Reduced Rail Width
                            </label>
                            <div className="mt-0 grid grid-cols-1">
                                <select
                                    id="rrwidth"
                                    name="rrwidth"
                                    // defaultValue={fractions[6]}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-sm bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
                                    onChange={(e) => setRRWidth(e.target.value)}
                                >
                                    {fractions.map((size, index) => (
                                        <option key={`${size}-${index}`}>
                                            {size}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {selectedConstructionType === "Five Piece" && (
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="centerpanel"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Center Panel Style
                                </label>
                                <div className="mt-0 grid grid-cols-1">
                                    <select
                                        id="centerpanel"
                                        name="centerpanel"
                                        // defaultValue={fractions[6]}
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-sm bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
                                        onChange={(e) =>
                                            setCenterPanel(e.target.value)
                                        }
                                    >
                                        {centerPanelStyles.map((style) => (
                                            <option key={style}>{style}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        )}
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="centerpanel"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Outside Edge Profile
                            </label>
                            <div className="mt-0 grid grid-cols-1">
                                <select
                                    id="OutsideEdge"
                                    name="OutsideEdge"
                                    // defaultValue={fractions[6]}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-sm bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
                                    onChange={(e) =>
                                        setOutsideEdge(e.target.value)
                                    }
                                >
                                    {outsideEdgeStyles.map((style) => (
                                        <option key={style}>{style}</option>
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
                {/* Door Finish section */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 dark:border-white/10">
                    <div>
                        <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                            Hinges and Finish
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                            Set door hinge location and select finish.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-6 md:col-span-2">
                        {/* Finish selection */}
                        <div className="sm:col-span-4">
                            <fieldset>
                                <p className="mt-1 text-sm/6 text-gray-600">
                                    What level of finish would you like?
                                </p>
                                <div className="mt-2 mb-4 space-y-1 lg:flex lg:items-center lg:space-y-0 lg:space-x-10">
                                    <div className="flex items-center">
                                        <input
                                            defaultChecked="true"
                                            id="primed"
                                            type="radio"
                                            name="finishtype"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                setFinishOption("Primed")
                                            }
                                        />
                                        <label
                                            htmlFor="primed"
                                            className="ml-3 block text-sm/6 font-medium text-gray-900"
                                        >
                                            Primed
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="raw"
                                            type="radio"
                                            name="finishtype"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                setFinishOption("Raw")
                                            }
                                        />
                                        <label
                                            htmlFor="raw"
                                            className="ml-3 block text-sm/6 font-medium text-gray-900"
                                        >
                                            Raw
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="fullfinish"
                                            type="radio"
                                            name="finishtype"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                setFinishOption(
                                                    "Fully Finished"
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="fullfinish"
                                            className="ml-3 block text-sm/6 font-medium text-gray-900"
                                        >
                                            Fully Finished
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        {/* Bore hinges? */}
                        <div className="sm:col-span-4">
                            <fieldset>
                                <p className="mt-1 text-sm/6 text-gray-600">
                                    Select hinge bore option
                                </p>
                                <div className="mt-2 mb-4 space-y-1 lg:flex lg:items-center lg:space-y-0 lg:space-x-10">
                                    <div className="flex items-center">
                                        <input
                                            id="nobore"
                                            type="radio"
                                            name="boringoptions"
                                            checked={
                                                hingeBoreOption === "No Bore"
                                            }
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                setHingeBoreOption("No Bore")
                                            }
                                        />
                                        <label
                                            htmlFor="nobore"
                                            className="ml-3 block text-sm/6 font-medium text-gray-900"
                                        >
                                            No Bore
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="35mm"
                                            type="radio"
                                            name="boringoptions"
                                            checked={hingeBoreOption === "35mm"}
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                setHingeBoreOption("35mm")
                                            }
                                        />
                                        <label
                                            htmlFor="35mm"
                                            className="ml-3 block text-sm/6 font-medium text-gray-900"
                                        >
                                            35mm cup
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="35mmdow"
                                            type="radio"
                                            name="boringoptions"
                                            checked={
                                                hingeBoreOption ===
                                                "35mm With dowels"
                                            }
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                setHingeBoreOption(
                                                    "35mm With dowels"
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="35mmdow"
                                            className="ml-3 block text-sm/6 font-medium text-gray-900"
                                        >
                                            35mm cup with dowels
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        {/* Any glass panels? */}
                        <div className="sm:col-span-4">
                            <fieldset>
                                <p className="mt-1 text-sm/6 text-gray-600">
                                    Are any of your doors glass doors?
                                </p>
                                <div className="mt-2 mb-4 space-y-1 lg:flex lg:items-center lg:space-y-0 lg:space-x-10">
                                    <div className="flex items-center">
                                        <input
                                            id="rb_noglass"
                                            type="radio"
                                            name="rg_glass"
                                            checked={hasGlassDoors === "No"}
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                setHasGlassDoors("No")
                                            }
                                        />
                                        <label
                                            htmlFor="rb_noglass"
                                            className="ml-3 block text-sm/6 font-medium text-gray-900"
                                        >
                                            No
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="rb_glass"
                                            type="radio"
                                            name="rg_glass"
                                            checked={hasGlassDoors === "Yes"}
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                setHasGlassDoors("Yes")
                                            }
                                        />
                                        <label
                                            htmlFor="rb_glass"
                                            className="ml-3 block text-sm/6 font-medium text-gray-900"
                                        >
                                            Yes
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        {/* Supply hinges? */}
                        <div className="sm:col-span-4">
                            <fieldset>
                                <p className="mt-1 text-sm/6 text-gray-600">
                                    Would you like us to supply hinges?
                                </p>
                                <div className="mt-2 mb-4 space-y-1 lg:flex lg:items-center lg:space-y-0 lg:space-x-10">
                                    <div className="flex items-center">
                                        <input
                                            defaultChecked="true"
                                            id="no"
                                            type="radio"
                                            name="hingesupply"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                setSupplyHingeOption("No")
                                            }
                                        />
                                        <label
                                            htmlFor="no"
                                            className="ml-3 block text-sm/6 font-medium text-gray-900"
                                        >
                                            No
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="yes"
                                            type="radio"
                                            name="hingesupply"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                setSupplyHingeOption("Yes")
                                            }
                                        />
                                        <label
                                            htmlFor="yes"
                                            className="ml-3 block text-sm/6 font-medium text-gray-900"
                                        >
                                            Yes
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        {/* Hinge type selectbox */}
                        {supplyHingeOption === "Yes" && (
                            <div className="sm:col-span-4">
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="hingetype"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Hinge Type
                                    </label>
                                    <div className="mt-0 grid grid-cols-1">
                                        <select
                                            id="hingetype"
                                            name="hingetype"
                                            defaultValue={hingeTypes[0]}
                                            className="col-start-1 row-start-1 w-full  appearance-none rounded-sm bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
                                            onChange={(e) =>
                                                setHingeType(e.target.value)
                                            }
                                        >
                                            {hingeTypes.map((type) => (
                                                <option key={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="col-span-full"></div>

                        <div className="sm:col-span-2 sm:col-start-1"></div>

                        <div className="sm:col-span-2"></div>

                        <div className="sm:col-span-2"></div>
                    </div>
                </div>
                {/* Start of door input table */}

                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-base font-semibold text-gray-900">
                                Door Fields
                            </h1>
                            <p className="mt-2 text-sm text-gray-700">
                                List all of your doors here.
                            </p>
                        </div>
                        {/* <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <button
                                type="button"
                                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add More Fields
                            </button>
                        </div> */}
                    </div>
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-gray-500 ">
                                    <thead>
                                        <tr className="divide-x divide-gray-300">
                                            <th
                                                scope="col"
                                                className="py-0 pr-3 pl-3 text-center text-sm font-semibold text-gray-900 sm:pl-3 w-8"
                                            >
                                                Line
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-sm font-semibold text-gray-900  w-8"
                                            >
                                                Qnty
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-10 py-3 text-center text-sm font-semibold text-gray-900 w-8"
                                            >
                                                Width
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-10 py-3 text-center text-sm font-semibold text-gray-900 w-8"
                                            >
                                                Height
                                            </th>
                                            {hasGlassDoors === "Yes" && (
                                                <th
                                                    scope="col"
                                                    className="py-0 pr-3 pl-3 text-center text-sm font-semibold text-gray-900 sm:pr-4 w-8"
                                                >
                                                    Glass
                                                </th>
                                            )}
                                            <th
                                                scope="col"
                                                className="py-0 pr-3 pl-3 text-center text-sm font-semibold text-gray-900 sm:pr-3 w-8"
                                            >
                                                Slab
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-0 pr-3 pl-3 text-center text-sm font-semibold text-gray-900 sm:pr-3 w-8"
                                            >
                                                RR
                                            </th>
                                            {hingeBoreOption !== "No Bore" && (
                                                <th
                                                    scope="col"
                                                    className="py-0 pr-3 pl-3 text-center text-sm font-semibold text-gray-900 sm:pr-3 w-8"
                                                >
                                                    Bore
                                                </th>
                                            )}
                                            <th
                                                scope="col"
                                                className="py-0 pr-3 pl-3 text-left text-sm font-semibold text-gray-900 sm:pr-0 "
                                            >
                                                Notes
                                            </th>
                                        </tr>
                                    </thead>
                                    {/*                                   {"quantity":4,"width":12,"height":14,"type":"door","slab":1,"rails":2.25,"stiles":2,"notes":"This is a note about the doors","bore":0}]
                                     */}
                                    <tbody className="divide-y divide-gray-300 bg-white">
                                        {doorEntries.map((row, index) => (
                                            <tr
                                                key={index}
                                                className="divide-x divide-gray-200"
                                            >
                                                <td className="p-4 text-sm whitespace-nowrap text-gray-500 text-center">
                                                    <label>{row.id}</label>
                                                </td>
                                                <td className="px-4 py-1 text-sm whitespace-nowrap text-gray-500 text-center">
                                                    <input
                                                        className="block w-full rounded-sm bg-white px-1 py-1 border-gray-300 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 "
                                                        id="qty"
                                                        name="qty"
                                                        value={row.qty}
                                                        onChange={(e) =>
                                                            handleDoorSetChange(
                                                                e,
                                                                index
                                                            )
                                                        }
                                                    ></input>
                                                </td>
                                                <td className="px-4 py-1 text-sm whitespace-nowrap text-gray-500 text-center">
                                                    <input
                                                        className="block w-full rounded-sm bg-white px-3 py-1 border-gray-300 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 "
                                                        id="width"
                                                        name="width"
                                                        type="text"
                                                        value={row.width}
                                                        onChange={(e) =>
                                                            handleDoorSetChange(
                                                                e,
                                                                index
                                                            )
                                                        }
                                                    ></input>
                                                </td>
                                                <td className="px-4 py-1 text-sm whitespace-nowrap text-gray-500 text-center">
                                                    <input
                                                        className="block w-full rounded-sm bg-white px-3 py-1 border-gray-300 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 "
                                                        id="height"
                                                        name="height"
                                                        type="text"
                                                        value={row.height}
                                                        onChange={(e) =>
                                                            handleDoorSetChange(
                                                                e,
                                                                index
                                                            )
                                                        }
                                                    ></input>
                                                </td>
                                                {hasGlassDoors === "Yes" && (
                                                    <td className="text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 text-center">
                                                        <Checkbox
                                                            id="glass"
                                                            name="glass"
                                                            onChange={(e) =>
                                                                handleDoorSetChange(
                                                                    e,
                                                                    index
                                                                )
                                                            }
                                                        ></Checkbox>
                                                    </td>
                                                )}
                                                <td className="text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 text-center">
                                                    <Checkbox
                                                        id="slab"
                                                        name="slab"
                                                        onChange={(e) =>
                                                            handleDoorSetChange(
                                                                e,
                                                                index
                                                            )
                                                        }
                                                    ></Checkbox>
                                                </td>
                                                <td className="text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 text-center">
                                                    <Checkbox
                                                        id="rr"
                                                        name="rr"
                                                        onChange={(e) =>
                                                            handleDoorSetChange(
                                                                e,
                                                                index
                                                            )
                                                        }
                                                    ></Checkbox>
                                                </td>
                                                {hingeBoreOption !==
                                                    "No Bore" && (
                                                    <td className="text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 text-center">
                                                        <Checkbox
                                                            id="bore"
                                                            name="bore"
                                                            onChange={(e) =>
                                                                handleDoorSetChange(
                                                                    e,
                                                                    index
                                                                )
                                                            }
                                                        ></Checkbox>
                                                    </td>
                                                )}
                                                <td className="px-4 py-1 text-sm whitespace-nowrap text-gray-500 text-center">
                                                    <input
                                                        className="block w-full rounded-sm bg-white px-3 py-1 border-gray-300 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 "
                                                        id="notes"
                                                        name="notes"
                                                        type="text"
                                                        maxLength="10"
                                                        value={row.notes}
                                                        onChange={(e) =>
                                                            handleDoorSetChange(
                                                                e,
                                                                index
                                                            )
                                                        }
                                                    ></input>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="justify-end sm:flex sm:items-center mt-4 ">
                        {/* <div className="sm:flex-auto">
                            <h1 className="text-base font-semibold text-gray-900">
                                Door Fields
                            </h1>
                            <p className="mt-2 text-sm text-gray-700">
                                List all of your doors here.
                            </p>
                        </div> */}
                        {doorEntries.length < 26 && (
                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none ">
                                <button
                                    type="button"
                                    className="rounded-sm bg-white px-2 py-1 text-md font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-200"
                                    onClick={addDoorRows}
                                >
                                    Add More Rows
                                </button>
                            </div>
                        )}
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

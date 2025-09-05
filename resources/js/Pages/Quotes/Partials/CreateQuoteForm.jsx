import React, { useState, useReducer } from "react";
import LabelWithHintRight from "@/Components/LabelWithHintRight";
import AddressCard from "@/Components/AddressCard";
import Checkbox from "@/Components/Checkbox";

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
    "Flat(MDF)",
    "RP-Beveled(MDF)",
    "RP-Ogee(MDF)",
    "RP-Cove(MDF)",
    "Flat(Solid Wood)",
    "RP-Ogee(Solid Wood)",
    "RP-Beveled(Solid Wood)",
    "RP-Cove(Solid Wood)",
    "RP-Step Bead(Solid Wood)",
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
        sf: "",
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
        sf: "",
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
        sf: "",
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
        sf: "",
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
        sf: "",
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
        sf: "",
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
        sf: "",
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
        sf: "",
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
        sf: "",
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
        sf: "",
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "setQuoteType":
            return { ...state, quoteType: action.value };
        case "setJobName":
            return { ...state, jobName: action.payload };
        case "shipOption":
            return { ...state, shipOption: action.value };
        case "constructionType":
            if (action.value === "One Piece") {
                return {
                    ...state,
                    constructionType: "One Piece",
                    doorList: onePieceDoorTypes,
                    doorImage: onePieceDoorTypes[0].imgPath,
                    doorType: onePieceDoorTypes[0].name,
                    woodList: woodTypesForOnePiece,
                    woodType: "MDF",
                };
            }
            return {
                ...state,
                constructionType: "Five Piece",
                doorList: fivePieceDoorTypes,
                doorImage: fivePieceDoorTypes[0].imgPath,
                doorType: fivePieceDoorTypes[0].name,
                woodList: woodTypesForFivePiece,
            };
        case "doorType":
            const style = action.value;
            let path = "";
            let name = "";
            switch (style) {
                case onePieceDoorTypes[0].name:
                    path = onePieceDoorTypes[0].imgPath;
                    name = onePieceDoorTypes[0].name;
                    break;
                case onePieceDoorTypes[1].name:
                    path = onePieceDoorTypes[1].imgPath;
                    name = onePieceDoorTypes[1].name;
                    break;
                case onePieceDoorTypes[2].name:
                    path = onePieceDoorTypes[2].imgPath;
                    name = onePieceDoorTypes[2].name;
                    break;
                case onePieceDoorTypes[3].name:
                    path = onePieceDoorTypes[3].imgPath;
                    name = onePieceDoorTypes[3].name;
                    break;
                case onePieceDoorTypes[4].name:
                    path = onePieceDoorTypes[4].imgPath;
                    name = onePieceDoorTypes[4].name;
                    break;
                case onePieceDoorTypes[5].name:
                    path = onePieceDoorTypes[5].imgPath;
                    name = onePieceDoorTypes[5].name;
                    break;
                case onePieceDoorTypes[6].name:
                    path = onePieceDoorTypes[6].imgPath;
                    name = onePieceDoorTypes[6].name;
                    break;
                case onePieceDoorTypes[7].name:
                    path = onePieceDoorTypes[7].imgPath;
                    name = onePieceDoorTypes[7].name;
                    break;
                case onePieceDoorTypes[8].name:
                    path = onePieceDoorTypes[8].imgPath;
                    name = onePieceDoorTypes[8].name;
                    break;
                case onePieceDoorTypes[9].name:
                    path = onePieceDoorTypes[9].imgPath;
                    name = onePieceDoorTypes[9].name;
                    break;
                case onePieceDoorTypes[10].name:
                    path = onePieceDoorTypes[10].imgPath;
                    name = onePieceDoorTypes[10].name;
                    break;
                case onePieceDoorTypes[11].name:
                    path = onePieceDoorTypes[11].imgPath;
                    name = onePieceDoorTypes[11].name;
                    break;
                case onePieceDoorTypes[12].name:
                    path = onePieceDoorTypes[12].imgPath;
                    name = onePieceDoorTypes[12].name;
                    break;
                case onePieceDoorTypes[13].name:
                    path = onePieceDoorTypes[13].imgPath;
                    name = onePieceDoorTypes[13].name;
                    break;
                case onePieceDoorTypes[14].name:
                    path = onePieceDoorTypes[14].imgPath;
                    name = onePieceDoorTypes[14].name;
                    break;
                case onePieceDoorTypes[15].name:
                    path = onePieceDoorTypes[15].imgPath;
                    name = onePieceDoorTypes[15].name;
                    break;
                case fivePieceDoorTypes[0].name:
                    path = fivePieceDoorTypes[0].imgPath;
                    name = fivePieceDoorTypes[0].name;
                    break;
                case fivePieceDoorTypes[1].name:
                    path = fivePieceDoorTypes[1].imgPath;
                    name = fivePieceDoorTypes[1].name;
                    break;
                case fivePieceDoorTypes[2].name:
                    path = fivePieceDoorTypes[2].imgPath;
                    name = fivePieceDoorTypes[2].name;
                    break;
                default:
                    console.log(console.error);
            }
            return { ...state, doorImage: path, doorType: name };
        case "woodType":
            return { ...state, woodType: action.value };
        case "rsWidth":
            return { ...state, rsWidth: action.value };
        case "centerPanel":
            return { ...state, centerPanel: action.value };
        case "rrWidth":
            return { ...state, rrWidth: action.value };
        case "outsideEdge":
            return { ...state, outsideEdge: action.value };
        case "boreOption":
            return { ...state, boreOption: action.value };
        case "boreDistance":
            return { ...state, boreDistance: action.value };
        case "supplyHinges":
            return { ...state, supplyHinges: action.value };
        case "hingeType":
            return { ...state, hingeType: action.value };
        case "finishOption":
            return { ...state, finishOption: action.value };
        case "doorEntries":
            return {...state, doorEntries: }
        default:
            throw new Error();
    }
};
const CreateQuoteForm = ({ user }) => {
    const quoteData = {
        quoteType: "Quote",
        shipOption: "ship",
        jobName: "",
        constructionType: "One Piece",
        doorType: onePieceDoorTypes[0].name,
        doorList: onePieceDoorTypes,
        woodType: "MDF",
        doorImage: onePieceDoorTypes[0].imgPath,
        woodList: woodTypesForOnePiece,
        rsWidth: fractions[5],
        centerPanel: "Flat(MDF)",
        rrWidth: fractions[1],
        outsideEdge: "",
        boreOption: "No Bore",
        boreDistance: "",
        supplyHinges: "",
        hingeType: "",
        finishOption: "",
        doorEntries: tenBlankRows,

    };

    const [state, dispatch] = useReducer(reducer, quoteData);

    //const [quoteType, setQuoteType] = useState("Quote");
    // const [pickupOptionVal, setPickupOptionVal] = useState("ship");
    // const [doorType, setSelectedDoorType] = useState(onePieceDoorTypes[0].name);
    // const [selectedConstructionType, setSelectedConstructionType] =
    //     useState("One Piece");
    // const [doorStyleImgPath, setDoorStyleImgPath] = useState(
    //     onePieceDoorTypes[0].imgPath
    // );
    //const [doorList, setDoorList] = useState(onePieceDoorTypes);
    // const [woodType, setWoodType] = useState("MDF");
    // const [woodTypeList, setWoodTypeList] = useState(woodTypesForOnePiece);
    // const [railStileWidth, setRailStileWidth] = useState(fractions[6]);
    // const [centerPanel, setCenterPanel] = useState("Flat(MDF)");
    // const [outsideEdge, setOutsideEdge] = useState();
    // const [rrWidth, setRRWidth] = useState("1");
    // const [hingeBoreOption, setHingeBoreOption] = useState("No Bore");
    // const [hingeBoreDistance, setHingeBoreDistance] = useState();
    // const [supplyHingeOption, setSupplyHingeOption] = useState();
    // const [hingeType, setHingeType] = useState();
    // const [finishOption, setFinishOption] = useState();
    const [doorEntries, setDoorEntries] = useState(tenBlankRows);
    const [hasGlassDoors, setHasGlassDoors] = useState("No");
    // const [poJobName, setPoJobName] = useState();
    const [shipToName, setShipToName] = useState(
        `${user.c_name.toUpperCase()} (${capitalize(user.fname)} ${capitalize(
            user.lname
        )})`
    );
    const [street, setStreet] = useState(user.street);
    const [city, setCity] = useState(user.city);
    const [us_state, setState] = useState(user.state);
    const [zip, setZip] = useState(user.zip);

    function capitalize(str) {
        return String(str).charAt(0).toUpperCase() + String(str).slice(1);
    }
    // const handleDoorStyleChange = (e) => {
    //     const style = e.target.value;
    //     switch (style) {
    //         case onePieceDoorTypes[0].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[0].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[0].name);
    //             break;
    //         case onePieceDoorTypes[1].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[1].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[1].name);
    //             break;
    //         case onePieceDoorTypes[2].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[2].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[2].name);
    //             break;
    //         case onePieceDoorTypes[3].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[3].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[3].name);
    //             break;
    //         case onePieceDoorTypes[4].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[4].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[4].name);
    //             break;
    //         case onePieceDoorTypes[5].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[5].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[5].name);
    //             break;
    //         case onePieceDoorTypes[6].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[6].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[6].name);
    //             break;
    //         case onePieceDoorTypes[7].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[7].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[7].name);
    //             break;
    //         case onePieceDoorTypes[8].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[8].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[8].name);
    //             break;
    //         case onePieceDoorTypes[9].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[9].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[9].name);
    //             break;
    //         case onePieceDoorTypes[10].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[10].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[10].name);
    //             break;
    //         case onePieceDoorTypes[11].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[11].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[11].name);
    //             break;
    //         case onePieceDoorTypes[12].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[12].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[12].name);
    //             break;
    //         case onePieceDoorTypes[13].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[13].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[13].name);
    //             break;
    //         case onePieceDoorTypes[14].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[14].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[14].name);
    //             break;
    //         case onePieceDoorTypes[15].name:
    //             setDoorStyleImgPath(onePieceDoorTypes[15].imgPath);
    //             setSelectedDoorType(onePieceDoorTypes[15].name);
    //             break;
    //         case fivePieceDoorTypes[0].name:
    //             setDoorStyleImgPath(fivePieceDoorTypes[0].imgPath);
    //             setSelectedDoorType(fivePieceDoorTypes[0].name);
    //             break;
    //         case fivePieceDoorTypes[1].name:
    //             setDoorStyleImgPath(fivePieceDoorTypes[1].imgPath);
    //             setSelectedDoorType(fivePieceDoorTypes[1].name);
    //             break;
    //         case fivePieceDoorTypes[2].name:
    //             setDoorStyleImgPath(fivePieceDoorTypes[2].imgPath);
    //             setSelectedDoorType(fivePieceDoorTypes[2].name);
    //             break;
    //         default:
    //             console.log(console.error);
    //     }
    // };
    // const handleConstructionTypeChange = (e) => {
    //     setSelectedConstructionType(e.target.value);
    //     if (e.target.value === "One Piece") {
    //         setDoorList(onePieceDoorTypes);
    //         setDoorStyleImgPath(onePieceDoorTypes[0].imgPath);
    //         setSelectedDoorType(onePieceDoorTypes[0].name);
    //         setWoodTypeList(woodTypesForOnePiece);
    //         setWoodType("MDF");
    //     } else {
    //         setDoorList(fivePieceDoorTypes);
    //         setDoorStyleImgPath(fivePieceDoorTypes[0].imgPath);
    //         setSelectedDoorType(fivePieceDoorTypes[0].name);
    //         setWoodTypeList(woodTypesForFivePiece);
    //     }
    // };
    // const handleWoodTypeChange = (e) => {
    //     setWoodType(e.target.value);
    // };

    const handleDoorSetChange = (e, index) => {
        const { name, value } = e.target;
        switch (name) {
            case "height":
                if (value.match(/^(\d*\.?\d{0,4})$/)) {
                    const newDoorEntries = [...doorEntries];
                    newDoorEntries[index][name] = value;
                    newDoorEntries[index]["sf"] = (
                        (newDoorEntries[index]["width"] *
                            value *
                            newDoorEntries[index]["qty"]) /
                        144
                    ).toFixed(3);
                    setDoorEntries(newDoorEntries);
                    console.log("Field Validated and updated");
                } else {
                    console.log("Incorrect input in width field.");
                }
                break;
            case "width":
                // if (value.match(/^(\d*\.?\d{0,4})$/)) {
                if (value.match(/^(\d*\.?\d{0,4})$/)) {
                    const newDoorEntries = [...doorEntries];
                    newDoorEntries[index][name] = value;
                    newDoorEntries[index]["sf"] = (
                        (newDoorEntries[index]["height"] *
                            value *
                            newDoorEntries[index]["qty"]) /
                        144
                    ).toFixed(3);
                    setDoorEntries(newDoorEntries);
                    console.log("Field Validated and updated");
                } else {
                    console.log("Incorrect input in width field.");
                }
                break;
            case "qty":
                if (value.match(/^(\d{1,2})$/)) {
                    const newDoorEntries = [...doorEntries];
                    newDoorEntries[index][name] = value;
                    newDoorEntries[index]["sf"] = (
                        (newDoorEntries[index]["height"] *
                            value *
                            newDoorEntries[index]["width"]) /
                        144
                    ).toFixed(3);
                    setDoorEntries(newDoorEntries);
                    console.log("Field Validated and updated");
                } else {
                    console.log("Incorrect input in width field.");
                }
                break;
            case "notes":
                const newDoorEntries = [...doorEntries];
                const clean_value = value.replace(/<[^>]*>/g, "");
                newDoorEntries[index][name] = clean_value;

                setDoorEntries(newDoorEntries);
                console.log(`Value of Note: ${clean_value}`);

                break;
        }
        // console.log(name, value);
        // const newDoorEntries = [...doorEntries];
        // newDoorEntries[index][name] = value;
        // console.log(newDoorEntries[index][name]);
        // setDoorEntries(newDoorEntries);
    };

    const addDoorRows = () => {
        console.log(user);
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
                sf: "",
            },
        ]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const quoteData = {
            user_id: user.id,
            quote_type: 1,
            delivery_option: state.shipOption,
            c_name: user.c_name,
            f_name: user.fname,
            l_name: user.lname,
            street: street,
            city: city,
            state: us_state,
            zip: zip,
            phone: user.phone,
            email: user.email,
            po_number: state.jobName,
            construction_type: state.constructionType,
            style: state.doorType,
            wood_type: state.woodType,
            rs_size: state.rsWidth,
            rr_size: state.rrWidth,
            outside_edge: state.outsideEdge,
            hinge_option: state.boreOption,
            hinge_distance: state.boreDistance,
            finish: state.finishOption,
            supply_hinges: 1,
            hinge_type: state.hingeType,
            notes: "this is the main temp notes.",
            status:
                state.quoteType === "1" ? "Good to make" : "Pending approval",
            doors: state.doorEntries,
        };
        try {
            const response = await axios.post("/quotes/save", quoteData);
            console.log("data saved-", response.data);
        } catch (error) {
            console.error("Error saving data: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
                                    <input
                                        id="Quote"
                                        name="quotetype"
                                        type="radio"
                                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                        checked={state.quoteType === "Quote"}
                                        //onChange={(e) => setQuoteType("Quote")}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "setQuoteType",
                                                value: e.target.id,
                                            })
                                        }
                                    />
                                    <label
                                        htmlFor="quote"
                                        className="ml-3 block text-sm/6 font-medium text-gray-900"
                                    >
                                        Quote
                                    </label>
                                    <input
                                        id="Order"
                                        name="quotetype"
                                        type="radio"
                                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                        checked={state.quoteType === "Order"}
                                        //onChange={(e) => setQuoteType("Order")}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "setQuoteType",
                                                value: e.target.id,
                                            })
                                        }
                                    />
                                    <label
                                        htmlFor="order"
                                        className="ml-3 block text-sm/6 font-medium text-gray-900"
                                    >
                                        Order
                                    </label>
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
                                inputVal={state.jobName}
                                onChange={(e) => {
                                    dispatch({ type: "setJobName" });
                                }}
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
                                            checked={
                                                state.shipOption === "ship"
                                            }
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "shipOption",
                                                    value: e.target.id,
                                                })
                                            }
                                            // onChange={(e) =>
                                            //     setPickupOptionVal("ship")
                                            // }
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
                                                state.shipOption === "deliver"
                                            }
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "shipOption",
                                                    value: e.target.id,
                                                })
                                            }
                                            // onChange={(e) =>
                                            //     setPickupOptionVal("deliver")
                                            // }
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
                                                state.shipOption === "pickup"
                                            }
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "shipOption",
                                                    value: e.target.id,
                                                })
                                            }
                                            // onChange={(e) =>
                                            //     setPickupOptionVal("pickup")
                                            // }
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
                        {state.shipOption === "pickup" && (
                            <div className="sm:col-span-4">
                                <AddressCard
                                    title="Pickup from:"
                                    content="50 Grandview Road, Bow NH 03304"
                                ></AddressCard>
                            </div>
                        )}

                        {state.shipOption !== "pickup" && (
                            <div className="sm:col-span-4">
                                <LabelWithHintRight
                                    value={
                                        state.shipOption === "ship"
                                            ? "Ship To"
                                            : "Deliver To"
                                    }
                                    hint="Required"
                                    name="shiptoname"
                                    id="shiptoname"
                                    type="text"
                                    placeholder=""
                                    inputVal={shipToName}
                                    onChange={(e) =>
                                        setShipToName(e.target.value)
                                    }
                                />

                                <LabelWithHintRight
                                    value="Street"
                                    hint="Required"
                                    name="street"
                                    id="street"
                                    type="text"
                                    placeholder=""
                                    inputVal={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                                <LabelWithHintRight
                                    value="City"
                                    hint="Required"
                                    name="city"
                                    id="city"
                                    type="text"
                                    placeholder=""
                                    inputVal={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                <LabelWithHintRight
                                    value="State"
                                    hint="Required"
                                    name="state"
                                    id="state"
                                    type="text"
                                    placeholder=""
                                    inputVal={us_state}
                                    onChange={(e) => setState(e.target.value)}
                                />
                                <LabelWithHintRight
                                    value="Zip"
                                    hint="Required"
                                    name="zip"
                                    id="zip"
                                    type="text"
                                    placeholder=""
                                    inputVal={zip}
                                    onChange={(e) => setZip(e.target.value)}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Door Construction section */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 dark:border-white/10">
                    <div>
                        <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                            Door Construction
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                            Set door style and materials.
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
                                    id="contype"
                                    name="contype"
                                    defaultValue=""
                                    className="col-start-1 row-start-1 w-full  appearance-none rounded-sm bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
                                    onChange={(e) =>
                                        dispatch({
                                            type: "constructionType",
                                            value: e.target.value,
                                        })
                                    }
                                    // onChange={(e) =>
                                    //     handleConstructionTypeChange(e)
                                    // }
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
                                        defaultValue={state.doorType}
                                        className="col-start-1 row-start-1 w-full  appearance-none rounded-sm bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
                                        onChange={(e) => {
                                            dispatch({
                                                type: "doorType",
                                                value: e.target.value,
                                            });
                                        }}
                                        // onChange={(e) =>
                                        //     handleDoorStyleChange(e)
                                        // }
                                    >
                                        {state.doorList.map((type) => (
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
                            <img src={state.doorImage} alt="Image Here" />
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
                                    defaultValue={state.woodType}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-sm bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
                                    onChange={(e) =>
                                        dispatch({
                                            type: "woodType",
                                            value: e.target.value,
                                        })
                                    }
                                    // onChange={(e) => handleWoodTypeChange(e)}
                                >
                                    {state.woodList.map((type) => (
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
                                        dispatch({
                                            type: "rsWidth",
                                            value: e.target.value,
                                        })
                                    }
                                    // onChange={(e) =>
                                    //     setRailStileWidth(e.target.value)
                                    // }
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
                                    onChange={(e) =>
                                        dispatch({
                                            type: "rrWidth",
                                            value: e.target.value,
                                        })
                                    }
                                    // onChange={(e) => setRRWidth(e.target.value)}
                                >
                                    {fractions.map((size, index) => (
                                        <option key={`${size}-${index}`}>
                                            {size}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {state.constructionType === "Five Piece" && (
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
                                            dispatch({
                                                type: "centerPanel",
                                                value: e.target.value,
                                            })
                                        }
                                        // onChange={(e) =>
                                        //     setCenterPanel(e.target.value)
                                        // }
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
                                htmlFor="OutsideEdge"
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
                                        dispatch({
                                            type: "outsideEdge",
                                            value: e.target.value,
                                        })
                                    }
                                    // onChange={(e) =>
                                    //     setOutsideEdge(e.target.value)
                                    // }
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
                                            id="Primed"
                                            type="radio"
                                            name="finishtype"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "finishOption",
                                                    value: e.target.id,
                                                })
                                            }
                                            // onChange={(e) =>
                                            //     setFinishOption("Primed")
                                            // }
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
                                            id="Raw"
                                            type="radio"
                                            name="finishtype"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "finishOption",
                                                    value: e.target.id,
                                                })
                                            }
                                            // onChange={(e) =>
                                            //     setFinishOption("Raw")
                                            // }
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
                                            id="Full Finish"
                                            type="radio"
                                            name="finishtype"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "finishOption",
                                                    value: e.target.id,
                                                })
                                            }
                                            // onChange={(e) =>
                                            //     setFinishOption(
                                            //         "Full Finish"
                                            //     )
                                            // }
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
                        {state.finishOption === "Fully Finished" && (
                            <div className="sm:col-span-4">
                                <div className="mt-0 grid grid-cols-1">
                                    <LabelWithHintRight
                                        value="Finish Color"
                                        hint="Required"
                                        name="finishcolor"
                                        id="finishcolor"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        )}
                        {/* Bore hinges? */}
                        <div className="sm:col-span-4">
                            <fieldset>
                                <p className="mt-1 text-sm/6 text-gray-600">
                                    Select hinge bore option
                                </p>
                                <div className="mt-2 mb-4 space-y-1 lg:flex lg:items-center lg:space-y-0 lg:space-x-10">
                                    <div className="flex items-center">
                                        <input
                                            id="No Bore"
                                            type="radio"
                                            name="boringoptions"
                                            checked={
                                                state.boreOption === "No Bore"
                                            }
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "boreOption",
                                                    value: e.target.id,
                                                })
                                            }
                                            // onChange={(e) =>
                                            //     setHingeBoreOption("No Bore")
                                            // }
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
                                            checked={
                                                state.boreOption === "35mm"
                                            }
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "boreOption",
                                                    value: e.target.id,
                                                })
                                            }
                                            // onChange={(e) =>
                                            //     setHingeBoreOption("35mm")
                                            // }
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
                                            id="35mm with dowels"
                                            type="radio"
                                            name="boringoptions"
                                            checked={
                                                state.boreOption ===
                                                "35mm with dowels"
                                            }
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "boreOption",
                                                    value: e.target.id,
                                                })
                                            }
                                            // onChange={(e) =>
                                            //     setHingeBoreOption(
                                            //         "35mm With dowels"
                                            //     )
                                            // }
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
                        {state.boreOption !== "No Bore" && (
                            <div className="sm:col-span-4">
                                <div className="mt-0 grid grid-cols-1">
                                    <LabelWithHintRight
                                        value="Bore Distance (from top/bottom of door to center of cup)"
                                        hint="Required"
                                        name="hingeboredistance"
                                        id="hingeboredistance"
                                        type=""
                                        placeholder=""
                                        inputVal={state.boreDistance}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "boreDistance",
                                                value: e.target.value,
                                            })
                                        }
                                        // onChange={(e) =>
                                        //     setHingeBoreDistance(e.target.value)
                                        // }
                                    />
                                </div>
                            </div>
                        )}
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
                                            id="No"
                                            type="radio"
                                            name="hingesupply"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "supplyHinges",
                                                    value: e.target.id,
                                                })
                                            }
                                            // onChange={(e) =>
                                            //     setSupplyHingeOption("No")
                                            // }
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
                                            id="Yes"
                                            type="radio"
                                            name="hingesupply"
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "supplyHinges",
                                                    value: e.target.id,
                                                })
                                            }
                                            // onChange={(e) =>
                                            //     setSupplyHingeOption("Yes")
                                            // }
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
                        {state.supplyHinges === "Yes" && (
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
                                                dispatch({
                                                    type: "hingeType",
                                                    value: e.target.value,
                                                })
                                            }
                                            // onChange={(e) =>
                                            //     setHingeType(e.target.value)
                                            // }
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
                                Doors
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
                    <div className="mt-8 flow-root ">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
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
                                            {state.boreOption !== "No Bore" && (
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
                                            <th
                                                scope="col"
                                                className="px-12 py-3 text-center text-sm font-semibold text-gray-900 w-8"
                                            >
                                                SF
                                            </th>
                                        </tr>
                                    </thead>
                                    {/*                                   {"quantity":4,"width":12,"height":14,"type":"door","slab":1,"rails":2.25,"stiles":2,"notes":"This is a note about the doors","bore":0}]
                                     */}
                                    <tbody className="divide-y divide-gray-300 bg-white">
                                        {state.doorEntries.map((row, index) => (
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
                                                {state.boreOption !==
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
                                                        maxLength="255"
                                                        value={row.notes}
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
                                                        className="block w-full  px-3 py-1 text-red-900 sm:text-sm/6 border-none "
                                                        id="sf"
                                                        disabled={true}
                                                        name="sf"
                                                        type="number"
                                                        step="0.01"
                                                        value={row.sf}
                                                    ></input>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="justify-end sm:flex sm:items-center mt-4 border-b border-gray-900/10 mb-10">
                        {state.doorEntries.length < 25 && (
                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none  ">
                                <button
                                    type="button"
                                    className="mb-10 mt-8 rounded-sm bg-black px-2 py-1 text-md font-semibold text-white-900 text-white shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-600 "
                                    onClick={addDoorRows}
                                >
                                    Add Another Row
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                {/* Summary */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 dark:border-white/10">
                    <div>
                        <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                            Summary
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                            Please verify all sizing before submitting
                            order/quote.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-6 md:col-span-2">
                        <div className="sm:col-span-4">
                            <AddressCard
                                title="Quote or Order?"
                                content={state.quoteType}
                            ></AddressCard>
                        </div>
                        <div className="sm:col-span-4">
                            <AddressCard
                                title="Door Style"
                                content={
                                    state.constructionType === "One Piece"
                                        ? `${state.constructionType} - ${state.woodType} ${state.doorType}`
                                        : `${state.constructionType} - ${state.woodType} ${state.doorType}   with  ${state.centerPanel} Center Panels`
                                }
                            ></AddressCard>
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
                        className="rounded-sm bg-black px-2 py-1 text-md font-semibold text-white-900 text-white shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-600 "
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CreateQuoteForm;

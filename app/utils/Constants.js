const sideBarList = [{
    url: "/home",
    title1: "Home",
    title2: "Masters",
    subSectionList: [{
        url: "/profile",
        title1: "Liscencee Profile",
        title2: "Liscencee Profile",
    }, {
        url: "/tankmaster",
        title1: "Tank Master",
        title2: "Tank Master",
    }, {
        url: "/brand",
        title1: "Brand Master",
        title2: "Brand Master",
    }, {
        url: "/flavour",
        title1: "Flavour Master",
        title2: "Flavour Master",
    }, {
        url: "/spirit",
        title1: "Spirit Master",
        title2: "Spirit Master",
    }, {
        url: "/changePassword",
        title1: "Change Password",
        title2: "Change Password",
    }]
}, {
    url: "/openingBalance",
    title1: "Opening Balance",
    title2: "Opening Balance",
    subSectionList: [{
        url: "/flavourDetails",
        title1: "Flavour Details",
        title2: "Flavour Details",
    }, {
        url: "/spiritDetails",
        title1: "Spirit Details",
        title2: "Spirit Details",
    }, {
        url: "/grapesDetails",
        title1: "Grapes Details",
        title2: "Grapes Details",
    }, {
        url: "/crushedJuiceDetails",
        title1: "Crushed Juice Details",
        title2: "Crushed Juice Details",
    }, {
        url: "/fermentedWineDetails",
        title1: "Fermented Details",
        title2: "Fermented Details",
    }, {
        url: "/bottledWineDetails",
        title1: "Bottled Details",
        title2: "Bottled Details",
    }, {
        url: "/tirageDisgorgedStock",
        title1: "Tirage/Disgorged Details",
        title2: "Tirage/Disgorged Details",
    }, {
        url: "/labelledStock",
        title1: "Labelled Details",
        title2: "Labelled Details",
    }, {
        url: "/finishedGoodsStock",
        title1: "Finished Goods Details",
        title2: "Finished Goods Details",
    }]
}, {
    url: "/register1",
    title1: "Register1",
    title2: "Grape Receipt Transactions",
}, {
    url: "/register2",
    title1: "Register2",
    title2: "Crushing/Juice Processing",
}, {
    url: "/register3",
    title1: "Register3",
    title2: "Fermentation",
}, {
    url: "/register4",
    title1: "Register4",
    title2: "Bulk Transfer",
}, {
    url: "/register5",
    title1: "Register5",
    title2: "Bottling",
}, {
    url: "/register6",
    title1: "Register6",
    title2: "Tirage/Disgorging",
}, {
    url: "/register7",
    title1: "Register7",
    title2: "Labelling",
}, {
    url: "/register8",
    title1: "Register8",
    title2: "Finished Goods/Dispatch",
}, {
    url: "/Admin",
    title1: "Admin",
    title2: "Admin",
}]


const grapeVariety = [{
    label: 'Variety 1',
    value: "Variety 1"
}, {
    label: 'Variety 2',
    value: "Variety 2"
}, {
    label: 'Variety 3',
    value: "Variety 3"
}]

const sizeInML = [{
    label: "Size 'S'",
    value: "Size 'S'"
}, {
    label: "Size 'M'",
    value: "Size 'M'"
}, {
    label: "Size 'L'",
    value: "Size 'L'"
}]

const bottleSize = [{
    label: "Bottle Size 'S'",
    value: "Bottle Size 'S'"
}, {
    label: "Bottle Size 'M'",
    value: "Bottle Size 'M'"
}, {
    label: "Bottle Size 'L'",
    value: "Bottle Size 'L'"
}]

const wineType = [{
    label: "Type 1",
    value: "Type 1"
}, {
    label: "Type 2",
    value: "Type 2"
}, {
    label: "Type 3",
    value: "Type 3"
}]

const licenseType = [{
    label: "L Type 1",
    value: "L Type 1"
}, {
    label: "L Type 2",
    value: "L Type 2"
}, {
    label: "L Type 3",
    value: "L Type 3"
}]

const purchaseType = [{
    id: 1,
    name: "Bulk Wine Purchased"
}, {
    id: 2,
    name: "Received from Re-processing"
}, {
    id: 3,
    name: "Transferred from other Tank",
}]

const saleType = [{
    id: 1,
    name: "Bulk Wine Sale"
}, {
    id: 2,
    name: "Transferred to other Unit"
}, {
    id: 3,
    name: "Transferred to other Tank",
}]

const searchType = [{
    id: 1,
    name: "Name"
}, {
    id: 2,
    name: "Type"
}]

const TransferType = [{
    id: 1,
    name: "Own State"
}, {
    id: 2,
    name: "Other State"
}, {
    id: 3,
    name: "Overseas Export"
}]

const OpeningBalanceType = [{
    id: 1,
    name: "Disgorged Bottles"
}, {
    id: 2,
    name: "Still Wine"
}, {
    id: 3,
    name: "Red Wine"
}, {
    id: 4,
    name: "White Wine"
}]

const LabellingTransType = [{
    id: 1,
    name: "Labelling Details"
}, {
    id: 2,
    name: "Transferred to Other Unit"
}]


export { sideBarList, grapeVariety, sizeInML, bottleSize, wineType, licenseType, purchaseType, saleType, searchType, TransferType, OpeningBalanceType, LabellingTransType };

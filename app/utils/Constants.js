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
        url: "/branddetails",
        title1: "Brand Details",
        title2: "Brand Details",
    }, {
        url: "/blendingDetails",
        title1: "Blending Details",
        title2: "Blending Details",
    }, {
        url: "/warehouseOpeningStock",
        title1: "Warehouse Opening Stock",
        title2: "Warehouse Opening Stock",
    }, {
        url: "/blendingAmendmentDetails",
        title1: "Blending Amendment Details",
        title2: "Blending Amendment Details",
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
    id: 1,
    name: "Variety 1"
}, {
    id: 2,
    name: "Variety 2"
}, {
    id: 3,
    name: "Variety 3",
}]

const sizeInML = [{
    id: 1,
    name: "Size 'S'"
}, {
    id: 2,
    name: "Size 'M'"
}, {
    id: 3,
    name: "Size 'L'",
}]

const bottleSize = [{
    id: 1,
    name: "Bottle Size 'S'"
}, {
    id: 2,
    name: "Bottle Size 'M'"
}, {
    id: 3,
    name: "Bottle Size 'L'",
}]

const wineType = [{
    id: 1,
    name: "Type 1"
}, {
    id: 2,
    name: "Type 2"
}, {
    id: 3,
    name: "Type 3",
}]

const licenseType = [{
    id: 1,
    name: "L Type 1"
}, {
    id: 2,
    name: "L Type 2"
}, {
    id: 3,
    name: "L Type 3",
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

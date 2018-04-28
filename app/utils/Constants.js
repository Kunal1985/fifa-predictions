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
        url: "/wineType",
        title1: "Type of Wine Master",
        title2: "Type of Wine Master",
    }, {
        url: "/variety",
        title1: "Variety of Grape/Fruit Master",
        title2: "Variety of Grape/Fruit Master",
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
        url: "/labelledBottleDetails",
        title1: "Labelled Details",
        title2: "Labelled Details",
    }, {
        url: "/finishedGoodsDetails",
        title1: "Finished Goods Details",
        title2: "Finished Goods Details",
    }]
}, {
    url: "/register1Summary",
    title1: "Register1",
    title2: "Grape/Fruit Receipt Transactions",
}, {
    url: "/register2Summary",
    title1: "Register2",
    title2: "Juice Processing",
}, {
    url: "/register3Summary",
    title1: "Register3",
    title2: "Fermentation",
}, {
    url: "/register4Summary",
    title1: "Register4",
    title2: "Fortification",
}, {
    url: "/register5Summary",
    title1: "Register5",
    title2: "Bulk Transfer",
}, {
    url: "/register6Summary",
    title1: "Register6",
    title2: "Bottling",
}, {
    url: "/register7Summary",
    title1: "Register7",
    title2: "Tirage/Disgorging",
}, {
    url: "/register8Summary",
    title1: "Register8",
    title2: "Labelling",
}, {
    url: "/register9Summary",
    title1: "Register9",
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
    name: "Own Unit"
}, {
    id: 2,
    name: "Other Unit"
}]

const bulkTransferOtherUnitType = [{
    id: 1,
    name: "Purchase from within State"
}, {
    id: 2,
    name: "Purchase from out of State"
}, {
    id: 3,
    name: "Overseas Purchase"
}, {
    id: 4,
    name: "Sale within State"
}, {
    id: 5,
    name: "Sale out of State"
}, {
    id: 6,
    name: "Overseas Sale"
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
    name: "Number"
}, {
    id: 2,
    name: "Type"
}]

const tankType = [{
    label: "SS Tank",
    value: 1
}, {
    label: "Oak Wine Barrel Tank",
    value: 2
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

const suppliers = [{
    label: "Supplier 1",
    value: "Supplier 1"
}, {
    label: "Supplier 2",
    value: "Supplier 2"
}]


export { 
    sideBarList, grapeVariety, sizeInML, bottleSize, 
    wineType, licenseType, purchaseType, saleType, 
    searchType, tankType, TransferType, 
    bulkTransferOtherUnitType, OpeningBalanceType, 
    LabellingTransType, suppliers };

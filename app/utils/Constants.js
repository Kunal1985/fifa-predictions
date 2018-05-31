const sideBarList = [{
    url: "/home",
    title1: "Home",
    title2: "Masters",
    allowedRoles: [1],
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
    }, {
        url: "/vintage",
        title1: "Vintage Master",
        title2: "Vintage Master",
    }]
}, {
    url: "/openingBalance",
    title1: "Opening Balance",
    title2: "Opening Balance",
    allowedRoles: [1,2],
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
    allowedRoles: [1,2]
}, {
    url: "/register2Summary",
    title1: "Register2",
    title2: "Juice Processing",
    allowedRoles: [1,2]
}, {
    url: "/register3Summary",
    title1: "Register3",
    title2: "Fermentation",
    allowedRoles: [1,2]
}, {
    url: "/register4Summary",
    title1: "Register4",
    title2: "Fortification",
    allowedRoles: [1,2]
}, {
    url: "/register5Summary",
    title1: "Register5",
    title2: "Bulk Transfer",
    allowedRoles: [1,2]
}, {
    url: "/register6Summary",
    title1: "Register6",
    title2: "Bottling",
    allowedRoles: [1,2]
}, {
    url: "/register7Summary",
    title1: "Register7",
    title2: "Tirage/Disgorging",
    allowedRoles: [1,2]
}, {
    url: "/register8Summary",
    title1: "Register8",
    title2: "Labelling",
    allowedRoles: [1,2]
}, {
    url: "/register9Summary",
    title1: "Register9",
    title2: "Finished Goods/Dispatch",
    allowedRoles: [1,2]
}, {
    url: "/admin",
    title1: "Admin",
    title2: "Admin",
    allowedRoles: [0]
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
    value: "1",
    label: "Own Unit"
}, {
    value: "2",
    label: "Other Unit"
}]

const bulkTransferOtherUnitType = [{
    value: "1",
    label: "Purchase from within State"
}, {
    value: "2",
    label: "Purchase from out of State"
}, {
    value: "3",
    label: "Overseas Purchase"
}, {
    value: "4",
    label: "Sale within State"
}, {
    value: "5",
    label: "Sale out of State"
}, {
    value: "6",
    label: "Overseas Sale"
}]

const saleType = [{
    value: "1",
    label: "Bulk Wine Sale"
}, {
    value: "2",
    label: "Transferred to other Unit"
}, {
    value: "3",
    label: "Transferred to other Tank",
}]

const tankType = [{
    label: "SS Tank",
    value: "1"
}, {
    label: "Oak Wine Barrel Tank",
    value: "2"
}]

const reg9TransferType = [{
    value: "1",
    label: "Own State"
}, {
    value: "2",
    label: "Other State"
}, {
    value: "3",
    label: "Overseas Export"
}]

const labellingWineType = [{
    value: "1",
    label: "Disgorged Bottles"
}, {
    value: "2",
    label: "Still Wine"
}, {
    value: "3",
    label: "Red Wine"
}, {
    value: "4",
    label: "White Wine"
}]

const labellingTransType = [{
    value: "1",
    label: "Labelling Details"
}, {
    value: "2",
    label: "Transferred to Other Unit"
}]

const suppliers = [{
    label: "Supplier 1",
    value: "Supplier 1"
}, {
    label: "Supplier 2",
    value: "Supplier 2"
}]

const tankNumbers = [{
    label: "Tank 1",
    value: "Tank 1"
}, {
    label: "Tank 2",
    value: "Tank 2"
}]

const brandList = [{
    label: "Brand 1",
    value: "Brand 1"
}, {
    label: "Brand 2",
    value: "Brand 2"
}]

const disgorgingTypeList = [{
    label: "Transfer to Own Unit",
    value: "ownUnitTransfer"
}, {
    label: "Tranfer to Other Unit",
    value: "otherUnitTransfer"
}]

export { 
    sideBarList, grapeVariety, sizeInML, bottleSize, 
    wineType, licenseType, purchaseType, saleType, 
    tankType, reg9TransferType, disgorgingTypeList,
    bulkTransferOtherUnitType, labellingWineType, 
    labellingTransType, suppliers, tankNumbers, brandList };

const BASE_URL = 'http://localhost:5000';

const sideBarList = [{
    url: "/myaccount",
    title1: "My Account",
    title2: "My Account",
    allowedRoles: [0]
}, {
    url: "/predictions",
    title1: "Predictions",
    title2: "Predictions Page",
    allowedRoles: [0]
}, {
    url: "/results",
    title1: "Results",
    title2: "Results Page",
    allowedRoles: [0]
}, {
    url: "/rules",
    title1: "Rules",
    title2: "Rules Page",
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
    label: "187 ML",
    value: "187"
}, {
    label: "375 ML",
    value: "375"
}, {
    label: "750 ML",
    value: "750"
}, {
    label: "1.5 L",
    value: "1500"
}, {
    label: "3 L",
    value: "3000"
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
    label: "Within State"
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

export { BASE_URL,
    sideBarList, grapeVariety, sizeInML, bottleSize, 
    wineType, licenseType, purchaseType, saleType, 
    tankType, reg9TransferType, disgorgingTypeList,
    bulkTransferOtherUnitType, labellingWineType, 
    labellingTransType, suppliers, tankNumbers, brandList };

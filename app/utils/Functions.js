import rp from 'request-promise';
import { BASE_URL, sideBarList } from './Constants';
import { browserHistory } from 'react-router';
import { storeToken, removeToken, getByKey } from './TokenUtils';
import {_} from 'underscore';

const handleTokenTampering = function(err){
  var errMessage = err.error.message
  if(errMessage.indexOf("tamper with the token") != -1){
    alert(errMessage)
    $("#logoutBtn")[0].click();
  }
}

exports.authenticateUser = function (values, currObj) {
  var actionType = currObj.state.submitType.toLowerCase();
  let options = {
    method: 'POST',
    uri: `${BASE_URL}/${actionType}`,
    body: values,
    json: true
  };
  return rp(options)
    .then(function (body) {
      console.log("SUCCESS during", actionType, body);
      storeToken(body);
      let redirectUrl = body.redirectUrl;
      browserHistory.push("/myaccount");
      return body;
    })
    .catch(function (err) {
      currObj.setState({ errorObj: err });
      return null;
    });
}

exports.logoutUser = function (currObj) {
  let currProps = currObj.props;
  let options = {
    method: 'POST',
    uri: `${BASE_URL}/logout`,
    json: true
  };
  return rp(options)
    .then(function (body) {
      console.log("Success Logout");
      removeToken();
      browserHistory.push("/");
      currObj.setState({
        currUser: null,
        currRecord: null
      });
      return body;
    })
    .catch(function (err) {
      console.log("Error Logout", err);
      return null;
    });
}

exports.changePassword = function (data, currObj, userName) {
  let options = {
    method: 'POST',
    uri: `${BASE_URL}/resetPassword`,
    body: {
      userName: userName,
      password: data.oldPassword,
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword
    },
    json: true
  };
  return rp(options)
    .then(function (body) {
      currObj.setState({ changePasswordStatus: body });
      return body;
    })
    .catch(function (err) {
      console.log("Error Logout", err);
      return null;
    });
}

exports.getUserDetailsRP = function (currObj) {
  return rp(`${BASE_URL}/userDetails`);
}

exports.getUserDetails = function (currObj) {
  return rp(`${BASE_URL}/userDetails`)
    .then(function (body) {
      currObj.setState({
        currUser: JSON.parse(body)
      });
      return body;
    })
    .catch(function (err) {
      return null;
    });
}

exports.getAllRecords = function (currObj, modelName) {
  console.log("getAllRecords for", modelName);
  var options = {
    method: 'GET',
    uri: `${BASE_URL}/get${modelName}`,
    headers: {
      'authorization': 'Bearer ' + getByKey("authToken")
    },
    json: true
  };
  return rp(options)
    .then(function (body) {
      console.log("getAllRecords Response for", modelName, body.length, body);
      if (!currObj.state || currObj.state.lastCount != body.length)
        currObj.setState({
          records: body,
          lastCount: body.length
        });
      return body;
    })
    .catch(function (err) {
      console.log("Error", err);
      handleTokenTampering(err);
      return null;
    });
}

exports.getRecordByUserName = function (currObj, modelName, userName) {
  if (userName) {
    var options = {
      method: 'POST',
      uri: `${BASE_URL}/getCurrent${modelName}Record`,
      body: {
        email: userName
      },
      headers: {
        'authorization': 'Bearer ' + getByKey("authToken")
      },
      json: true
    };
    return rp(options)
      .then(function (body) {
        console.log("getCurrUser Response for", modelName, body);
        if (body && (!currObj.state || !currObj.state.currRecord))
          currObj.setState({ currRecord: body });
        return body;
      })
      .catch(function (err) {
        console.log("Error", err);
        handleTokenTampering(err);
        return null;
      });
  }
}

exports.getRecordsByQuery = function (currObj, modelName, query) {
  console.log("getRecordsByQuery for", modelName);
  var enpointUrl;
  var httpMethod;
  if (["States", "Districts", "SubDistricts", "Villages"].indexOf(modelName) != -1) {
    enpointUrl = `${BASE_URL}/get${modelName}ByQuery`;
    httpMethod = "POST";
  } else {
    enpointUrl = `${BASE_URL}/get${modelName}`;
    httpMethod = "GET";
  }
  var options = {
    method: httpMethod,
    uri: enpointUrl,
    headers: {
      'authorization': 'Bearer ' + getByKey("authToken")
    },
    body: {
      query: query
    },
    json: true
  };
  return rp(options)
    .then(function (body) {
      console.log("getRecordsByQuery Response for", modelName, body.length, body);
      var stateChangeVar = currObj.state;
      if (!stateChangeVar)
        stateChangeVar = {};
      var fieldName;
      switch (modelName) {
        case "States": fieldName = "state"; break;
        case "Districts": fieldName = "district"; break;
        case "SubDistricts": fieldName = "subDistrict"; break;
        case "Villages": fieldName = "village"; break;
        case "TankMaster": fieldName = "tankmaster"; break;
        case "ExciseOfficer": fieldName = "ExciseOfficer"; break;
        case "FlavourMaster": fieldName = "flavourmaster"; break;
        case "SpiritMaster": fieldName = "spiritmaster"; break;
        case "GrapeVarietyMaster": fieldName = "grapevarietymaster"; break;
        case "WineTypeMaster": fieldName = "winetypemaster"; break;
        case "BrandMaster": fieldName = "brandmaster"; break;
        default: break;
      }
      stateChangeVar[modelName.toLowerCase()] = body.map(function (currRecord) {
        switch (modelName) {
          case "TankMaster": return {
            label: currRecord.number,
            value: currRecord.number,
            selected: true,
            balance: currRecord.closingBalance,
            openingBalance: currRecord.openingBalance
          }
            break;
          case "ExciseOfficer": return {
            label: currRecord.name,
            value: currRecord.name,
            selected: true
          }
            break;
          case "FlavourMaster": return {
            label: currRecord.name,
            value: currRecord.name,
            selected: true
          }
            break;
          case "SpiritMaster": return {
            label: currRecord.name,
            value: currRecord.name,
            selected: true
          }
            break;
          case "GrapeVarietyMaster": return {
            label: currRecord.name,
            value: currRecord.name,
            selected: true
          }
            break;
          case "WineTypeMaster": return {
            label: currRecord.name,
            value: currRecord.name,
            selected: true
          }
            break;
          case "BrandMaster": return {
            label: currRecord.name,
            value: currRecord.name,
            selected: true
          }
            break;
          default: return {
            label: currRecord[fieldName + "NameInEnglish"],
            value: currRecord[fieldName + "Code"] + "",
            selected: true
          }
            break;
        }
      });
      currObj.setState(stateChangeVar);
      return stateChangeVar;
    })
    .catch(function (err) {
      console.log("Error", err);
      handleTokenTampering(err);
      return null;
    });
}

exports.getCurrRecord = function (queryParams, currObj, modelName) {
  if (queryParams && queryParams.upsertAction === 'update' && queryParams.id) {
    var options = {
      method: 'POST',
      uri: `${BASE_URL}/get${modelName}Record`,
      body: {
        _id: queryParams.id
      },
      headers: {
        'authorization': 'Bearer ' + getByKey("authToken")
      },
      json: true
    };
    return rp(options)
      .then(function (body) {
        console.log("getCurrRecord Response for", modelName, body);
        if (!currObj.state || !currObj.state.currRecord)
          currObj.setState({ currRecord: body });
        return body;
      })
      .catch(function (err) {
        console.log("Error", err);
        handleTokenTampering(err);
        return null;
      });
  }
}

exports.upsertRecord = function (data, thisVar, modelName) {
  let options = {
    method: 'POST',
    uri: `${BASE_URL}/upsert${modelName}`,
    headers: {
      'authorization': 'Bearer ' + getByKey("authToken")
    },
    body: data,
    json: true
  };
  return rp(options)
    .then(function (body) {
      console.log("Response", body);
      thisVar.goBack();
      return body;
    })
    .catch(function (err) {
      console.log("Error", err);
      handleTokenTampering(err);
      return null;
    });
}

exports.getSideBarList = function(currUser){
  return sideBarList.filter(u => currUser ? (u.allowedRoles.indexOf(currUser.role) != -1) : false);
}

var checkTransferredWQuantity = function(values, tankList) {
  for(let i = 0; i < values.tankList.length; i++) {
    if(!values.tankList[i].transferredQty) {
      return 'Please enter the quantity.'
    } else if(values.tankList[i].transferredQty && values.tankList[i].tankNumber && tankList && tankList.length > 0) {
        var tankBalance = _.where(tankList, {value: values.tankList[i].tankNumber});
        return (values.tankList[i].transferredQty > tankBalance[0].balance) ? "Quantity greater than Tank Balance" : undefined;
    }
  }
}

exports.checkTankBalance = function(index,tankList) {
  console.log("checkTankBalance" + tankList);
}

var setOpeningBalance = function(values,tankList) {
  if(values && values.tankNumber && tankList && tankList.length > 0) {
    var tankBalance = _.where(tankList, {value: values.tankNumber});
    if(tankBalance.length > 0) {
      values.openingBalance = tankBalance[0].openingBalance;
      return undefined;
    }
  }
}
var setDynamicOpeningBalance = function(values,index,tankList) {
  if(values["tank-" + index] && tankList && tankList.length > 0) {
    var tankBalance = _.where(tankList, {value: values["tank-" + index]});
    if(tankBalance.length > 0) {
      values["opening-" + index] = tankBalance[0].openingBalance;
      return undefined;
    }
  }
}

var setClosingBalance = function(values,tankList,actionType,modelName) {
  if(values && values.tankNumber && (values.quantity || (values.ownUnit && values.ownUnit.quantityReceived || values.qtyInLitres)) && tankList && tankList.length > 0) {
    var tankBalance = _.where(tankList, {value: values.tankNumber});
    if(tankBalance.length > 0) {
      var openingBalance = values.openingBalance ? values.openingBalance : tankBalance[0].openingBalance;
      var loss = values.fortificationLoss ? parseInt(values.fortificationLoss) : 0;
      if(actionType == 'deduct') {
        var closingBalance = parseInt(openingBalance) - parseInt(values.quantity) - loss;
      } else if (modelName == 'Register4' && actionType == 'add') {
        var closingBalance = parseInt(values.quantity) - loss;
      } else if (modelName == 'Register5' && actionType == 'add' && values.transferType == 1) {
        var closingBalance = parseInt(openingBalance) + parseInt(values.ownUnit.quantityReceived);
      } else if (modelName == 'Register5' && actionType == 'add' && values.otherUnit) {
        if(values.otherUnit.bulkTransactionType == 1 || values.otherUnit.bulkTransactionType == 2 || values.otherUnit.bulkTransactionType == 3) {
          var closingBalance = parseInt(openingBalance) + parseInt(values.qtyInLitres);
        } else if(values.otherUnit.bulkTransactionType == 4 || values.otherUnit.bulkTransactionType == 5 || values.otherUnit.bulkTransactionType == 6) {
          var closingBalance = parseInt(openingBalance) - parseInt(values.qtyInLitres);
        }
      } else if (modelName == 'Register6' && actionType == 'add') {
        let bottlingLoss = values.bottlingLoss ? parseInt(values.bottlingLoss) : 0;
        var closingBalance = parseInt(openingBalance) + parseInt(values.qtyInLitres) - parseInt(bottlingLoss);
      }
      values.closingBalance = closingBalance;
      
      return (closingBalance > tankBalance[0].balance) ? "Quantity greater than Tank Balance" : undefined;
  
    }
  }
}

var setQuantity = function(values,tankList) {
  if(values && values.fortifiedWine && values.fortifiedWine.tankNumber && tankList && tankList.length > 0) {
    var tankBalance = _.where(tankList, {value: values.fortifiedWine.tankNumber});
    var totalQuantity = parseInt(values.fermentedWine.quantity) + parseInt(values.spirit.quantity);
    values.fortifiedWine.quantity = totalQuantity;
    return undefined;
  }
}

var setLoss = function(values, modelName) {
  if(values) {
    if(["Register3"].indexOf(modelName) != -1 && values.openingBalance && values.baseWineObtained) {
      values.fermentationLoss = parseInt(values.openingBalance) - parseInt(values.baseWineObtained);
    } else if(["Register10"].indexOf(modelName) != -1 && values.openingBalance && values.baseWineObtained) {
      values.rackingLoss = parseInt(values.openingBalance) - parseInt(values.baseWineObtained);
    } else if (["Register5"].indexOf(modelName) != -1 && values.ownUnit && values.ownUnit.quantityIssued && values.ownUnit.quantityReceived) {
      values.ownUnit.loss = parseInt(values.ownUnit.quantityIssued) - parseInt(values.ownUnit.quantityReceived);
    } else if (["Register5"].indexOf(modelName) != -1 && values.otherUnit && values.openingBalance && values.qtyInLitres) {
      values.otherUnit.losses = parseInt(values.openingBalance) - parseInt(values.qtyInLitres);
    }
    
    return undefined;
  }
}

var setDynamicLoss = function(values, currState, modelName) {
  if(values) {
    if(["Register3", "Register10"].indexOf(modelName) != -1) {
      let totalQuantity = 0;
      for(let i=0; i < currState.tanks.length;i++) {
        totalQuantity = parseInt(totalQuantity) + parseInt((values['quantity-' + i]));
      }
      values.transferLoss = parseInt(values.baseWineObtained) - parseInt(totalQuantity);
    }
    
    return undefined;
  }
}

var checkForTankValidation = function(quantity, values, tankList) {
  if(!quantity) {
    return 'Please enter the quantity.'
  } else if(quantity && values.tankNumber && tankList && tankList.length > 0) {
      var tankBalance = _.where(tankList, {value: values.tankNumber});
      if(tankBalance.length > 0) {
        return (quantity > tankBalance[0].balance) ? "Quantity greater than Tank Balance" : undefined;
    }
  }
}

var checkForDynamicTankValidation = function(quantity, tankNumber, tankList) {
  if(!quantity) {
    return 'Please enter the quantity.'
  } else if(quantity && tankNumber && tankList && tankList.length > 0) {
      var tankBalance = _.where(tankList, {value: tankNumber});
      if(tankBalance.length > 0) {
        return (quantity > tankBalance[0].balance) ? "Quantity greater than Tank Balance" : undefined;
    }
  }
}

exports.validateForm = function (values, modelName, tankList, currState) {
  var validators = {};
  switch (modelName) {
    case "Register1":
      validators = {
        dateOfReceipt: !values.dateOfReceipt ? 'Please select the Date of Receipt' : undefined,
        grapeVariety: !values.grapeVariety ? 'Please select the Grape Variety' : undefined,
        qtyCrushed: !values.qtyCrushed ? 'Please enter Quantity of Fruit/Grapes Crushed in Kg.' : undefined,
        qtyReceived: !values.qtyReceived ? 'Please enter Quantity of Fruit/Grapes Received in Kg.' : undefined,
        supplierName: !values.supplierName ? 'Please select the Grape/Fruit Supplier' : undefined,
        yield: !values.yield ? 'Please Enter Yield' : undefined,
        tankNumber: !values.tankNumber ? 'Please select a Tank' : undefined,
        qtyBulkLts: checkForTankValidation(values.qtyBulkLts, values, tankList)
      };
      break;
    case "Register2":
      validators = {
        date: !values.date ? 'Please select the Date' : undefined,
        grapeVariety: !values.grapeVariety ? 'Please select the Grape Variety' : undefined,
        quantity: !values.quantity ? 'Please enter Quantity of Fruit/Grapes Crushed in Kg.' : undefined,
        juiceObtained: !values.juiceObtained ? 'Please enter Must/Juice Obtained from Fruits/Grapes.' : undefined,
        clarificationLoss: !values.clarificationLoss ? 'Please enter the Clarification Losses' : undefined
      };
      for(let i=0; i<currState.tanks.length;i++) {
        validators["tank-" + i] = !values["tank-" + i] ? 'Please select the Tank' : undefined
        validators["quantity-" + i] = checkForDynamicTankValidation(values["quantity-" + i], values["tank-" + i], tankList)
      }
      break;
    case "Register3":
      validators = {
        date: !values.date ? 'Please select the Date' : undefined,
        openingBalance: setOpeningBalance(values, tankList),
        baseWineObtained: !values.baseWineObtained ? 'Please enter Base Wine obtained.' : undefined,
        fermentationLoss: setLoss(values, 'Register3'),
        transferLoss: setDynamicLoss(values, currState, 'Register3')
      };
      for(let i=0; i<currState.tanks.length;i++) {
        validators["tank-" + i] = !values["tank-" + i] ? 'Please select the Tank' : undefined
        validators["quantity-" + i] = checkForDynamicTankValidation(values["quantity-" + i], values["tank-" + i], tankList),
        validators["opening-" + i] = setDynamicOpeningBalance(values, i, tankList)
      }
      break;
    case "Register10":
      validators = {
        date: !values.date ? 'Please select the Date' : undefined,
        openingBalance: setOpeningBalance(values, tankList),
        baseWineObtained: !values.baseWineObtained ? 'Please enter Base Wine obtained.' : undefined,
        rackingLoss: setLoss(values, 'Register10'),
        transferLoss: setDynamicLoss(values, currState, 'Register10')
      };
      for(let i=0; i<currState.tanks.length;i++) {
        validators["tank-" + i] = !values["tank-" + i] ? 'Please select the Tank' : undefined
        validators["quantity-" + i] = checkForDynamicTankValidation(values["quantity-" + i], values["tank-" + i], tankList),
        validators["opening-" + i] = setDynamicOpeningBalance(values, i, tankList)
      }
      break;
    case "Register4":
      validators = {
        "date": !values.date ? 'Please select the Date' : undefined,
        "fermentedWineTankNumber": !values.fermentedWine || !values.fermentedWine.tankNumber ? 'Please select the Tank Number' : undefined,
        "fermentedWineOpeningBalance": setOpeningBalance(values.fermentedWine, tankList),
        "fermentedWineQuantity": !values.fermentedWine || !values.fermentedWine.quantity ? 'Please enter the Quantity Taken' : undefined,
        "fermentedWineClosingBalance": setClosingBalance(values.fermentedWine, tankList, 'deduct'),
        "spiritTankNumber": !values.spirit || !values.spirit.tankNumber ? 'Please select the Tank Number' : undefined,
        "spiritOpeningBalance": setOpeningBalance(values.spirit, tankList),
        "spiritStrength": !values.spirit || !values.spirit.strength ? 'Please enter the Strength' : undefined,
        "spiritQuantity": !values.spirit || !values.spirit.quantity ? 'Please enter the Quantity Taken' : undefined,
        "spiritClosingBalance": setClosingBalance(values.spirit, tankList, 'deduct'),
        "fortifiedWineTankNumber": !values.fortifiedWine || !values.fortifiedWine.tankNumber ? 'Please select the Tank Number' : undefined,
        "fortifiedWineQuantity": setQuantity(values, tankList),
        "fortifiedWineAlcoholPercentage": !values.fortifiedWine || !values.fortifiedWine.alcoholPercentage ? 'Please enter the Alcohol%' : undefined,
        "fortifiedWineClosingBalance": setClosingBalance(values.fortifiedWine, tankList, 'add'),
        "fortifiedWineFortificationLoss": !values.fortifiedWine || !values.fortifiedWine.fortificationLoss ? 'Please enter the Fortification Loss' : undefined,
      };
      for(let i=0; i<values.tankList.length; i++){
        validators["tank-" + index] = !values.tankList || !values.tankList.tankNumber ? 'Please select the Tank' : undefined
      }
      break;
    case "Register5":
      validators = {
        date: !values.date ? 'Please select the Date' : undefined,
        tankNumber: !values.tankNumber ? 'Please select a Tank' : undefined,
        openingBalance: setOpeningBalance(values, tankList),
        transferType: !values.transferType ? "You have not selected the 'Bulk Wine transactions'" : undefined,
        otherUnitBulkTransactionType:
          (values.transferType === "2" && (!values.otherUnit || (values.otherUnit && !values.otherUnit.bulkTransactionType))) ?
            "You have not selected the 'Bulk Transaction Type'" : undefined,
        "ownUnitTankNumber": !values.ownUnit || !values.ownUnit.tankNumber ? "Please select a Tank" : undefined,
        "ownUnitOpeningBalance": setOpeningBalance(values.ownUnit, tankList),
        "ownUnitWineVariety" : !values.ownUnit || !values.ownUnit.wineVariety ? "Please select Wine Variety" : undefined,
        "ownUnitQuantityIssued" : !values.ownUnit || !values.ownUnit.quantityIssued ? 'Please enter the Quantity Taken' : checkForTankValidation(values.ownUnit.quantityIssued, values.ownUnit, tankList),
        "ownUnitQuantityReceived" : !values.ownUnit || !values.ownUnit.quantityReceived ? "Please enter quantity Received" : undefined,
        "ownUnitLoss" : setLoss(values, 'Register5'),
        closingBalance: setClosingBalance(values, tankList, 'add', modelName),
        "otherUnitPartyName": !values.otherUnit || !values.otherUnit.partyName ? "Please Enter Party Name" : undefined,
        "otherUnitPartyAddress": !values.otherUnit || !values.otherUnit.partyAddress ? "Please Enter Party Address" : undefined,
        "otherUnitTpepipNumber": !values.otherUnit || !values.otherUnit.tpepipNumber ? "Please Enter T.P/E.P/I.P No" : undefined,
        "otherUnitLiscenseType": !values.otherUnit || !values.otherUnit.liscenseType ? "Please Enter Liscense Type" : undefined,
        "otherUnitWineVariety": !values.otherUnit || !values.otherUnit.liscenseType ? "Please Enter Liscense Type" : undefined,
        qtyInLitres: !values.qtyInLitres ? "Please Enter Quantity" : undefined,
        "otherUnitImportExportFeePaid": !values.otherUnit || !values.otherUnit.importExportFeePaid ? "Please Enter Import/Export Fee" : undefined,
        "otherUnitVendFeePaid": !values.otherUnit || !values.otherUnit.vendFeePaid ? "Please Enter Vend Fee" : undefined,
        "otherUnitExciseDutyPaid": !values.otherUnit || !values.otherUnit.exciseDutyPaid ? "Please Enter Excide Duty Paid" : undefined,
        "otherUnitSpecialFeePaid": !values.otherUnit || !values.otherUnit.specialFeePaid ? "Please Enter Special Fee" : undefined,
        "otherUnitLosses": setLoss(values, 'Register5'),
      };
      break;
    case "Register6":
      validators = {
        date: !values.date ? 'Please select the Date' : undefined,
        tankNumber: !values.tankNumber ? 'Please select the Tank Number' : undefined,
        wineVariety: !values.wineVariety ? 'Please select the Wine Variety.' : undefined,
        openingBalance: setOpeningBalance(values, tankList),
        wineType: !values.wineType ? 'Please select the Type of Wine.' : undefined,
        brandName: !values.brandName ? 'Please select the Name of Brand.' : undefined,
        bottleSize: !values.bottleSize ? 'Please select the Bottle Size.' : undefined,
        bottleQty: !values.bottleQty ? 'Please enter the Number of Bottles.' : undefined,
        qtyInLitres: !values.qtyInLitres ? 'Please enter the Quantity of Litres.' : undefined,
        bottlingLoss: !values.bottlingLoss ? 'Please enter the Bottling Loss.' : undefined,
        closingBalance: setClosingBalance(values, tankList, 'add', modelName),
      };
      break;
    case "Register7":
      validators = {
        date: !values.date ? 'Please select the Date' : undefined,
        disgorgingType: !values.disgorgingType ? "You have not selected the 'Disgorging Type'" : undefined
      };
      break;
    case "TankMaster":
      validators = {
        gugingDate: !values.gugingDate ? 'Please select the Guging Date' : undefined,
        type: !values.type ? 'Please select the Tank Type' : undefined,
        capacity: !values.capacity ? 'Please enter the Capacity.' : undefined,
        installationDate: !values.installationDate ? 'Please select the Installation Date' : undefined
      };
      break;
      case "BrandMaster":
      validators = {
        name: !values.name ? 'Please Enter a Name' : undefined,
        size: !values.size ? 'Please select the Tank Type' : undefined,
        mfgCost: !values.mfgCost ? 'Please enter the Mfg. Cost.' : undefined,
        exciseDuty: !values.exciseDuty ? 'Please enter the Excise Duty.' : undefined,
        salesTax: !values.salesTax ? 'Please enter the Sales Tax.' : undefined,
        mrp: !values.mrp ? 'Please enter the MRP.' : undefined,
        labelAppOrderNo: !values.labelAppOrderNo ? 'Please enter the Label Approved No.' : undefined,
        mrpApprovalDate: !values.mrpApprovalDate ? 'Please select MRP approval date.' : undefined,
        mrpEffectiveDate: !values.mrpEffectiveDate ? 'Please select MRP effective date.' : undefined,
        mrpChangeDate: !values.mrpChangeDate ? 'Please select MRP change date.' : undefined
      };
      break;
      case "FlavourMaster":
      validators = {
        name: !values.name ? 'Please Enter a Name' : undefined,
        uom: !values.uom ? 'Please enter the UOM.' : undefined,
        isCommon: !values.isCommon ? 'Please select the is common' : undefined,
        brand: !values.brand ? 'Please enter the Brand.' : undefined,
        isApproved: !values.isApproved ? 'Please select the is approved' : undefined
      };
      break;
      case "GrapeVarietyMaster":
      validators = {
        name: !values.name ? 'Please Enter a Name' : undefined
      };
      break;
      case "SpiritMaster":
      validators = {
        name: !values.name ? 'Please Enter a Name' : undefined,
        brand: !values.brand ? 'Please Enter a Brand' : undefined
      };
      break;
      case "WineTypeMaster":
      validators = {
        name: !values.name ? 'Please Enter a Name' : undefined
      };
      break;
      case "BottledDetails":
      validators = {
        date: !values.date ? 'Please Select a Date' : undefined,
        type: !values.type ? 'Please Select a Type' : undefined,
        bottleSize: !values.bottleSize ? 'Please enter the bottle size.' : undefined,
        quantity: !values.quantity ? 'Please enter the quantity.' : undefined
      };
      break;
      case "CrushedJuiceDetails":
      validators = {
        date: !values.date ? 'Please Select a Date' : undefined,
        tankNumber: !values.tankNumber ? 'Please Select a Tank' : undefined,
        grapeVariety: !values.grapeVariety ? 'Please select grape variety.' : undefined,
        quantity: checkForTankValidation(values.quantity, values, tankList)
      };
      break;
      case "FermentedDetails":
      validators = {
        date: !values.date ? 'Please Select a Date' : undefined,
        tankNumber: !values.tankNumber ? 'Please Select a Tank' : undefined,
        quantity: checkForTankValidation(values.quantity, values, tankList)
      };
      break;
      case "FinishedGoodsDetails":
      validators = {
        date: !values.date ? 'Please Select a Date' : undefined,
        type: !values.type ? 'Please Select a Type' : undefined,
        bottleSize: !values.bottleSize ? 'Please enter the bottle size.' : undefined,
        quantity: !values.quantity ? 'Please enter the quantity.' : undefined
      };
      break;
      case "FlavourDetails":
      validators = {
        date: !values.date ? 'Please Select a Date' : undefined,
        tankNumber: !values.tankNumber ? 'Please Select a Tank' : undefined,
        flavour: !values.flavour ? 'Please select a flavour.' : undefined,
        quantity: checkForTankValidation(values.quantity, values, tankList)
      };
      break;
      case "GrapesDetails":
      validators = {
        date: !values.date ? 'Please Select a Date' : undefined,
        variety: !values.variety ? 'Please Select a Variety' : undefined,
        quantity: !values.quantity ? 'Please enter the quantity.' : undefined
      };
      break;
      case "LabelledDetails":
      validators = {
        date: !values.date ? 'Please Select a Date' : undefined,
        type: !values.type ? 'Please Select a Type' : undefined,
        bottleSize: !values.bottleSize ? 'Please enter bottle size.' : undefined,
        quantity: !values.quantity ? 'Please enter the quantity.' : undefined
      };
      break;
      case "SpiritDetails":
      validators = {
        date: !values.date ? 'Please Select a Date' : undefined,
        tankNumber: !values.tankNumber ? 'Please Select a Tank' : undefined,
        spiritType: !values.spiritType ? 'Please select Spirit Type.' : undefined,
        quantity: checkForTankValidation(values.quantity, values, tankList),
        strength: !values.strength ? 'Please enter strength.' : undefined,
        pl: !values.pl ? 'Please enter PL.' : undefined
      };
      break;
      case "TirageDisgorgedDetails":
      validators = {
        date: !values.date ? 'Please Select a Date' : undefined,
        tankNumber: !values.tankNumber ? 'Please Select a Tank' : undefined,
        spiritType: !values.spiritType ? 'Please select Spirit Type.' : undefined,
        quantity: !values.quantity ? 'Please enter the quantity.' : undefined
      };
      break;
      case "WineryUser":
        validators = {
          name: !values.name ? 'Please Enter Name' : undefined,
          liscenceNumber: !values.liscenceNumber ? 'Please Enter Liscence Number.' : undefined,
          authorizedOfficer: !values.authorizedOfficer ? 'Please select Authorized Officer.' : undefined,
          ownerName: !values.ownerName ? 'Please Enter Owner Name.' : undefined,
          email: !values.email ? 'Please Enter Email.' : undefined,
          telephoneNumber: !values.telephoneNumber ? 'Please Enter Telephone Number.' : undefined,
          gatNumber: !values.gatNumber ? 'Please enter a valid GAT/Survey No.' : undefined,
          state: !values.state ? 'Please select a State.' : undefined,
          district: !values.district ? 'Please select a District.' : undefined,
          taluka: !values.taluka ? 'Please select a Taluka.' : undefined,
          village: !values.village ? 'Please select a Village.' : undefined
        };
      break;
      case "ExciseOfficer":
        validators = {
          name: !values.name ? 'Please Enter Name' : undefined,
          officeName: !values.officeName ? 'Please Enter Office Name.' : undefined,
          post: !values.post ? 'Please Enter Post.' : undefined,
          email: !values.email ? 'Please Enter Email.' : undefined,
          telephoneNumber: !values.telephoneNumber ? 'Please Enter Telephone Number.' : undefined
        };
      break;
    default:
      validators = {};
      break;
  }
  return validators;
}

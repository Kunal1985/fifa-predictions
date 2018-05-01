import rp from 'request-promise';

exports.authenticateUser = function (values, currObj) {
  let options = {
    method: 'POST',
    uri: 'http://localhost:3000/' + currObj.state.submitType.toLowerCase(),
    body: values,
    json: true
  };
  return rp(options)
    .then(function (body) {
      if (body.userRegistered) {
        options.uri = 'http://localhost:3000/login'
        return rp(options)
          .then(function (body) {
            currObj.props.history.push("/home");
            return body
          })
          .catch(function (err) {
            currObj.setState({ errorObj: err });
            return null;
          });
      } else {
        if (body.loginSuccess)
          currObj.props.history.push("/home");
        else
          currObj.setState({
            errorObj: {
              error: "{\"message\":\"Not Logged In\"}",
              message: "500 - {\"message\":\"Not Logged In\"}",
              name: "StatusCodeError"
            }
          });
      }
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
    uri: 'http://localhost:3000/logout',
    json: true
  };
  return rp(options)
    .then(function (body) {
      console.log("Success Logout");
      currProps.history.push("/");
      currObj.setState({
        currUser: null
      });
      return body;
    })
    .catch(function (err) {
      console.log("Error Logout", err);
      return null;
    });
}

exports.getUserDetails = function (currObj) {
  return rp("http://localhost:3000/userDetails")
    .then(function (body) {
      currObj.setState({
        currUser: JSON.parse(body)
      });
      return body;
    })
    .catch(function (err) {
      console.warn("Error", err);
      return null;
    });
}

exports.getAllRecords = function (currObj, modelName) {
  console.log("getAllRecords for", modelName);
  var options = {
    method: 'GET',
    uri: `http://localhost:3000/get${modelName}`,
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
      return null;
    });
}

exports.getRecordsByQuery = function (currObj, modelName, query) {
  console.log("getRecordsByQuery for", modelName);
  var enpointUrl;
  var httpMethod;
  if (["States", "Districts", "SubDistricts", "Villages"].indexOf(modelName) != -1) {
    enpointUrl = `http://localhost:3000/get${modelName}ByQuery`;
    httpMethod = "POST";
  } else {
    enpointUrl = `http://localhost:3000/get${modelName}`;
    httpMethod = "GET";
  }
  var options = {
    method: httpMethod,
    uri: enpointUrl,
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
        default: break;
      }
      stateChangeVar[modelName.toLowerCase()] = body.map(function (currRecord) {
        switch (modelName) {
          case "TankMaster": return {
            label: currRecord.number,
            value: currRecord.number,
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
      return null;
    });
}

exports.getCurrRecord = function (queryParams, currObj, modelName) {
  if (queryParams && queryParams.upsertAction === 'update' && queryParams.id) {
    var options = {
      method: 'POST',
      uri: `http://localhost:3000/get${modelName}Record`,
      body: {
        _id: queryParams.id
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
        return null;
      });
  }
}

exports.upsertRecord = function (data, thisVar, modelName) {
  let options = {
    method: 'POST',
    uri: `http://localhost:3000/upsert${modelName}`,
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
      return null;
    });
}

exports.validateForm = function (values, modelName) {
  var validators = {};
  switch (modelName) {
    case "Register1":
      validators = {
        dateOfReceipt: !values.dateOfReceipt ? 'Please select the Date of Receipt' : undefined,
        grapeVariety: !values.grapeVariety ? 'Please select the Grape Variety' : undefined,
        qtyCrushed: !values.qtyCrushed ? 'Please enter Quantity of Fruit/Grapes Crushed in Kg.' : undefined,
        qtyReceived: !values.qtyReceived ? 'Please enter Quantity of Fruit/Grapes Received in Kg.' : undefined,
        supplierName: !values.supplierName ? 'Please select the Grape/Fruit Supplier' : undefined,
        gatNumber: !values.gatNumber ? 'Please enter a valid GAT/Survey No.' : undefined,
        state: !values.state ? 'Please select a State.' : undefined,
        district: !values.district ? 'Please select a District.' : undefined,
        taluka: !values.taluka ? 'Please select a Taluka.' : undefined,
        village: !values.village ? 'Please select a Village.' : undefined
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
      break;
    case "Register3":
      validators = {
        date: !values.date ? 'Please select the Date' : undefined,
        openingBalance: !values.openingBalance ? 'Please enter the Opening Balance' : undefined,
        baseWineObtained: !values.baseWineObtained ? 'Please enter Base Wine obtained.' : undefined,
        rackingLoss: !values.rackingLoss ? 'Please Racking Loss.' : undefined
      };
      break;
    case "Register4":
      validators = {
        date: !values.date ? 'Please select the Date' : undefined,
        "fermentedWineTankNumber": !values.fermentedWine || !values.fermentedWine.tankNumber ? 'Please select the Tank Number' : undefined,
        "fermentedWineOpeningBalance": !values.fermentedWine || !values.fermentedWine.openingBalance ? 'Please enter the Opening Balance' : undefined,
        "fermentedWineQuantity": !values.fermentedWine || !values.fermentedWine.quantity ? 'Please enter the Quantity Taken' : undefined,
        "fermentedWineClosingBalance": !values.fermentedWine || !values.fermentedWine.closingBalance ? 'Please enter the Closing Balance' : undefined,
        "spiritTankNumber": !values.spirit || !values.spirit.tankNumber ? 'Please select the Tank Number' : undefined,
        "spiritOpeningBalance": !values.spirit || !values.spirit.openingBalance ? 'Please enter the Opening Balance' : undefined,
        "spiritStrength": !values.spirit || !values.spirit.strength ? 'Please enter the Strength' : undefined,
        "spiritQuantity": !values.spirit || !values.spirit.quantity ? 'Please enter the Quantity Taken' : undefined,
        "spiritClosingBalance": !values.spirit || !values.spirit.closingBalance ? 'Please enter the Closing Balance' : undefined,
        "fortifiedWineTankNumber": !values.fortifiedWine || !values.fortifiedWine.tankNumber ? 'Please select the Tank Number' : undefined,
        "fortifiedWineQuantity": !values.fortifiedWine || !values.fortifiedWine.quantity ? 'Please enter the Quantity in Litres' : undefined,
        "fortifiedWineAlcoholPercentage": !values.fortifiedWine || !values.fortifiedWine.alcoholPercentage ? 'Please enter the Alcohol%' : undefined,
        "fortifiedWineClosingBalance": !values.fortifiedWine || !values.fortifiedWine.closingBalance ? 'Please enter the Closing Balance' : undefined,
        "fortifiedWineFortificationLoss": !values.fortifiedWine || !values.fortifiedWine.fortificationLoss ? 'Please enter the Fortification Loss' : undefined,
      };
      break;
    case "Register5":
      validators = {
        date: !values.date ? 'Please select the Date' : undefined,
        transferType: !values.transferType ? "You have not selected the 'Bulk Wine transactions'" : undefined,
        otherUnitBulkTransactionType:
          (values.transferType === "2" && (!values.otherUnit || (values.otherUnit && !values.otherUnit.bulkTransactionType))) ?
            "You have not selected the 'Bulk Transaction Type'" : undefined
      };
      break;
    case "Register6":
      validators = {
        date: !values.date ? 'Please select the Date' : undefined,
        tankNumber: !values.tankNumber ? 'Please select the Tank Number' : undefined,
        wineVariety: !values.wineVariety ? 'Please select the Wine Variety.' : undefined,
        openingBalance: !values.openingBalance ? 'Please enter the Opening Balance' : undefined,
        wineType: !values.wineType ? 'Please select the Type of Wine.' : undefined,
        brandName: !values.brandName ? 'Please select the Name of Brand.' : undefined,
        bottleSize: !values.bottleSize ? 'Please select the Bottle Size.' : undefined,
        bottleQty: !values.bottleQty ? 'Please enter the Number of Bottles.' : undefined,
        qtyInLitres: !values.qtyInLitres ? 'Please enter the Quantity of Litres.' : undefined,
        bottlingLoss: !values.bottlingLoss ? 'Please enter the Bottling Loss.' : undefined,
        closingBalance: !values.closingBalance ? 'Please enter the Closing Balance' : undefined,
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
    default:
      validators = {};
      break;
  }
  return validators;
}

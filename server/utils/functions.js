var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

// Imports for Registers' Models
var Register1 = require('../../models/registers/register1');
var Register2 = require('../../models/registers/register2');
var Register3 = require('../../models/registers/register3');
var Register4 = require('../../models/registers/register4');
var Register5 = require('../../models/registers/register5');
var Register6 = require('../../models/registers/register6');
var Register7 = require('../../models/registers/register7');
var Register8 = require('../../models/registers/register8');
var Register9 = require('../../models/registers/register9');

// Imports for Masters' Models
var TankMaster = require('../../models/masters/tankMaster');
var WineTypeMaster = require('../../models/masters/wineTypeMaster');
var GrapeVarietyMaster = require('../../models/masters/grapeVarietyMaster');
var BrandMaster = require('../../models/masters/brandMaster');
var FlavourMaster = require('../../models/masters/flavourMaster');
var SpiritMaster = require('../../models/masters/spiritMaster');
var FlavourdDetails = require('../../models/opening-balance/flavourDetails');
var SpiritDetails = require('../../models/opening-balance/spiritDetails');
var GrapesDetails = require('../../models/opening-balance/grapesDetails');
var CrushedJuiceDetails = require('../../models/opening-balance/crushedJuiceDetails');
var FermentedDetails = require('../../models/opening-balance/fermentedDetails');
var BottledDetails = require('../../models/opening-balance/bottledDetails');
var TirageDisgorgedDetails = require('../../models/opening-balance/tirageDisgorgedDetails');
var LabelledDetails = require('../../models/opening-balance/labelledDetails');

// Imports for Geography's Models
var States = require('../../models/geography/states');
var Districts = require('../../models/geography/districts');
var SubDistricts = require('../../models/geography/subDistricts');
var Villages = require('../../models/geography/villages');

// Imports for Admin's Models
var WineryUser = require('../../models/admin/wineryUser');
var ExciseOfficer = require('../../models/admin/exciseOfficer');

/**
 * Method to fetch Record by ID for a model.
 * 
 */
var getModelObject = function(modelName){
  var modelObj = null;
  switch(modelName){
    case "Register1": modelObj = Register1; break;
    case "Register2": modelObj = Register2; break;
    case "Register3": modelObj = Register3; break;
    case "Register4": modelObj = Register4; break;
    case "Register5": modelObj = Register5; break;
    case "Register6": modelObj = Register6; break;
    case "Register7": modelObj = Register7; break;
    case "Register8": modelObj = Register8; break;
    case "Register9": modelObj = Register9; break;
    case "TankMaster": modelObj = TankMaster; break;
    case "WineTypeMaster": modelObj = WineTypeMaster; break;
    case "GrapeVarietyMaster": modelObj = GrapeVarietyMaster; break;
    case "BrandMaster": modelObj = BrandMaster; break;
    case "FlavourMaster": modelObj = FlavourMaster; break;
    case "SpiritMaster": modelObj = SpiritMaster; break;
    case "States": modelObj = States; break;
    case "Districts": modelObj = Districts; break;
    case "SubDistricts": modelObj = SubDistricts; break;
    case "Villages": modelObj = Villages; break;
    case "WineryUser": modelObj = WineryUser; break;
    case "ExciseOfficer": modelObj = ExciseOfficer; break;
    default: break;
  }
  return modelObj;
}

/**
 * Method to upsert Record for a model.
 * 
 */
module.exports.upsertRecord = function(req, res, next, modelName){
  var data = req.body;
  var currRecordId = data._id;
  var modelObj = getModelObject(modelName);
  if(modelObj){
    console.log("upsertRecord for", modelName, currRecordId);
    if(currRecordId){
      modelObj.update({_id: ObjectId(currRecordId)}, data, function(err, modelRecord) {
        if (err) return next(err);
        console.log("Record Updated for", modelName, modelRecord);
        res.json({ recordUpdated: true });
      });
    } else {
      var modelObjCreated = new modelObj(data);
      modelObjCreated.save(function(err, modelRecord) {
        if (err) return next(err);
        console.log("New Record Created for", modelName, modelRecord);
        res.json({ recordCreated: true });
      });
    }
  } else{
    throw new Error("Model not found!");
  }
} 

/**
 * Method to fetch all records for a model.
 * 
 */
module.exports.getAllRecords = function(req, res, next, modelName, query){
  var modelObj = getModelObject(modelName);
  if(!query)
    query = {};
  if(modelObj){
    console.log("getAllRecords for", modelName, query);
    modelObj.find(query, function(err, doc) {
      if (err) { throw err; }
      console.log(doc.length, modelName, "records found");
      res.json(doc);
    });
  } else{
    throw new Error("Model not found!");
  }
} 

/**
 * Method to fetch Record by ID for a model.
 * 
 */
module.exports.getRecordById = function(req, res, next, modelName){
  var reqBody = req.body;
  var modelObj = getModelObject(modelName);
  if(modelObj){
    console.log("getRecordById for", modelName, reqBody);
    modelObj.findById(reqBody._id, function(err, doc) {
      if (err) { throw err; }
      console.log(modelName, "record found", doc);
      res.json(doc);
    });
  } else{
    throw new Error("Model not found!");
  }
}
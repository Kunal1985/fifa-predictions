var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var User = require('../../models/user');

// Imports for Registers' Models
var Predictions = require('../../models/predictions');
var Results = require('../../models/results');

import { verifyToken } from './jwtUtils';

module.exports.checkTampering = function(req, res, next){  
  var currPassport = req.session.passport;
  var authToken = req.headers["authorization"];
  var decoded = verifyToken(authToken);
  if(decoded.username != currPassport.user.username)
    return next(new Error("We have detected that an attempt was made to tamper with the token! You will be forcefully logged out!"));
  return next();
}

module.exports.isLoggedIn = function(req, res, next) {
  if (req.session.passport)
    return next();
  return next(new Error("Not Logged In!"));
}
/**
 * Method to fetch Record by ID for a model.
 * 
 */
var getModelObject = function(modelName){
  var modelObj = null;
  switch(modelName){
    case "Results": modelObj = Results; break;
    case "Predictions": modelObj = Predictions; break;
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
      modelObj.findById(currRecordId, function(err, doc) {
        var doc = doc;
        modelObj.update({_id: ObjectId(currRecordId)}, data, function(err, modelRecord) {
          if (err) return next(err);
          console.log("Record Updated for", modelName, modelRecord);
          res.json({ recordUpdated: true });
        });
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

/**
 * Method to fetch Current User.
 * 
 */
module.exports.getRecordByUserName = function(req, res, next, modelName){
  var reqBody = req.body;
  var modelObj = getModelObject(modelName);
  if(modelObj){
    console.log("getRecordByUserName for", modelName, reqBody);
    modelObj.findOne({email: reqBody.email}, function(err, doc) {
      if (err) { throw err; }
      console.log(modelName, "record found", doc);
      res.json(doc);
    });
  } else{
    throw new Error("Model not found!");
  }
}

/**
 * Method to reset password.
 * 
 */
module.exports.changePassword = function(req, res, next, modelName){
  var reqBody = req.body;
  console.log("changePassword", reqBody)
  var currPassword = reqBody.password;
  User.findOne({username: reqBody.userName}, function(err, doc) {
    if (err) { throw err; }
    console.log(modelName, "record found", doc);
    if(!doc.validPassword(currPassword)) {
      res.json({ error: "Your current password do not match" });
    } else if(reqBody.newPassword != reqBody.confirmPassword) {
      res.json({ error: "Your new passwords do not match" });
    } else {
      var currRecordId = doc._id;
      var newPassword = doc.generateHash(reqBody.newPassword);

      doc.update({password: newPassword}, function(err, modelRecord) {
        if (err) return next(err);
        res.json({ recordUpdated: true });
      });
      }
  });
}
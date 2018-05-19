import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../utils/functions';

module.exports = function(app) {
  /**
  * POST /getStates
  * Get States by specified Query
  */
  app.post('/getStatesByQuery', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "States");
  });

  /**
  * POST /getDistricts
  * Get Districts by specified Query
  */
  app.post('/getDistrictsByQuery', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "Districts", req.body.query);
  });

  /**
  * POST /getSubDistricts
  * Get SubDistricts by specified Query
  */
  app.post('/getSubDistrictsByQuery', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "SubDistricts", req.body.query);
  });

  /**
  * POST /getVillages
  * Get Villages by specified Query
  */
  app.post('/getVillagesByQuery', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "Villages", req.body.query);
  });
}
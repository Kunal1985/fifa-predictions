import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertTirageDetails
   * Upsert TirageDetails
   */
  app.post('/upsertTirageDetails', isLoggedIn, function(req, res, next) {
    upsertRecord(req, res, next, "TirageDetails");
  });

  /**
   * GET /getTirageDetails
   * Get TirageDetails
   */
  app.get('/getTirageDetails', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "TirageDetails");
  });

  /**
   * GET /getTirageDetailsRecord
   * Get TirageDetails Record
   */
  app.post('/getTirageDetailsRecord', isLoggedIn, function(req, res, next) {
    getRecordById(req, res, next, "TirageDetails");
  });      
}
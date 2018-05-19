import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertTirageDisgorgedDetails
   * Upsert TirageDisgorgedDetails
   */
  app.post('/upsertTirageDisgorgedDetails', isLoggedIn, function(req, res, next) {
    upsertRecord(req, res, next, "TirageDisgorgedDetails");
  });

  /**
   * GET /getTirageDisgorgedDetails
   * Get TirageDisgorgedDetails
   */
  app.get('/getTirageDisgorgedDetails', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "TirageDisgorgedDetails");
  });

  /**
   * GET /getTirageDisgorgedDetailsRecord
   * Get TirageDisgorgedDetails Record
   */
  app.post('/getTirageDisgorgedDetailsRecord', isLoggedIn, function(req, res, next) {
    getRecordById(req, res, next, "TirageDisgorgedDetails");
  });      
}
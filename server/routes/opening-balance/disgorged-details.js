import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertDisgorgedDetails
   * Upsert DisgorgedDetails
   */
  app.post('/upsertDisgorgedDetails', isLoggedIn, function(req, res, next) {
    upsertRecord(req, res, next, "DisgorgedDetails");
  });

  /**
   * GET /getDisgorgedDetails
   * Get DisgorgedDetails
   */
  app.get('/getDisgorgedDetails', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "DisgorgedDetails");
  });

  /**
   * GET /getDisgorgedDetailsRecord
   * Get DisgorgedDetails Record
   */
  app.post('/getDisgorgedDetailsRecord', isLoggedIn, function(req, res, next) {
    getRecordById(req, res, next, "DisgorgedDetails");
  });      
}
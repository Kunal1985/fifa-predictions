import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertVintageMaster
   * Upsert VintageMaster
   */
  app.post('/upsertVintageMaster', isLoggedIn, function(req, res, next) {
      upsertRecord(req, res, next, "VintageMaster");
  });
  
  /**
   * GET /getVintageMaster
   * Get VintageMaster
   */
  app.get('/getVintageMaster', isLoggedIn, function(req, res, next) {
      getAllRecords(req, res, next, "VintageMaster");
  });
  
  /**
   * GET /getVintageMasterRecord
   * Get VintageMaster Record
   */
  app.post('/getVintageMasterRecord', isLoggedIn, function(req, res, next) {
      getRecordById(req, res, next, "VintageMaster");
  });    
}
import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertRegister7
   * Upsert Register7
   */
  app.post('/upsertRegister7', isLoggedIn, function(req, res, next) {
    upsertRecord(req, res, next, "Register7");
  });

  /**
   * GET /getRegister7
   * Get Register7
   */
  app.get('/getRegister7', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "Register7");
  });

  /**
   * GET /getRegister7Record
   * Get Register7 Record
   */
  app.post('/getRegister7Record', isLoggedIn, function(req, res, next) {
    getRecordById(req, res, next, "Register7");
  });    
}
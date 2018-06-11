import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertRegister10
   * Upsert Register10
   */
  app.post('/upsertRegister10', isLoggedIn, function(req, res, next) {
    upsertRecord(req, res, next, "Register10");
  });

  /**
   * GET /getRegister10
   * Get Register10
   */
  app.get('/getRegister10', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "Register10");
  });

  /**
   * GET /getRegister10Record
   * Get Register10 Record
   */
  app.post('/getRegister10Record', isLoggedIn, function(req, res, next) {
    getRecordById(req, res, next, "Register10");
  });    
}
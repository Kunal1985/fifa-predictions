import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertRegister4
   * Upsert Register4
   */
  app.post('/upsertRegister4', isLoggedIn, function(req, res, next) {
    upsertRecord(req, res, next, "Register4");
  });

  /**
   * GET /getRegister4
   * Get Register4
   */
  app.get('/getRegister4', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "Register4");
  });

  /**
   * GET /getRegister4Record
   * Get Register4 Record
   */
  app.post('/getRegister4Record', isLoggedIn, function(req, res, next) {
    getRecordById(req, res, next, "Register4");
  });    
}
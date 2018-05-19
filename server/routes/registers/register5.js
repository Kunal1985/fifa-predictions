import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertRegister5
   * Upsert Register5
   */
  app.post('/upsertRegister5', isLoggedIn, function(req, res, next) {
    upsertRecord(req, res, next, "Register5");
  });

  /**
   * GET /getRegister5
   * Get Register5
   */
  app.get('/getRegister5', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "Register5");
  });

  /**
   * GET /getRegister5Record
   * Get Register5 Record
   */
  app.post('/getRegister5Record', isLoggedIn, function(req, res, next) {
    getRecordById(req, res, next, "Register5");
  });    
}
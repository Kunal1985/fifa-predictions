import { upsertRecord, getAllRecords, getRecordById, isLoggedIn, checkTampering } from '../../utils/functions';

module.exports = function (app) {
  /**
   * POST /upsertRegister1
   * Upsert Register1
   */
  app.post('/upsertRegister1', isLoggedIn, checkTampering, function (req, res, next) {
    upsertRecord(req, res, next, "Register1");
  });
  
  /**
   * GET /getRegister1
   * Get Register1
   */
  app.get('/getRegister1', isLoggedIn, checkTampering, function (req, res, next) {
    getAllRecords(req, res, next, "Register1");
  });
  
  /**
   * GET /getRegister1Record
   * Get Register1 Record
   */
  app.post('/getRegister1Record', isLoggedIn, checkTampering, function (req, res, next) {
    getRecordById(req, res, next, "Register1");
  });
}
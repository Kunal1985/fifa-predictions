import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertRegister8
   * Upsert Register8
   */
  app.post('/upsertRegister8', function(req, res, next) {
    upsertRecord(req, res, next, "Register8");
  });

  /**
   * GET /getRegister8
   * Get Register8
   */
  app.get('/getRegister8', function(req, res, next) {
    getAllRecords(req, res, next, "Register8");
  });

  /**
   * GET /getRegister8Record
   * Get Register8 Record
   */
  app.post('/getRegister8Record', function(req, res, next) {
    getRecordById(req, res, next, "Register8");
  });    
}
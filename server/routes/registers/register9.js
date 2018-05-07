import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertRegister9
   * Upsert Register9
   */
  app.post('/upsertRegister9', function(req, res, next) {
    upsertRecord(req, res, next, "Register9");
  });

  /**
   * GET /getRegister9
   * Get Register9
   */
  app.get('/getRegister9', function(req, res, next) {
    getAllRecords(req, res, next, "Register9");
  });

  /**
   * GET /getRegister9Record
   * Get Register9 Record
   */
  app.post('/getRegister9Record', function(req, res, next) {
    getRecordById(req, res, next, "Register9");
  });    
}
import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertRegister6
   * Upsert Register6
   */
  app.post('/upsertRegister6', function(req, res, next) {
    upsertRecord(req, res, next, "Register6");
  });

  /**
   * GET /getRegister6
   * Get Register6
   */
  app.get('/getRegister6', function(req, res, next) {
    getAllRecords(req, res, next, "Register6");
  });

  /**
   * GET /getRegister6Record
   * Get Register6 Record
   */
  app.post('/getRegister6Record', function(req, res, next) {
    getRecordById(req, res, next, "Register6");
  });    
}
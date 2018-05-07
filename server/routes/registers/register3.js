import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertRegister3
   * Upsert Register3
   */
  app.post('/upsertRegister3', function(req, res, next) {
    upsertRecord(req, res, next, "Register3");
  });

  /**
   * GET /getRegister3
   * Get Register3
   */
  app.get('/getRegister3', function(req, res, next) {
    getAllRecords(req, res, next, "Register3");
  });

  /**
   * GET /getRegister3Record
   * Get Register3 Record
   */
  app.post('/getRegister3Record', function(req, res, next) {
    getRecordById(req, res, next, "Register3");
  });    
}
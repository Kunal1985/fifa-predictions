import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertRegister2
   * Upsert Register2
   */
  app.post('/upsertRegister2', function(req, res, next) {
    upsertRecord(req, res, next, "Register2");
  });

  /**
   * GET /getRegister2
   * Get Register2
   */
  app.get('/getRegister2', function(req, res, next) {
    getAllRecords(req, res, next, "Register2");
  });

  /**
   * GET /getRegister2Record
   * Get Register2 Record
   */
  app.post('/getRegister2Record', function(req, res, next) {
    getRecordById(req, res, next, "Register2");
  });    
}
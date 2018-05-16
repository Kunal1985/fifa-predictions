import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertBottledDetails
   * Upsert BottledDetails
   */
  app.post('/upsertBottledDetails', function(req, res, next) {
    upsertRecord(req, res, next, "BottledDetails");
  });

  /**
   * GET /getBottledDetails
   * Get BottledDetails
   */
  app.get('/getBottledDetails', function(req, res, next) {
    getAllRecords(req, res, next, "BottledDetails");
  });

  /**
   * GET /getBottledDetailsRecord
   * Get BottledDetails Record
   */
  app.post('/getBottledDetailsRecord', function(req, res, next) {
    getRecordById(req, res, next, "BottledDetails");
  });      
}
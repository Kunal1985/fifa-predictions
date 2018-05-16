import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertCrushedJuiceDetails
   * Upsert CrushedJuiceDetails
   */
  app.post('/upsertCrushedJuiceDetails', function(req, res, next) {
    upsertRecord(req, res, next, "CrushedJuiceDetails");
  });

  /**
   * GET /getCrushedJuiceDetails
   * Get CrushedJuiceDetails
   */
  app.get('/getCrushedJuiceDetails', function(req, res, next) {
    getAllRecords(req, res, next, "CrushedJuiceDetails");
  });

  /**
   * GET /getCrushedJuiceDetailsRecord
   * Get CrushedJuiceDetails Record
   */
  app.post('/getCrushedJuiceDetailsRecord', function(req, res, next) {
    getRecordById(req, res, next, "CrushedJuiceDetails");
  });      
}
import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertFlavourDetails
   * Upsert FlavourDetails
   */
  app.post('/upsertFlavourDetails', function(req, res, next) {
    upsertRecord(req, res, next, "FlavourDetails");
  });

  /**
   * GET /getFlavourDetails
   * Get FlavourDetails
   */
  app.get('/getFlavourDetails', function(req, res, next) {
    getAllRecords(req, res, next, "FlavourDetails");
  });

  /**
   * GET /getFlavourDetailsRecord
   * Get FlavourDetails Record
   */
  app.post('/getFlavourDetailsRecord', function(req, res, next) {
    getRecordById(req, res, next, "FlavourDetails");
  });      
}
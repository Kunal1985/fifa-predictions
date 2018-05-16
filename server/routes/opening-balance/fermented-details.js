import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertFermentedDetails
   * Upsert FermentedDetails
   */
  app.post('/upsertFermentedDetails', function(req, res, next) {
    upsertRecord(req, res, next, "FermentedDetails");
  });

  /**
   * GET /getFermentedDetails
   * Get FermentedDetails
   */
  app.get('/getFermentedDetails', function(req, res, next) {
    getAllRecords(req, res, next, "FermentedDetails");
  });

  /**
   * GET /getFermentedDetailsRecord
   * Get FermentedDetails Record
   */
  app.post('/getFermentedDetailsRecord', function(req, res, next) {
    getRecordById(req, res, next, "FermentedDetails");
  });      
}
import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertGrapesDetails
   * Upsert GrapesDetails
   */
  app.post('/upsertGrapesDetails', function(req, res, next) {
    upsertRecord(req, res, next, "GrapesDetails");
  });

  /**
   * GET /getGrapesDetails
   * Get GrapesDetails
   */
  app.get('/getGrapesDetails', function(req, res, next) {
    getAllRecords(req, res, next, "GrapesDetails");
  });

  /**
   * GET /getGrapesDetailsRecord
   * Get GrapesDetails Record
   */
  app.post('/getGrapesDetailsRecord', function(req, res, next) {
    getRecordById(req, res, next, "GrapesDetails");
  });      
}
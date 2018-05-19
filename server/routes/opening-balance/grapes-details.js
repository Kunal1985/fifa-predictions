import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertGrapesDetails
   * Upsert GrapesDetails
   */
  app.post('/upsertGrapesDetails', isLoggedIn, function(req, res, next) {
    upsertRecord(req, res, next, "GrapesDetails");
  });

  /**
   * GET /getGrapesDetails
   * Get GrapesDetails
   */
  app.get('/getGrapesDetails', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "GrapesDetails");
  });

  /**
   * GET /getGrapesDetailsRecord
   * Get GrapesDetails Record
   */
  app.post('/getGrapesDetailsRecord', isLoggedIn, function(req, res, next) {
    getRecordById(req, res, next, "GrapesDetails");
  });      
}
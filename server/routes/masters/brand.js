import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertBrandMaster
   * Upsert BrandMaster
   */
  app.post('/upsertBrandMaster', function(req, res, next) {
    upsertRecord(req, res, next, "BrandMaster");
  });

  /**
   * GET /getBrandMaster
   * Get BrandMaster
   */
  app.get('/getBrandMaster', function(req, res, next) {
    getAllRecords(req, res, next, "BrandMaster");
  });

  /**
   * GET /getBrandMasterRecord
   * Get BrandMaster Record
   */
  app.post('/getBrandMasterRecord', function(req, res, next) {
    getRecordById(req, res, next, "BrandMaster");
  });
      
}
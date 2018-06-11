import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertGrapesSupplierMaster
   * Upsert GrapesSupplierMaster
   */
  app.post('/upsertGrapesSupplierMaster', isLoggedIn, function(req, res, next) {
    upsertRecord(req, res, next, "GrapesSupplierMaster");
  });

  /**
   * GET /getGrapesSupplierMaster
   * Get GrapesSupplierMaster
   */
  app.get('/getGrapesSupplierMaster', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "GrapesSupplierMaster");
  });

  /**
   * GET /getGrapesSupplierMasterRecord
   * Get GrapesSupplierMaster Record
   */
  app.post('/getGrapesSupplierMasterRecord', isLoggedIn, function(req, res, next) {
    getRecordById(req, res, next, "GrapesSupplierMaster");
  });      
}
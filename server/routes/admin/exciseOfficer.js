import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertExciseOfficer
   * Upsert ExciseOfficer
   */
  app.post('/upsertExciseOfficer', isLoggedIn, function(req, res, next) {
      upsertRecord(req, res, next, "ExciseOfficer");
    });
    
    /**
     * GET /getExciseOfficer
     * Get ExciseOfficer
     */
    app.get('/getExciseOfficer', isLoggedIn, function(req, res, next) {
      getAllRecords(req, res, next, "ExciseOfficer");
    });
    
    /**
     * GET /getExciseOfficerRecord
     * Get ExciseOfficer Record
     */
    app.post('/getExciseOfficerRecord', isLoggedIn, function(req, res, next) {
      getRecordById(req, res, next, "ExciseOfficer");
    });
}
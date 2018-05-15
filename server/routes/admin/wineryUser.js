import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertWineryUser
   * Upsert WineryUser
   */
  app.post('/upsertWineryUser', function(req, res, next) {
      upsertRecord(req, res, next, "WineryUser");
    });
    
    /**
     * GET /getWineryUser
     * Get WineryUser
     */
    app.get('/getWineryUser', function(req, res, next) {
      getAllRecords(req, res, next, "WineryUser");
    });
    
    /**
     * GET /getWineryUserRecord
     * Get WineryUser Record
     */
    app.post('/getWineryUserRecord', function(req, res, next) {
      getRecordById(req, res, next, "WineryUser");
    });
}
import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertWineryUser
   * Upsert WineryUser
   */
  app.post('/upsertWineryUser', isLoggedIn, function(req, res, next) {
      upsertRecord(req, res, next, "WineryUser");
    });
    
    /**
     * GET /getWineryUser
     * Get WineryUser
     */
    app.get('/getWineryUser', isLoggedIn, function(req, res, next) {
      getAllRecords(req, res, next, "WineryUser");
    });
    
    /**
     * GET /getWineryUserRecord
     * Get WineryUser Record
     */
    app.post('/getWineryUserRecord', isLoggedIn, function(req, res, next) {
      getRecordById(req, res, next, "WineryUser");
    });
}
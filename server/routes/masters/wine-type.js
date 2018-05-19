import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertWineTypeMaster
   * Upsert WineTypeMaster
   */
  app.post('/upsertWineTypeMaster', isLoggedIn, function(req, res, next) {
    upsertRecord(req, res, next, "WineTypeMaster");
  });

  /**
   * GET /getWineTypeMaster
   * Get WineTypeMaster
   */
  app.get('/getWineTypeMaster', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "WineTypeMaster");
  });

  /**
   * GET /getWineTypeMasterRecord
   * Get WineTypeMaster Record
   */
  app.post('/getWineTypeMasterRecord', isLoggedIn, function(req, res, next) {
    getRecordById(req, res, next, "WineTypeMaster");
  });          
}
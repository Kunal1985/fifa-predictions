import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertWineTypeMaster
   * Upsert WineTypeMaster
   */
  app.post('/upsertWineTypeMaster', function(req, res, next) {
    upsertRecord(req, res, next, "WineTypeMaster");
  });

  /**
   * GET /getWineTypeMaster
   * Get WineTypeMaster
   */
  app.get('/getWineTypeMaster', function(req, res, next) {
    getAllRecords(req, res, next, "WineTypeMaster");
  });

  /**
   * GET /getWineTypeMasterRecord
   * Get WineTypeMaster Record
   */
  app.post('/getWineTypeMasterRecord', function(req, res, next) {
    getRecordById(req, res, next, "WineTypeMaster");
  });          
}
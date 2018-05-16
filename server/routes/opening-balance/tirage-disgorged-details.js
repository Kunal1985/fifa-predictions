import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertTirageDisgorgedDetails
   * Upsert TirageDisgorgedDetails
   */
  app.post('/upsertTirageDisgorgedDetails', function(req, res, next) {
    upsertRecord(req, res, next, "TirageDisgorgedDetails");
  });

  /**
   * GET /getTirageDisgorgedDetails
   * Get TirageDisgorgedDetails
   */
  app.get('/getTirageDisgorgedDetails', function(req, res, next) {
    getAllRecords(req, res, next, "TirageDisgorgedDetails");
  });

  /**
   * GET /getTirageDisgorgedDetailsRecord
   * Get TirageDisgorgedDetails Record
   */
  app.post('/getTirageDisgorgedDetailsRecord', function(req, res, next) {
    getRecordById(req, res, next, "TirageDisgorgedDetails");
  });      
}
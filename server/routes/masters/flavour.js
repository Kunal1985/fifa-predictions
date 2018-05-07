import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertFlavourMaster
   * Upsert FlavourMaster
   */
  app.post('/upsertFlavourMaster', function(req, res, next) {
    upsertRecord(req, res, next, "FlavourMaster");
  });

  /**
   * GET /getFlavourMaster
   * Get FlavourMaster
   */
  app.get('/getFlavourMaster', function(req, res, next) {
    getAllRecords(req, res, next, "FlavourMaster");
  });

  /**
   * GET /getFlavourMasterRecord
   * Get FlavourMaster Record
   */
  app.post('/getFlavourMasterRecord', function(req, res, next) {
    getRecordById(req, res, next, "FlavourMaster");
  });      
}
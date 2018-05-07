import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertGrapeVarietyMaster
   * Upsert GrapeVarietyMaster
   */
  app.post('/upsertGrapeVarietyMaster', function(req, res, next) {
    upsertRecord(req, res, next, "GrapeVarietyMaster");
  });

  /**
   * GET /getGrapeVarietyMaster
   * Get GrapeVarietyMaster
   */
  app.get('/getGrapeVarietyMaster', function(req, res, next) {
    getAllRecords(req, res, next, "GrapeVarietyMaster");
  });

  /**
   * GET /getGrapeVarietyMasterRecord
   * Get GrapeVarietyMaster Record
   */
  app.post('/getGrapeVarietyMasterRecord', function(req, res, next) {
    getRecordById(req, res, next, "GrapeVarietyMaster");
  });      
}
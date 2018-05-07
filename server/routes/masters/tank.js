import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertTankMaster
   * Upsert TankMaster
   */
  app.post('/upsertTankMaster', function(req, res, next) {
      upsertRecord(req, res, next, "TankMaster");
  });
  
  /**
   * GET /getTankMaster
   * Get TankMaster
   */
  app.get('/getTankMaster', function(req, res, next) {
      getAllRecords(req, res, next, "TankMaster");
  });
  
  /**
   * GET /getTankMasterRecord
   * Get TankMaster Record
   */
  app.post('/getTankMasterRecord', function(req, res, next) {
      getRecordById(req, res, next, "TankMaster");
  });    
}
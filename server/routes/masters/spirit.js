import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertSpiritMaster
   * Upsert SpiritMaster
   */
  app.post('/upsertSpiritMaster', isLoggedIn, function(req, res, next) {
    upsertRecord(req, res, next, "SpiritMaster");
  });

  /**
   * GET /getSpiritMaster
   * Get SpiritMaster
   */
  app.get('/getSpiritMaster', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "SpiritMaster");
  });

  /**
   * GET /getSpiritMasterRecord
   * Get SpiritMaster Record
   */
  app.post('/getSpiritMasterRecord', isLoggedIn, function(req, res, next) {
    getRecordById(req, res, next, "SpiritMaster");
  });
}
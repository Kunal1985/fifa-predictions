import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertSpiritMaster
   * Upsert SpiritMaster
   */
  app.post('/upsertSpiritMaster', function(req, res, next) {
    upsertRecord(req, res, next, "SpiritMaster");
  });

  /**
   * GET /getSpiritMaster
   * Get SpiritMaster
   */
  app.get('/getSpiritMaster', function(req, res, next) {
    getAllRecords(req, res, next, "SpiritMaster");
  });

  /**
   * GET /getSpiritMasterRecord
   * Get SpiritMaster Record
   */
  app.post('/getSpiritMasterRecord', function(req, res, next) {
    getRecordById(req, res, next, "SpiritMaster");
  });
}
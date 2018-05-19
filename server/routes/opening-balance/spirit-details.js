import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertSpiritDetails
   * Upsert SpiritDetails
   */
  app.post('/upsertSpiritDetails', isLoggedIn, function(req, res, next) {
    upsertRecord(req, res, next, "SpiritDetails");
  });

  /**
   * GET /getSpiritDetails
   * Get SpiritDetails
   */
  app.get('/getSpiritDetails', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "SpiritDetails");
  });

  /**
   * GET /getSpiritDetailsRecord
   * Get SpiritDetails Record
   */
  app.post('/getSpiritDetailsRecord', isLoggedIn, function(req, res, next) {
    getRecordById(req, res, next, "SpiritDetails");
  });      
}
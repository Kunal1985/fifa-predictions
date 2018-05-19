import {isLoggedIn, upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertFinishedGoodsDetails
   * Upsert FinishedGoodsDetails
   */
  app.post('/upsertFinishedGoodsDetails', isLoggedIn, function(req, res, next) {
    upsertRecord(req, res, next, "FinishedGoodsDetails");
  });

  /**
   * GET /getFinishedGoodsDetails
   * Get FinishedGoodsDetails
   */
  app.get('/getFinishedGoodsDetails', isLoggedIn, function(req, res, next) {
    getAllRecords(req, res, next, "FinishedGoodsDetails");
  });

  /**
   * GET /getFinishedGoodsDetailsRecord
   * Get FinishedGoodsDetails Record
   */
  app.post('/getFinishedGoodsDetailsRecord', isLoggedIn, function(req, res, next) {
    getRecordById(req, res, next, "FinishedGoodsDetails");
  });      
}
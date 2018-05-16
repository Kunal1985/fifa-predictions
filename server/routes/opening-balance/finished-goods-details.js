import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertFinishedGoodsDetails
   * Upsert FinishedGoodsDetails
   */
  app.post('/upsertFinishedGoodsDetails', function(req, res, next) {
    upsertRecord(req, res, next, "FinishedGoodsDetails");
  });

  /**
   * GET /getFinishedGoodsDetails
   * Get FinishedGoodsDetails
   */
  app.get('/getFinishedGoodsDetails', function(req, res, next) {
    getAllRecords(req, res, next, "FinishedGoodsDetails");
  });

  /**
   * GET /getFinishedGoodsDetailsRecord
   * Get FinishedGoodsDetails Record
   */
  app.post('/getFinishedGoodsDetailsRecord', function(req, res, next) {
    getRecordById(req, res, next, "FinishedGoodsDetails");
  });      
}
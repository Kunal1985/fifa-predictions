import {upsertRecord, getAllRecords, getRecordById} from '../../utils/functions';

module.exports = function(app) {
  /**
   * POST /upsertLabelledDetails
   * Upsert LabelledDetails
   */
  app.post('/upsertLabelledDetails', function(req, res, next) {
    upsertRecord(req, res, next, "LabelledDetails");
  });

  /**
   * GET /getLabelledDetails
   * Get LabelledDetails
   */
  app.get('/getLabelledDetails', function(req, res, next) {
    getAllRecords(req, res, next, "LabelledDetails");
  });

  /**
   * GET /getLabelledDetailsRecord
   * Get LabelledDetails Record
   */
  app.post('/getLabelledDetailsRecord', function(req, res, next) {
    getRecordById(req, res, next, "LabelledDetails");
  });      
}
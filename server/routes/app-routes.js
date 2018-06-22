import { isLoggedIn, checkTampering, upsertRecord, getAllRecords, getRecordById } from '../utils/functions';

module.exports = function (app) {

  /**
  * GET /getAllPredictions
  * API to get All Predictions
  */
  app.get('/getAllPredictions', isLoggedIn, checkTampering, function (req, res, next) {
    getAllRecords(req, res, next, "Predictions");
  });

  /**
  * GET /getAllResults
  * API to get All Results
  */
  app.get('/getAllResults', isLoggedIn, checkTampering, function (req, res, next) {
    getAllRecords(req, res, next, "Results");
  });

  /**
  * POST /upsertPredictions
  * API to upsert Predictions
  */
  app.post('/upsertPredictions', isLoggedIn, checkTampering, function (req, res, next) {
    upsertRecord(req, res, next, "Predictions");
  });

  /**
  * POST /upsertResults
  * API to upsert Results
  */
  app.post('/upsertResults', isLoggedIn, checkTampering, function (req, res, next) {
    upsertRecord(req, res, next, "Results");
  });

}
import {isLoggedIn, getRecordByUserName} from '../../utils/functions';

module.exports = function(app) {
    /**
     * GET /getWineryUserRecord
     * Get WineryUser Record
     */
    app.post('/getCurrentWineryUserRecord', isLoggedIn, function(req, res, next) {
        getRecordByUserName(req, res, next, "WineryUser");
    });
}
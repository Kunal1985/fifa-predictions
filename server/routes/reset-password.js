import {isLoggedIn, changePassword} from '../utils/functions';

module.exports = function(app) {
    /**
     * GET /getWineryUserRecord
     * Get WineryUser Record
     */
    app.post('/resetPassword', isLoggedIn, function(req, res, next) {
        changePassword(req, res, next, "user");
    });
}
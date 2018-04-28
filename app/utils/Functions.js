import rp from 'request-promise';
exports.getAllRecords = function(currObj, modelName) {
    console.log("getAllRecords for", modelName);
    let options = {
        method: 'GET',
        uri: 'http://localhost:3000/get' + modelName,
        json: true
    };
    rp(options)
        .then(function(body) {
            console.log("getAllRecords Response for", modelName, body.length, body);
            if (!currObj.state || currObj.state.lastCount != body.length)
                currObj.setState({
                    records: body,
                    lastCount: body.length
                });
        })
        .catch(function(err) {
            console.log("Error", err);
        });
}
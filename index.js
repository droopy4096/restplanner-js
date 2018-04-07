/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloGET = (req, res) => {
  res.send('Hello World!');
};

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.sampleSchedule = (req, res) => {
  var request = require('request');
  var my_url='https://restplanner-200203.appspot.com/schedule/monthly?year=2010&month=2&day=1&years=15&step=1';
  var req_options={url: my_url, json: true }
  function req_callback (error, response, data){
        if(!error && response.statusCode === 200 ){
          res.send(data.schedule.end_date);
        } else {
          res.send('Something terrible happened '+error)
        }
  }
  request( req_options, req_callback );
};

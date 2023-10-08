const express = require("express");
const router = express.Router();

// const CONTROLLER = require('../controllers/export_controller');
const {SessionsClient} = require("@google-cloud/dialogflow-cx");

router.post("/dialogflow", async (req, res) => {
  const client = new SessionsClient();

 console.log(req.body);

 
  // let tag = req.body.fulfillmentInfo.tag;

  // console.log('A new request came...');
  // console.log(tag);

  // if (tag === 'sampleResponse') {
  //     let responseData = CONTROLLER.sampleResponse.handleSampleResponse(req);
  //     res.send(responseData);
  // } else {
  //     res.send(
  //         CONTROLLER.util.formatResponse(
  //             [
  //                 'This is from the webhook.',
  //                 'There is no tag set for this request.'
  //             ]
  //         )
  //     );
  // }
});

module.exports = router;

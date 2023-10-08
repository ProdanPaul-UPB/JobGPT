const express = require("express");
const router = express.Router();

// const CONTROLLER = require('../controllers/export_controller');
const {SessionsClient} = require("@google-cloud/dialogflow-cx");

router.post("/dialogflow", async (req, res) => {
  const client = new SessionsClient();

  const sessionPath = client.projectLocationAgentSessionPath(
    "dialogtests",
    "europe-west2",
    "6c8a7e5b-4d00-47aa-b53f-1e26a8f41c70",
    "asdada"
  );
  const request = {
    session: sessionPath,
    queryInput: {
      text: { text: "Hello!" },
    },
  };

  const response = await client.detectIntent(request);

  console.log(response);
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

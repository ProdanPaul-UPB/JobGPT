import express from "express";
import handleSampleResponse from "../controllers/sample_controller.js";
import { formatResponseForDialogflow } from "../controllers/util.js";
const router = express.Router();

router.post("/dialogflow", async (req, res) => {
  let tag = req.body.fulfillmentInfo.tag;

  console.log(JSON.stringify(req.body));

  console.log("A new request came...");
  console.log(tag);

  if (tag === "sampleResponse") {
    let responseData = handleSampleResponse(req);
    res.send(responseData);
  } else {
    res.send(
      formatResponseForDialogflow(
        [`Finding jobs for a ${req.body.sessionInfo.parameters.education} with a salary of ${req.body.sessionInfo.parameters.salary.amount} (coming from webhook)`],
        "",
        "",
        ""
      )
    );
  }
});

export default router;

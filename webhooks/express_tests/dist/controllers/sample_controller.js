import { formatResponseForDialogflow } from "./util.js";
const handleSampleResponse = (req) => {
    console.log(req.body);
    return formatResponseForDialogflow(["This is a sample response from webhook.", "Another sample response."], "", "", "");
};
export default handleSampleResponse;
//# sourceMappingURL=sample_controller.js.map
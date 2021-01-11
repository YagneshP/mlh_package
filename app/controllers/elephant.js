const { default: Axios } = require("axios");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res)=>{
const elephant = await Axios.get("https://elephant-api.herokuapp.com/elephants/random");
return res.render("elephant/index", {
	elephant:elephant.data[0]
});
});


module.exports = router;
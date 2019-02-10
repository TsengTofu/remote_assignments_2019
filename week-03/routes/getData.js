var express = require('express');
var router = express.Router();


router.get("/", (req, res) => {
    var number = req.query.number;
    var N = Number(number);
    var result = total(N);
    var testNumber = isNaN(number);
    var hint = "Lack of Parameter";
    console.log(N);

    function total() {
        var sum = 0;
        for (var i = 0; i <= N; i++) {
            sum += i;
        }
        return sum;
    }
    // console.log(result);

    if (testNumber === false) {
        total(N);
        res.render("getData.pug", { result });
    } else if (number === "xyz") {
        res.send("<h1>Wrong Parameter</h1>");
    } else return res.render("getData.pug",{ hint })

})


router.post("/getData", (req, res) => {
    console.dir(req.body);
    res.render("getData.pug", { hint: "Lack of Parameter" });
})





module.exports = router;
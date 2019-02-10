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




// router.get("/", (req, res) => {
//     // var xyz = req.param.xyz;
//     var number = req.query.number;
//     var N = Number(number);
//     var result =total(N);
//     console.log(N);
//     function total() {
//         // your code here, for-loop method preferred
//         var sum = 0;
//         for (var i = 0; i <= N; i++) {
//             sum += i;
//         }
//         return sum;
//     }
//     // console.log(result);
//     res.render("getData.pug",{result});

//     if (number === "xyz") {
//         res.send("<h1>Wrong Parameter</h1>");
//         //This line is no-working
//         //我一定要用這樣的描述嗎？假設除了xyz/後面沒有東西，剩下的就執行function
//     } else return res.render("getData.pug")

// })







module.exports = router;
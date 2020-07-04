const express = require('express');
const router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', function (req, res, next) {
  res.render('login', {
    "failed": false,
  });
});

router.post('/authenticate', async function (req, res, next) {
  let txtUserName = req.body.username;
  let txtPassword = req.body.password;

  let result = await req.ircClient.authorise({ "username": txtUserName, "password": txtPassword })

  res.render('login', {
    "failed": result,
  });

});


module.exports = router;

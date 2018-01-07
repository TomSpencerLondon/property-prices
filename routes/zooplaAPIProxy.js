var express = require('express');
var router = express.Router();
const apiPropertySearch = require('../scripts/apiPropertySearch');

router.get('/propertySearch', function(request, response, next) {
  apiPropertySearch.propertySearch(request.query, response);
});

module.exports = router;

var _ = require('lodash')
var notamKeywords = ['RWY', 'TWY', 'APRON', 'AD', 'OBST', 'NAV', 'COM', 'SVC', 'AIRSPACE', 'ODP', 'SID', 'STAR', 'CHART', 'DATA', 'IAP', 'VFP', 'ROUTE', 'SPECIAL', 'SECURITY']

var tests = [

  function (str) {
    return str.startsWith("!") ? true : false
  },

  function (str) {
    return str.length < 21 ? false : true
  },

  function (str) {
    return str.charAt(4) === " " ? true : false
  },

  function (str) {
    var result = false
    notamKeywords.forEach(function(kw){
      if ( str.includes(" " + kw + " ") ) {
        result = true
      }
    })
    return result
  },

]

function isNotam(str){
  var testResults = _.map(tests,function (test) {
    return test(str)
  })

  if ( testResults.includes(false) ) {
    return false
  }
  return true
}

module.exports = isNotam


/** Criteria
*
* begins with !
* accountability
* location identifier
* keyword
*
*

*/

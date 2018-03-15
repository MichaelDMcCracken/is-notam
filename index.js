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

  // check date + time


  function (str) {
    var result = false
    var newStr = ""

    if (str.endsWith("-PERM")) {
      newStr = str.substring(str.length-15, str.length - 5)

    } else if (newStr.substring(str.length-4,str.length-1).includes("ST")) {
      newStr = newStr.substring(str.length-14, str.length-4)

    } else {
      newStr = newStr.substring(str.length-22, str.length-1)
      var strArr = newStr.split("-")
      strArr.forEach( function(time) {
        var re = new RegExp('[0-9]{10}')
        if (re.test(time) == true) {
          result = true
        } else {
          result = false
        }

      })
    }
    return result
  }


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

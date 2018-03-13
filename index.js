function isNotam(str){
  if ( str.startsWith("!") ) {
    return true
  }
  return false
}

module.exports = isNotam

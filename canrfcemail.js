// Filename: canrfcemail.js
// Timestamp: 2014.04.20-19:04:23 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var isrfcemail = ((typeof module === 'object') ? module : {}).exports = function (email) {  
  return /^[^ ].*@.*[^ ]$/.test(email);
};

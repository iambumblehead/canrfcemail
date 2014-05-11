// Filename: canrfcemail.js
// Timestamp: 2014.05.11-16:34:11 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var canrfcemail = ((typeof module === 'object') ? module : {}).exports = function (email) {  
  return /^[^ ].*@.*[^ ]$/.test(email);
};

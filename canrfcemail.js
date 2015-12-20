// Filename: canrfcemail.js
// Timestamp: 2015.12.19-17:40:46 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)  

var canrfcemail = module.exports = function (email) {  
  return /^[^ ].*@.*[^ ]$/.test(email);
};

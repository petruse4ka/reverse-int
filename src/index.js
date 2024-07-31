nmodule.exports = function reverse (n) {
  let rev = ''; 
  let def = String(n)   
  if (n > 0) {
  for (let i = 0; i < def.length; i++) {
    rev = def[i] + rev;
  }} else {
    for (let i = 1; i < def.length; i++) {
        rev = def[i] + rev;
      }}
  
  return Number(rev);
}

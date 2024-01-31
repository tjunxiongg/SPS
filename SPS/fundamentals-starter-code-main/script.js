var lifespan = function (Hours , Life , Days)
{
  return Hours * Life * Days / 24 ;
}
var main = function (input) {
  var Hours = input;
  var Days = 365
  var Life = 82;
  var life = lifespan(input,Life , Days) ;
  var myOutputValue = `${lifespan}`;
  return myOutputValue;
};

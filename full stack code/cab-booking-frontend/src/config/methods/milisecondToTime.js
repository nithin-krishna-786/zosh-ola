export function convertMillisecondsToMinutesAndHours(milliseconds) {
    var seconds = Math.floor(milliseconds / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
  
    var remainingSeconds = seconds % 60;
    var remainingMinutes = minutes % 60;
  
  var output = ""
  if(hours>0){
    output+=hours + "h "
  }
  if(remainingMinutes>0){
    output+=remainingMinutes+"min"
  }
  if(remainingSeconds){
    output+=remainingSeconds+'sec'
  }
  return output;
  }
  

(function () {

  const $current_time = document.querySelectorAll(".current_time");

  function checkMinutes (date) {
    if(date.getMinutes() < 10){
      return `0${date.getMinutes()}`;
    } else {
      return date.getMinutes();
    } 
  }

  setInterval(() => {
    let date = new Date();
    for(let i = 0; i < $current_time.length; i++){
      $current_time[i].innerHTML = `The current time in Belgium is ${date.getHours()}:${checkMinutes(date)}`;
    }
  },1000);


}) ();
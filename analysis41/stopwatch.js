function StopWatchCreate() {
  return new Date().getTime();
}

var start = StopWatchCreate();

function elpasedTime(start){
  return new Date().getTime() -start;
}


console.log(elpasedTime(start))
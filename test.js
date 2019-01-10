function FilterProducts () {
    console.log(window.activeInterval);
}

if (window.activeInterval == 0) {
  window.filterInterval = window.setInterval(FilterProducts, 1000);
  window.activeInterval = 1;
} else if (window.activeInterval == 1){
  window.clearInterval(window.filterInterval);
  window.activeInterval = 0;
}
console.log('here', window.activeInterval);

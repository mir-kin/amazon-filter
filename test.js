function FilterProducts () {
    for (let element of document.querySelectorAll('.sx-price-large')) {
        element.closest('.s-result-item').style.display = 'none';
    }
    console.log('running...');
}

console.log('initial', window.activeInterval);

if (window.activeInterval == 0 || window.activeInterval == undefined) {
  window.filterInterval = window.setInterval(FilterProducts, 1000);
  window.activeInterval = 1;
} else if (window.activeInterval == 1){
  window.clearInterval(window.filterInterval);
  window.activeInterval = 0;
}
console.log('here', window.activeInterval);

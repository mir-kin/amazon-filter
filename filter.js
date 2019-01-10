let $toggleSwitch = document.querySelector('.js-toggle-switch');
let $statusLabel = document.querySelector('.js-status');
var interval;

function FilterProducts () {
    console.log('filter');
    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {

});
};

function ToggleInterval () {
    if (!interval) {
      interval = window.setInterval(FilterProducts, 1000);
    } else {
      window.clearInterval(interval);
      interval = null;
    }
}

$toggleSwitch.addEventListener('click', function(event) {
  ToggleInterval();
  if ($toggleSwitch.checked) {
    $statusLabel.innerHTML = 'Disable';
  } else {
    $statusLabel.innerHTML = 'Enable';
  }
});

//for (let element of document.querySelectorAll('.sx-price-large')) {
  //  element.closest('.s-result-item').style.display = 'none';
//}"});

/**
*file to register SW, so there's no need to repeat code for the 2 pages
*/

document.addEventListener('DOMContentLoaded', (event) => {
	  registerServiceWorker();
});

/******
*Register service worker
*/
registerServiceWorker = function(){
  if(!navigator.serviceWorker) return;

  navigator.serviceWorker.register('/sw.js').then(function(){
    console.log('registration worked!');
  }).catch(function(){
    console.log('registration failed!');
  });
}
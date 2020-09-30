const el = document.querySelector('#suggestions');
const btnDiv = document.querySelector('.buttons');
const langDiv = document.querySelector('.lang');
const appContainer = document.querySelector('.app-container');

const showSuggestions = () => {
  el.setAttribute('style', 'display: block');
  hideButtons();
}
const hideSuggestions = () => {
  el.setAttribute('style', 'display: none');
  showButtons();
}

const hideButtons = () => {  
  btnDiv.setAttribute('style', 'display: none');  
  langDiv.setAttribute('style', 'display: none')
}
const showButtons = () => {  
  btnDiv.setAttribute('style', 'display: block');  
  langDiv.setAttribute('style', 'display: block')
}

const showApps = () => {
  appContainer.style.display = 'block';
}

const hideApps = () => {
  alert("got it!")
//  if ( !appContainer.classList.contains('hidden') ) {
//   appContainer.classList.add('hidden')
//  }
}

window.addEventListener('mouseup', (event) => {
  if (event.target.classList.contains('fas') ) {
    showApps();
  }
  // console.log(appContainer != event.target, appContainer != event.target.parentNode);
  if( !appContainer.contains(event.target.parentNode)) {
    appContainer.style.display = 'none';
  } 
});  
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
  appContainer.classList.toggle('hidden')
}
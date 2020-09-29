const el = document.querySelector('#suggestions');
const btnDiv = document.querySelector('.buttons');
const langDiv = document.querySelector('.lang');

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
const suggestBox = document.querySelector('#suggestions');
const btnDiv = document.querySelector('.buttons');
const langDiv = document.querySelector('.lang');
const appBtn = document.querySelector('#appBtn');
const appContainer = document.querySelector('.app-container');
const searchInput = document.querySelector('#searchInput');

const showSuggestions = () => {
  suggestBox.setAttribute('style', 'display: block');
  hideButtons();
}
const hideSuggestions = () => {
  suggestBox.setAttribute('style', 'display: none');
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
  appContainer.classList.remove('hidden');
}
const hideApps = () => { 
  appContainer.classList.add('hidden'); 
}

appBtn.addEventListener('click', (event) => {
  if ( appContainer.classList.contains('hidden') ) {
    showApps();
  } else {
    hideApps();
  }
})

window.addEventListener('mouseup', (event) => {  
  if (event.target.classList.contains('fas') || event.target.classList.contains('suggestions')) {    
    return;
  }
  if( !appContainer.contains(event.target.parentNode)) {    
    if(document.activeElement.tagName === 'BODY') {
      hideSuggestions();
    }
    
    hideApps();
  } 
});  

const changeSearch = (e) => {
  searchInput.value = e
}
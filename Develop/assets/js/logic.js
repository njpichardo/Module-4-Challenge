// Toggle light/dark mode
const toggleMode = () => {
  const body = document.body;
  const currentMode = localStorage.getItem('mode') || 'light';
  const newMode = currentMode === 'light' ? 'dark' : 'light';
  body.classList.remove(currentMode);
  body.classList.add(newMode);
  localStorage.setItem('mode', newMode);
};

// Set the initial mode based on local storage
const setInitialMode = () => {
  const savedMode = localStorage.getItem('mode') || 'light';
  document.body.classList.add(savedMode);
};

document.querySelector('#mode-toggle').addEventListener('click', toggleMode);

// Call the function to set the initial mode when the page loads
setInitialMode();

// Read from local storage
const readLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

// Store data to local storage
const storeLocalStorage = (key, data) => {
  const existingData = readLocalStorage(key);
  existingData.push(data);
  localStorage.setItem(key, JSON.stringify(existingData));
};

// Redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
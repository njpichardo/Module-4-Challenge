// Select the form element
const formElement = document.querySelector('form');

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;
  const errorElement = document.querySelector('#error');

  // Check if any of the fields are empty
  if (!username || !title || !content) {
    errorElement.textContent = 'Please complete the form.';
    return;
  }

  // Clear the error message if all fields are filled
  errorElement.textContent = '';

  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  blogPosts.push({ username, title, content });
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

  redirectPage('blog.html');
}

// Add event listener to the form on submit
formElement.addEventListener('submit', handleFormSubmit);
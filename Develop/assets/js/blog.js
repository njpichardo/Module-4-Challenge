// Select the main element and back button element
const mainElement = document.querySelector('main');
const backButton = document.querySelector('#back-button');

// Build an element and append it to the DOM
function buildElement(tag, content, parent) {
  const element = document.createElement(tag);
  element.textContent = content;
  parent.appendChild(element);
}

// Handle the case where there are no blog posts to display
function noPosts() {
  buildElement('p', 'No blog posts to display.', mainElement);
}

// Render the list of blog posts if they exist
function renderBlogList() {
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  if (blogPosts.length === 0) {
    noPosts();
  } else {
    blogPosts.forEach(post => {
      const article = document.createElement('article');
      article.classList.add('blog-post');
      buildElement('h2', post.title, article);
      buildElement('p', `By: ${post.username}`, article);
      buildElement('p', post.content, article);
      mainElement.appendChild(article);
    });
  }
}

// Call the renderBlogList function
renderBlogList();

// Redirect to the home page when the back button is clicked
backButton.addEventListener('click', () => {
  redirectPage('index.html');
});
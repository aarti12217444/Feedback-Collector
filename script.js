const feedbackForm = document.getElementById('feedbackForm');
const feedbackList = document.getElementById('feedbackList');

let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

function renderFeedback() {
  feedbackList.innerHTML = '';

  if (feedbacks.length === 0) {
    feedbackList.innerHTML = '<p>No feedback yet.</p>';
    return;
  }

  feedbacks.forEach((fb, index) => {
    const card = document.createElement('div');
    card.className = 'feedback-card';

    card.innerHTML = `
      <h3>${fb.name} ${fb.rating}</h3>
      <p>${fb.comment}</p>
    `;

    feedbackList.appendChild(card);
  });
}

feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const rating = document.getElementById('rating').value;
  const comment = document.getElementById('comment').value.trim();

  if (!name || !rating || !comment) {
    alert('Please fill in all fields.');
    return;
  }

  const newFeedback = { name, rating, comment };
  feedbacks.push(newFeedback);

  localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  renderFeedback();

  feedbackForm.reset();
});

// Initial render
renderFeedback();

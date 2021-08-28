$(document).ready(function() {
  renderSkills($(".skills-programming"), 5);
  renderSkills($(".skills-design"), 3);
  renderSkills($(".skills-languages"), 2);
});

function generateRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function ratingHtml() {
  const max = 5;
  const rating = generateRandomInt(max);
  const remaining = max - rating;

  let activeHtml = '';
  for (let i = 0; i < rating; i++) {
    activeHtml += '<span class="active"></span>';
  }

  let remainingHtml = '';
  for (let i = 0; i < remaining; i++) {
    remainingHtml += '<span></span>';
  }

  return '<div class="rating">' + activeHtml + remainingHtml + '</div>';
}

function renderSkills(element, count = 0){
  for (let i = 0; i < count; i++) {
    const rating = ratingHtml();
    element.append(`
    <div class="skill-item">
      <p>Skill / Skill</p>
      ${rating}
    </div>
    `);
  }
}
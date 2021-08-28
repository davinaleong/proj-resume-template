$(document).ready(function() {
  renderSkills($(".skills-programming"), 5);
  renderSkills($(".skills-design"), 3);
  renderSkills($(".skills-languages"), 2);

  renderExperienceItems(5);
  renderEducationItems(4);
});

function generateRandomInt(min = 0, max = 10) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function ratingHtml() {
  const max = 5;
  const rating = generateRandomInt(0, max);
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

function renderExperienceItemDetails(count = 0) {
  let html = '';

  for(let i = 0; i < count; i++) {
    html += '<li>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</li>';
  }

  return html;
}

function renderExperienceItems(count = 0) {
  for (let i = 0; i < count; i++) {
    const detailCount = generateRandomInt(1, 5);
    const detailsHtml = renderExperienceItemDetails(detailCount);

    $(".experience").append(`
    <div class="experience-item">
      <div class="title">
        <div class="period">Start &ndash;<br>End</div>
        <div class="text">
          <h3 class="h6">Company Name</h3>
          <p>Position</p>
        </div>
      </div><!-- /.title -->
      <ul>${detailsHtml}</ul>
    </div><!-- /.experience-item -->
    `);
  }
}

function renderEducationItems(count = 0) {
  for (let i = 0; i < count; i++) {
    $(".education").append(`
    <div class="education-item">
      <div class="title">
        <div class="period">Start &ndash;<br>End</div>
        <div class="text">
          <h3 class="h6">Institution</h3>
          <p>Qualification</p>
        </div>
      </div><!-- /.title -->
    </div><!-- /.education-item -->
    `);
  }
}
$(document).ready(function() {
  renderSkills($(".skills-programming"), counts.skills.programming);
  renderSkills($(".skills-design"), counts.skills.design);
  renderSkills($(".skills-languages"), counts.skills.languages);

  renderHobbies(counts.hobbies);

  renderExperienceItems(counts.experience.items);
  renderEducationItems(counts.education);
});

function generateRandomInt(min = 0, max = 10) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function ratingHtml() {
  const max = counts.rating.max;
  const rating = generateRandomInt(counts.rating.min, max);
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

function renderHobbies(count = 0) {
  let itemHtml = '';

  for (let i = 0; i < count; i++) {
    itemHtml += '<li>Lorem ipsum</li>';
  }

  $(".hobbies").append(`<ul>${itemHtml}</ul>`);
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
    const detailCount = generateRandomInt(counts.experience.details.min, counts.experience.details.max);
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
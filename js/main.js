$(document).ready(function() {
  renderSkills(
    $(".skills-programming"),
    settings.skills.programming.items,
    settings.skills.programming.text
  );
  renderSkills(
    $(".skills-design"),
    settings.skills.design.items,
    settings.skills.design.text
  );
  renderSkills(
    $(".skills-languages"),
    settings.skills.languages.items,
    settings.skills.languages.text,
  );

  renderHobbies(
    settings.hobbies.items,
    settings.hobbies.text
  );

  renderExperienceItems(settings.experience.items);
  renderEducationItems(settings.education.items);
});

function generateRandomInt(min = 0, max = 10) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function ratingHtml() {
  const max = settings.rating.max;
  const rating = generateRandomInt(settings.rating.min, max);
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

function renderSkills(element, count = 0, text = ''){
  for (let i = 0; i < count; i++) {
    const rating = ratingHtml();
    element.append(`
    <div class="skill-item">
      <p>${text}</p>
      ${rating}
    </div>
    `);
  }
}

function renderHobbies(count = 0, text = '') {
  let itemHtml = '';

  for (let i = 0; i < count; i++) {
    itemHtml += `<li>${text}</li>`;
  }

  $(".hobbies").append(`<ul>${itemHtml}</ul>`);
}

function renderExperienceItemDetails(count = 0) {
  let html = '';

  for(let i = 0; i < count; i++) {
    html += `<li>${settings.experience.details.text}</li>`;
  }

  return html;
}

function renderExperienceItems(count = 0) {
  for (let i = 0; i < count; i++) {
    const detailCount = generateRandomInt(settings.experience.details.min, settings.experience.details.max);
    const detailsHtml = renderExperienceItemDetails(detailCount);
    const title = settings.experience.title;

    $(".experience").append(`
    <div class="experience-item">
      <div class="title">
        <div class="period">${title.start} &ndash;<br>${title.end}</div>
        <div class="text">
          <h3 class="h6">${title.name}</h3>
          <p>${title.subtitle}</p>
        </div>
      </div><!-- /.title -->
      <ul>${detailsHtml}</ul>
    </div><!-- /.experience-item -->
    `);
  }
}

function renderEducationItems(count = 0) {
  const title = settings.education.title;

  for (let i = 0; i < count; i++) {
    $(".education").append(`
    <div class="education-item">
      <div class="title">
        <div class="period">${title.start} &ndash;<br>${title.end}</div>
        <div class="text">
          <h3 class="h6">${title.name}</h3>
          <p>${title.subtitle}</p>
        </div>
      </div><!-- /.title -->
    </div><!-- /.education-item -->
    `);
  }
}
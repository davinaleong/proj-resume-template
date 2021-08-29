$(document).ready(function() {
  $(".alert p").html(settings.header.alert);

  $(".landing-content h1").text(settings.header.name);
  $(".landing-content h2").text(settings.header.position);
  $(".landing-content img").attr("src", settings.header.profilePic);

  renderContactDetails(settings.contact);

  renderHobbies(
    settings.hobbies.items,
    settings.hobbies.text
  );

  renderSkills();
  
  $(".description p").text(settings.description);

  renderExperienceItems(settings.experience.items);
  renderEducationItems(settings.education.items);
});

function generateRandomInt(min = 0, max = 10) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function renderContactDetails(contact = []) {
  let html = '';
  contact.forEach(function(item) {
    let textHtml = item.title;
    if (item.href) {
      const newTabHtml = item.newTab ? ' target="_blank"' : '';
      textHtml = `<a href="${item.href}"${newTabHtml}>${item.title}</a>`;
    }

    html += `<p>
      ${item.icon}
      ${textHtml}
    </p>`;
  });

  $(".contact").append(html);
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

function renderSkills() {
  let skillHtml = '';

  settings.skills.forEach(function(skill) {
    const skillItem = skillItemHtml(skill.items, skill.text);
    skillHtml += `
    <h3 class="h6">${skill.group}</h3>
    <div>${skillItem}</div>
    `;
  });

  $('.skills').append(skillHtml);
}

function skillItemHtml(count = 0, text = ''){
  let skillItemHtml = '';
  for (let i = 0; i < count; i++) {
    const rating = ratingHtml();
    skillItemHtml += `
    <div class="skill-item">
      <p>${text}</p>
      ${rating}
    </div>
    `;
  }
  return skillItemHtml;
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
// // Make projects selectable through tabs
// $('.project-button').on('click', () => {
//   const projectId = $(this).data('project-id');
//   console.log(projectId);
//   document.location.replace(`/workspace/${projectId}`);
// });

$('#project-list').sortable({
  items: 'li:not(.not-sortable)',
});

$('#tabs').tabs({collapsible: true, active: false}).addClass('ui-tabs-vertical ui-helper-clearfix');
$('#tabs li').removeClass('ui-corner-top').addClass('ui-corner-left');

// Make columns sortable
$('.column-container').sortable();

// Make cards sortable
$('.column')
  .sortable({
    connectWith: '.column',
    placeHolder: 'ui-state-highlight',
    items: 'li:not(.not-sortable)',
  })
  .disableSelection();

// Make cards toggleable
$('.card-toggle').accordion({collapsible: true, active: false});

$('#login-button').on('click', () => {
  window.location.replace('/workspace');
});

// Edit Project Name
$('.project-name').on('click', 'h3', function () {
  const projectName = $(this).text().trim();
  const textInput = $('<input>').attr('type', 'text').val(projectName);
  $(this).replaceWith(textInput);
  textInput.trigger('focus');
});

$('.project-name').on('blur', 'input', async function (event) {
  event.stopPropagation();
  const projectName = $(this).val().trim();
  const projectId = $(this).closest('.project-workspace').attr('id').replace('project-', '');

  const response = await fetch(`/api/projects/${projectId}`, {
    method: 'PUT',
    body: JSON.stringify({
      projectId,
      projectName,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    // alert(response.statusText);
  }

  const nameElement = $('<h3>').text(projectName);

  $(this).replaceWith(nameElement);
});

// Edit column name
$('.column-wrapper').on('click', 'h4', function () {
  const columnName = $(this).text().trim();
  const textInput = $('<input>').attr('type', 'text').val(columnName);
  $(this).replaceWith(textInput);
  textInput.trigger('focus');
});

$('.column-wrapper').on('blur', 'input', async function (event) {
  event.stopPropagation();
  const columnName = $(this).val().trim();
  const columnId = $(this).closest('.column-wrapper').attr('id').replace('column-', '');

  const response = await fetch(`/api/columns/${columnId}`, {
    method: 'PUT',
    body: JSON.stringify({
      columnId,
      columnName,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    // alert(response.statusText);
  }

  const nameElement = $('<h4>').text(columnName);

  $(this).replaceWith(nameElement);
});

// Edit card name
$('.ui-icon-pencil').on('click', 'i', function () {
  console.log('clicked');
  const cardNameEl = $(this).previous('h5');
  const cardName = $(cardNameEl).text().trim();
  const textInput = $('<input>').attr('type', 'text').val(cardName);
  $(cardNameEl).replaceWith(textInput);
  textInput.trigger('focus');
});

$('.card-toggle').on('blur', 'input', async function (event) {
  event.stopPropagation();
  const cardName = $(this).val().trim();
  const cardId = $(this).closest('.card-toggle').attr('id').replace('card-', '');

  const response = await fetch(`/api/cards/${cardId}`, {
    method: 'PUT',
    body: JSON.stringify({
      cardId,
      cardName,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    // alert(response.statusText);
  }

  const nameElement = $('<h5>')
    .html(``)
    .text(cardName)
    .addClass(
      'card-name ui-accordion-header ui-corner-top ui-accordion-header-collapsed ui-corner-all ui-state-default ui-accordion-icons'
    );

  $(this).replaceWith(nameElement);
});

// Edit card information

// Create new Project
$('#new-project-button').on('click', () => {
  const listTab = $('<li>');

  const nameLabel = $('<label>').text('Project Name').attr('for', 'new-project-name');
  const textInput = $('<input>').addClass('project-tab ui-tabs-anchor').attr('id', 'new-project-name');

  $(listTab).append(nameLabel, textInput);

  $('#new-project-button').replaceWith(listTab);
});

$('#project-list').on('blur', 'input', async () => {
  const projectName = $('#new-project-name').val().trim();
  console.log(projectName);
  const response = await fetch('api/projects', {
    method: 'POST',
    body: JSON.stringify({
      projectName,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  }
});

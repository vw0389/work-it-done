// Make projects selectable through tabs
$('.project-button').on('click', () => {
  const projectId = $(this).data('project-id');
  console.log(projectId);
  document.location.replace(`/workspace/${projectId}`);
});

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

$('#tabs').tabs({collapsible: true, active: false}).addClass('ui-tabs-vertical ui-helper-clearfix');
$('#tabs li').removeClass('ui-corner-top').addClass('ui-corner-left');
=
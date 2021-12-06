$('.column')
  .sortable({
    connectWith: '.column',
  })
  .disableSelection();

$('.column-container').sortable();

$('.card-toggle').accordion({collapsible: true, active: false});

$('.project-button').on('click', () => {
  const projectId = $(this).data('project-id');
  console.log(projectId);
  document.location.replace(`/workspace/${projectId}`);
});

$('#login-button').on('click', () => {
  window.location.replace('/workspace');
});

$('#tabs').tabs({collapsible: true, active: false}).addClass('ui-tabs-vertical ui-helper-clearfix');
$('#tabs li').removeClass('ui-corner-top').addClass('ui-corner-left');

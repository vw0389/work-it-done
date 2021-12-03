$('#column-1, #column-2')
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

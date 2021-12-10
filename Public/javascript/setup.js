$('.project-tab').draggable({
  items: 'li:not(.not-sortable)',
  revert: 'invalid',
});

$('#tabs')
  .tabs({collapsible: true, active: false, heightStyle: 'content'})
  .addClass('ui-tabs-vertical ui-helper-clearfix');
$('#tabs li').removeClass('ui-corner-top').addClass('ui-corner-left');

// // Make columns sortable
$('.column-wrapper').draggable({revert: 'invalid', containment: 'window'});

// Make cards sortable
$('.column').sortable({
  receive: updateCardColumn,
  connectWith: '.column',
  placeHolder: 'ui-state-highlight',
  items: 'li:not(.not-sortable)',
});
// .disableSelection();

// Make cards toggleable
$('.card-toggle').accordion({collapsible: true, active: false, heightStyle: 'content'});

$('#login-button').on('click', () => {
  window.location.replace('/workspace');
});

$('#trash').droppable({
  accept: '.column-wrapper .card .project-tab1',
  tolerance: 'touch',
  drop: () => {
    // Delete functionality
  },
  over: () => {
    $('#trash').addClass('trash-active');
  },
});

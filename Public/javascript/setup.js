//////// SETTING UP JQUERY UI ELEMENTS ////////

// Project tabs are draggable for deletion purposes
$('.project-tab').draggable({
  items: 'li:not(.not-sortable)',
  revert: 'invalid',
});

// Tab selection functionality - clicking tab opens the project view
$('#tabs')
  .tabs({collapsible: true, active: false, heightStyle: 'content'})
  .addClass('ui-tabs-vertical ui-helper-clearfix');
$('#tabs li').removeClass('ui-corner-top').addClass('ui-corner-left');

// Columns are draggable for deletion purposes
$('.column-wrapper').draggable({revert: 'invalid', helper: 'clone', appendTo: document.body, cursorAt: {left: 5}});

// Cards are sortable
$('.column').sortable({
  receive: updateCardColumn,
  connectWith: '.column',
  placeHolder: 'ui-state-highlight',
  items: 'li:not(.not-sortable)',
});
// .disableSelection();

// Cards are collapsable
$('.card-toggle').accordion({collapsible: true, active: false, heightStyle: 'content'});

// Trash element is droppable - received project tabs, columns, and cards
$('#trash').droppable({
  accept: '.column-wrapper .card .project-tab1',
  tolerance: 'touch',
  drop: () => {
    // TODO: Delete functionality
  },
  over: () => {
    $('#trash').addClass('trash-active');
  },
});

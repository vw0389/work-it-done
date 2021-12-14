//////// SETTING UP JQUERY UI ELEMENTS ////////

// Project tabs are draggable for deletion purposes
$('.project-tab').draggable({
  items: 'li:not(.not-sortable)',
  revert: 'invalid',
});

// Tab selection functionality - clicking tab opens the project view
$('#tabs')
  .tabs({
    collapsible: true,
    active: false,
    heightStyle: 'content',
  })
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

// Cards are collapsable
$('.card-toggle').accordion({collapsible: true, active: false, heightStyle: 'content'});

// Trash element is droppable - received project tabs, columns, and cards
$('.trash-drop').droppable({
  // accept: '.column-wrapper .card .project-tab',
  tolerance: 'pointer',
  drop: (event, ui) => {
    const item = $(ui.draggable);
    if (item.hasClass('project-tab')) {
      deleteProject(item);
    } else if (item.hasClass('column-wrapper')) {
      deleteColumn(item);
    } else if (item.hasClass('card')) {
      deleteCard(item);
    }
  },
  // over: (event, ui) => {
  //   $(ui.draggable).addClass('.trash-drop-active');
  // },
});

$('#login-button').on('click', () => {
  window.location.replace('/workspace');
});

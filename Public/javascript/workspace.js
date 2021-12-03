$('#column-1, #column-2')
  .sortable({
    connectWith: '.column',
  })
  .disableSelection();

$('.column-wrapper').sortable();

$('.card-toggle').accordion({collapsible: true, active: false});

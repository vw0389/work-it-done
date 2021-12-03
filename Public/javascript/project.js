$('#column-1, #column-2')
  .sortable({
    connectWith: '.column',
  })
  .disableSelection();

$('.card-toggle').accordion({collapsible: true, active: false});

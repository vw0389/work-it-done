$('#popup').dialog({
  autoOpen: false,
  close: () => {
    $(this).text('');
  },
});

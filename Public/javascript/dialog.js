$('#popup').dialog({
  autoOpen: false,
  close: () => {
    $(this).text('');
    document.location.reload();
  },
});

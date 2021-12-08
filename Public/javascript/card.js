// Edit card name
$('.ui-icon-pencil').on('click', 'i', function () {
  console.log('clicked');
  const cardNameEl = $(this).previous('h5');
  const cardName = $(cardNameEl).text().trim();
  const textInput = $('<input>').attr('type', 'text').val(cardName);
  $(cardNameEl).replaceWith(textInput);
  textInput.trigger('focus');
});

$('.card-toggle').on('blur', 'input', async function (event) {
  event.stopPropagation();
  const cardName = $(this).val().trim();
  const cardId = $(this).closest('.card-toggle').attr('id').replace('card-', '');

  const response = await fetch(`/api/cards/${cardId}`, {
    method: 'PUT',
    body: JSON.stringify({
      cardId,
      cardName,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    // alert(response.statusText);
  }

  const nameElement = $('<h5>')
    .html(``)
    .text(cardName)
    .addClass(
      'card-name ui-accordion-header ui-corner-top ui-accordion-header-collapsed ui-corner-all ui-state-default ui-accordion-icons'
    );

  $(this).replaceWith(nameElement);
});

// Edit card information

// Create new card
// Button activation
$('.add-card-button').on('click', event => {
  const columnId = $(event.target).attr('id');
  const textInput = $('<input>')
    .addClass()
    .attr({id: 'add-card-input', placeholder: 'Card Name', 'data-column-id': columnId});
  $(event.target).replaceWith(textInput);
  $('#add-card-input').trigger('focus');
});

// Enter name and send to database
$('.column-wrapper').on('blur', '#add-card-input', async event => {
  const cardName = $('#add-card-input').val().trim();
  const columnId = $('#add-card-input').attr('data-column-id');
  console.log(cardName, columnId);

  if (!cardName) {
    console.log('no card name');
    $('#new-column-name').attr('placeHolder', 'The card needs a name');
  } else {
    const response = await fetch('/api/cards', {
      method: 'POST',
      body: JSON.stringify({
        name: cardName,
        column_id: columnId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // document.location.reload();
    } else {
      console.log(response);
    }
  }
});

// Edit card name
$('.card-body').on('click', '.edit-card-button', event => {
  console.log(event.target);
  const nameEl = $(event.target).closest('.card-toggle').children('h5');
  const cardName = nameEl.text().trim();
  const nameInput = $('<input>').attr('class', 'card-name-input').addClass('card-name ').val(cardName);
  nameEl.replaceWith(nameInput);

  const textEl = $(event.target).siblings('.card-text');
  const cardText = textEl.text().trim();
  const textInput = $('<textarea>').attr('class', 'card-text-input').val(cardText);
  textEl.replaceWith(textInput);

  const editButton = $(event.target);
  const saveButton = $('<button>').text('Save Card').attr('id', 'card-save-button');
  editButton.replaceWith(saveButton);
  console.log(cardName, cardText);
});

$('.card-toggle').on('click', '#card-save-button', async function (event) {
  console.log(event.target);
  const cardName = $(event.target).closest('.card-toggle').children('.card-name-input').val().trim();
  const cardText = $(event.target).siblings('textarea').val().trim();
  const cardId = $(event.target).closest('.card-toggle').attr('id').replace('card-', '');

  console.log(cardName, cardText, cardId);

  const response = await fetch(`/api/cards/`, {
    method: 'PUT',
    body: JSON.stringify({
      id: cardId,
      name: cardName,
      text: cardText,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    // document.location.reload();
  } else {
    console.log(response.statusText);
  }
});

// Change card column
const updateCardColumn = async (event, ui) => {
  const cardId = $(ui.item[0]).children('.card-toggle').attr('id').replace('card-', '');
  const columnId = $(ui.item[0]).closest('.column-wrapper').attr('id').replace('column-', '');
  console.log(cardId, columnId, ui);

  const response = await fetch(`/api/cards/`, {
    method: 'PUT',
    body: JSON.stringify({
      id: cardId,
      column_id: columnId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    // document.location.replace('/workspace');
  } else {
    console.log(response.statusText);
  }
};

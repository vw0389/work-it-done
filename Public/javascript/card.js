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
    $('#new-column-name').attr('placeHolder', 'The column needs a name');
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
      document.location.reload();
    } else {
      console.log(response);
    }
  }
});

// // Edit column name
// $('.column-wrapper').on('click', 'h4', function () {
//   const columnName = $(this).text().trim();
//   const textInput = $('<input>').attr({type: 'text', id: 'column-name-edit'}).val(columnName);
//   $(this).replaceWith(textInput);
//   textInput.trigger('focus');
// });

// $('.column-wrapper').on('blur', '#column-name-edit', async function (event) {
//   event.stopPropagation();
//   const columnName = $(this).val().trim();
//   const columnId = $(this).closest('.column-wrapper').attr('id').replace('column-', '');

//   console.log(columnName, columnId);
//   const response = await fetch(`/api/columns/${columnId}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       id: columnId,
//       name: columnName,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (response.ok) {
//     document.location.reload();
//   } else {
//     alert(response.statusText);
//   }

//   const nameElement = $('<h4>').text(columnName);

//   $(this).replaceWith(nameElement);
// });

// Create new column
// Button activation
$('.new-column-button').on('click', () => {
  console.log('clicked');

  const textInput = $('<input>').addClass().attr('id', 'new-column-name').attr('placeholder', 'Column Name');

  $('.new-column-button').replaceWith(textInput);
  $('#new-column-name').trigger('focus');
});

// Enter name and send to database
$('#new-column-name').on('blur', 'input', async () => {
  const projectName = $('#new-column-name').val().trim();
  console.log(projectName);

  if (!projectName) {
    document.location.reload();
  } else {
    const response = await fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify({
        name: projectName,
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

// Edit column name
$('.column-wrapper').on('click', 'h4', function () {
  const columnName = $(this).text().trim();
  const textInput = $('<input>').attr('type', 'text').val(columnName);
  $(this).replaceWith(textInput);
  textInput.trigger('focus');
});

// $('.column-wrapper').on('blur', 'input', async function (event) {
//   event.stopPropagation();
//   const columnName = $(this).val().trim();
//   const columnId = $(this).closest('.column-wrapper').attr('id').replaceWith('column-', '');

//   const response = await fetch(`/api/columns/${columnId}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       columnId,
//       columnName,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (response.ok) {
//     document.location.reload();
//   } else {
//     // alert(response.statusText);
//   }

//   const nameElement = $('<h4>').text(columnName);

//   $(this).replaceWith(nameElement);
// });

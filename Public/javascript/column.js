// Create new column
// Button activation
$('.new-column-column').on('click', 'button', event => {
  const projectId = $(event.target).attr('id').replace('column-project-', '');
  const textInput = $('<input>')
    .addClass()
    .attr({id: 'new-column-name', placeholder: 'Column Name', 'data-project-id': projectId});

  $(event.target).replaceWith(textInput);
  $('#new-column-name').trigger('focus');
});

// Enter name and send to database
$('.new-column-column').on('blur', 'input', async event => {
  const columnName = $('#new-column-name').val().trim();
  const projectId = $('#new-column-name').attr('data-project-id');
  console.log(columnName, projectId);

  if (!columnName) {
    $('#new-column-name').attr('placeHolder', 'The column needs a name');
  } else {
    const response = await fetch('/api/columns', {
      method: 'POST',
      body: JSON.stringify({
        name: columnName,
        project_id: projectId,
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

// Edit column name
$('.column-wrapper').on('click', 'h4', function () {
  const columnName = $(this).text().trim();
  const textInput = $('<input>').attr({type: 'text', id: 'column-name-edit'}).val(columnName);
  $(this).replaceWith(textInput);
  textInput.trigger('focus');
});

$('.column-wrapper').on('blur', '#column-name-edit', async function (event) {
  event.stopPropagation();
  const columnName = $(this).val().trim();
  const columnId = $(this).closest('.column-wrapper').attr('id').replace('column-', '');

  console.log(columnName, columnId);
  const response = await fetch(`/api/columns/${columnId}`, {
    method: 'PUT',
    body: JSON.stringify({
      id: columnId,
      name: columnName,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    // document.location.reload();
  } else {
    alert(response.statusText);
  }

  const nameElement = $('<h4>').text(columnName);

  $(this).replaceWith(nameElement);
});

const deleteColumn = async column => {
  const columnId = column.attr('id').replace('column-', '');
  const response = await fetch(`/api/columns/${columnId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.reload();
  } else {
    console.log(response.statusText);
  }
};

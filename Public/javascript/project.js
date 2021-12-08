// Create new Project
// Button activation
$('#new-project-button').on('click', () => {
  const textInput = $('<input>')
    .addClass('project-tab ui-tabs-anchor')
    .attr('id', 'new-project-name')
    .attr('placeholder', 'Project Name');

  $('#new-project-button').replaceWith(textInput);
  $('#new-project-name').trigger('focus');
});

// Enter name and send to database
$('#new-project-tab').on('blur', '#new-project-name', async event => {
  // event.stopPropagation();
  console.log('new project');
  const projectName = $('#new-project-name').val().trim();

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

// Edit Project Name
$('.project-name').on('click', 'h3', function () {
  const projectName = $(this).text().trim();
  const textInput = $('<input>')
    .attr('type', 'text')
    .attr('id', 'edit-class-name')
    .addClass('project-name')
    .val(projectName);
  $(this).replaceWith(textInput);
  textInput.trigger('focus');
});

$('.project-name').on('blur', '#edit-class-name', async function () {
  const projectName = $(this).val().trim();

  if (!projectName) {
    $('#edit-class-name').attr('placeHolder', 'The project needs a name');
  } else {
    const projectId = $(this).closest('.project-workspace').attr('id').replace('project-', '');

    console.log(projectName, projectId);
    const response = await fetch(`/api/projects/`, {
      method: 'PUT',
      body: JSON.stringify({
        id: projectId,
        name: projectName,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      console.log(response.statusText);
    }

    const nameElement = $('<h3>').text(projectName);

    $(this).replaceWith(nameElement);
  }
});
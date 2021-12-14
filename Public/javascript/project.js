let activeProject;

// Create new Project
// Button activation
$('#new-project-button').on('click', () => {
  const textInput = $('<input>')
    .addClass('ui-tabs-anchor')
    .attr('id', 'new-project-name')
    .attr('placeholder', 'Project Name');

  $('#new-project-button').replaceWith(textInput);
  $('#new-project-name').trigger('focus');
});

// Enter name and send to database
$('#new-project-tab').on('blur', '#new-project-name', async event => {
  // event.stopPropagation();
  const projectName = $('#new-project-name').val().trim();
  console.log('line 17', projectName);

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

$('.project-name').on('blur', 'input', async function () {
  activeProject = $('#tabs').tabs('option', 'active');

  const projectName = $(this).val().trim();
  const projectId = $(this).closest('.project-workspace').attr('id').replace('project-', '');
  console.log(projectName, projectId);
  const response = await fetch(`/api/projects/`, {
    method: 'PUT',
    body: JSON.stringify({
      projectId,
      projectName,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.reload();
    $('#tabs').tabs('option', 'active', activeProject);
  } else {
    const projectId = $(this).closest('.project-workspace').attr('id').replace('project-', '');

    const nameElement = $('<h3>').text(projectName);
    $(this).replaceWith(nameElement);
  }
});

// Delete Project - drag and drop tab
const deleteProject = async projectTab => {
  const projectId = projectTab.attr('id').replace('project-tab-', '');
  console.log(`id ${projectId}`);

  const response = await fetch(`/api/projects/${projectId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.reload();
  } else {
    console.log(response.statusText);
  }
};

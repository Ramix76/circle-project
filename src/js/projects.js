const endpoint = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function renderProject(project, others) {
  const container = document.getElementById('project-detail');
  if (!project) {
    container.innerHTML = `<p>Project not found.</p>`;
    return;
  }

  container.innerHTML = `
  <div class="project-main">
    <h1 class="project-title">${project.name}</h1>
    
    <div class="project-meta">
      <p class="project-type">${project.project_type}</p>
      <p class="project-date">Completed on ${project.completed_on}</p>
    </div>
    
    <img src="${project.image}" alt="${project.name}" class="project-image" />
    
    <div class="project-content">
      <p>${project.content}</p>
    </div>
  </div>

  <section class="recent-projects">
    <h2>Other Projects</h2>
    <div class="project-container">
      ${others.map(p => `
        <article class="project">
          <img src="${p.image}" alt="${p.name}" />
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <a href="projects.html?uuid=${p.uuid}" class="learn-more">Learn more</a>
        </article>
      `).join('')}
    </div>
  </section>
`;
}

async function fetchAndDisplayProject() {
    const uuid = getQueryParam('uuid');
    
    if (!uuid) {
        document.getElementById('project-detail').innerHTML = '<p>No project specified.</p>';
        return;
    }
    
    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const projects = await response.json();
        const currentProject = projects.find(p => p.uuid === uuid);
        const otherProjects = projects.filter(p => p.uuid !== uuid).slice(0, 3);
        
        renderProject(currentProject, otherProjects);
    } catch (error) {
        document.getElementById('project-detail').innerHTML = `<p>Error loading project: ${error.message}</p>`;
    }
}

fetchAndDisplayProject();
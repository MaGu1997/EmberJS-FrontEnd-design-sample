import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('https://api.october.eu/projects');
    const data = await response.json();
    const projects = data.projects;
    const remaining = data.remaining;
    let onlineProjects, financedProjects;

    if (projects) {
      onlineProjects = projects.filter((p) => p.status === 'online');
      financedProjects = projects.filter((p) => p.status === 'completed');
    }

    return { projects, onlineProjects, financedProjects, remaining };
  }
}

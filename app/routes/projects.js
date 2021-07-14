import Route from '@ember/routing/route';

export default class ProjectsRoute extends Route {
  async model(params) {
    const { project_id } = params;
    const response = await fetch('https://api.october.eu/projects');
    const data = await response.json();
    const project = data.projects.find(({ id }) => id === project_id);

    console.log('project', project);
    return { project };
  }
}

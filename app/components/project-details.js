import Component from '@glimmer/component';

export default class ProjectDetailsComponent extends Component {
  get stamp() {
    let { project } = this.args;
    let language = project.business.address.country;
    let summaryDetails = project.summary[language][0].value;
    let descriptions = project.description[language];
    return {
      project,
      descriptions,
      summaryDetails,
    };
  }
}

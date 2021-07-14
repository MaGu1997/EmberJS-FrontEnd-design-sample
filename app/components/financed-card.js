import Component from '@glimmer/component';

export default class FinancedCardComponent extends Component {
  get stamp() {
    let { project } = this.args;
    let onlineDate = new Date(project.onlineDate);
    let openingDate = new Date(project.openingDate);
    let expirationDate = new Date(project.expirationDate);
    let duration =
      (
        (expirationDate.getTime() - onlineDate.getTime()) /
        (1000 * 3600 * 24)
      ).toFixed(0) + ' days';
    let durationRemaining =
      (
        (expirationDate.getTime() - openingDate.getTime()) /
        (1000 * 3600 * 24)
      ).toFixed(0) + ' days';

    let bulletClass;
    switch (project.grade) {
      case 'A' || 'A+' || 'A-':
        bulletClass = 'greenBullet';

        break;
      case 'B' || 'B+' || 'B-':
        bulletClass = 'yellowBullet';

        break;
      case 'C' || 'C+' || 'C-':
        bulletClass = 'redBullet';

        break;

      default:
        bulletClass = 'greenBullet';

        break;
    }

    return { duration, durationRemaining, bulletClass };
  }
}

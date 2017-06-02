export class Challenge {
  public title: string;
  public description: string;
  public points: Number;
  public challengeId?: string;

  constructor(title: string, description: string, points: Number, challengeId?: string) {
    this.title = title;
    this.description = description;
    this.points = points;
    this.challengeId = challengeId;
  }
}

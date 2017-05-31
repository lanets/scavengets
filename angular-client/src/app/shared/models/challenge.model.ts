export class Challenge {
  title: string;
  description: string;
  points: Number;
  challengeId?: string;

  constructor(title: string, description: string, points: Number, challengeId?: string) {
    this.title = title;
    this.description = description;
    this.points = points;
    this.challengeId = challengeId;
  }
}

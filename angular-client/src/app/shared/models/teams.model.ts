import { User } from './user.model';

export class Team {
  constructor(public name: string,
              public points: number,
              public users: User[],
              public captain: User
  ) {}
}

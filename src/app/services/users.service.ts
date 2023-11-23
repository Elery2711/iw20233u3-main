import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [];

  constructor() {
    this.users.push({
      name: 'Elery',
      email: 'elery2711@gmail.com',
      password: '12345678',
    });
  }

  public addUser(u: User): User[] {
    this.users.push(u);
    return this.users;
  }

  public removeUser(pos: number): User[] {
    this.users.splice(pos, 1);
    return this.users;
  }

  public updateUser(pos: number, u: User): User[] {
    this.users[pos] = u;
    return this.users;
  }

  public getUsers(): User[] {
    return this.users;
  }

  public checkUser(email: String, password: String): boolean {
    let flag: boolean = false;
    this.users.forEach((element) => {
      if (element.email == email && element.password == password) {
        flag = true;
      }
    });
    return flag;
  }
}

export class UserModel {
  public name:string;
  public age: number;

  constructor(json: any){
    this.name = json.userName;
    this.age = json.userAge;
  }
}

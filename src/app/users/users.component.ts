import { Component, OnInit } from '@angular/core';
import {NewServiceService} from "./new-service.service";
import {User} from "./user";

@Component({
  selector: 'app-users',
 // templateUrl: './users.component.html',
  //styleUrls: ['./users.component.css']
template: `
   <h3>My Users:</h3>
   <ul>
     <li *ngFor="let user of users">
       <strong>{{ user.nom }}</strong> 
     </li>
   </ul> 
   `

})
export class UsersComponent implements OnInit {

  private users: User[] = [];

  constructor(private usersService: NewServiceService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => this.users = data);


      console.log(this.users[1].id);
  }

/*
  deleteUser(user){
    if (confirm("Are you sure you want to delete " + user.name + "?")) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.usersService.deleteUser(user.id)
        .subscribe(null,
          err => {
            alert("Could not delete user.");
            // Revert the view back to its original state
            this.users.splice(index, 0, user);
          });
    }
  }*/

}

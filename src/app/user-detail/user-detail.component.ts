import { Component } from '@angular/core';
import { User, UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  userData: User = {} as User;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.userService.fetchUserById(id).subscribe((user) => {
        this.userData = user;
      });
    });
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../service/user.service';
import { IPerson } from './IPerson';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit, OnDestroy {
  imageWidth = 30;
  imageMargin = 2;
  private _listFilter: string = "";
  showImage: boolean = false;
  showAllUsers: boolean = false;
  pageTitle: string = "Users List"
  users: IPerson[] = []
  filteredUsers: IPerson[] = []
  errorMessage: string = ''
  //subscription: Subscription | undefined
  get listFilter(): string {
    return this._listFilter
  }
  set listFilter(value: string) {
    this._listFilter = value
    this.filteredUsers = this.PerformFilter(value)
  }
  subscription!: Subscription
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.subscription = this.userService.getUsers().subscribe({
      next: usrs => {
        this.users = usrs
        this.filteredUsers = this.users
      },
      error: err => this.errorMessage = err
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


  toggleImage() {
    this.showImage = !this.showImage;
  }

  private PerformFilter(filterBy: string): IPerson[] {
    filterBy = filterBy.toLocaleLowerCase()

    return this.users.filter(
      (user: IPerson) => user.name.toLocaleLowerCase().includes(filterBy)
    )
  }

  onRatingClicked(message: string): void {
    this.pageTitle = message
  }

}


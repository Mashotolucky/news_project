import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: any = [];

  constructor() { 
    this.people = [
      {
        id: 1,
        name: 'Mashoto',
        lastname: 'Molefe',
        bio: '',
        totalFriends: 2345,
        mutualFriends: 253,
        photos: [
          {
            upload: ''
          }
        ],
        posts: [
          {
            title: 'Smell de Coffee',
            img: '',
            reactions: 12,
            date: 'October 14, 2022'
          },
          {
            title: 'This coding life',
            reactions: 7
          }
        ],
        isFriend: true,
      }
    ]
  }

  ngOnInit(): void {
  }

}

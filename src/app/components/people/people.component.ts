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
        bio: 'A simple Man living my own dreams',
        totalFriends: 2345,
        mutualFriends: 253,
        mutuals: [
          {
            profile: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Mash',
            surname: 'Lucky'
          },
          {
            profile: 'https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Danger',
            surname: 'Wyne'
          }
        ],
        photos: [
          {
            upload: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          },
          {
            upload: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          },
          {
            upload: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }
        ],
        posts: [
          {
            title: 'Smell de Coffee',
            img: 'https://images.unsplash.com/photo-1513673054901-2b5f51551112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            reactions: 12,
            date: 'October 14, 2022'
          },
          {
            title: 'This coding life',
            img: 'https://images.unsplash.com/photo-1476817343404-01ccd61218d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            reactions: 7,
            date: 'October 14, 2022'
          }
        ],
        isFriend: false,
        profile_picture: 'https://images.unsplash.com/photo-1472711649025-510d7c09a6fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      }
    ]
  }

  ngOnInit(): void {
    this.people;
    console.log(this.people)

  }

  public remove(): void{

    
  }

  public add(): void{
    
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  

  constructor(private dataService:DataService) { }

  ngOnInit() {
    console.log('ng on init raised');

    this.name ='Anna Aelmans';
    this.age = 37;
    this.email = 'anna.aelmans@apg.nl';
    this.address = {
      street: 'Stokhem 69',
      city: 'Wijlre',
      land: 'Nederland'
    } 
    this.hobbies = ['Woodworking', 'Fitness'];
    this.dataService.getPosts().subscribe((posts) =>
    {
      this.posts = posts;
    });
  }

  onClick()
  {
    this.name = 'Ralf Aelmans';
  }

  addHobby(hobby)
  {
    this.hobbies.push(hobby);
    return false;
  }


}

interface Address{
  street:string,
city:string,
land:string
}

interface Post{
  id:number,
title:string,
body:string,
userid:string
}
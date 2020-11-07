import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  public posts: Post[] = [
    {
        id: "1",
        title: "Pictura contemporana",
        description: "Cea mai tare pictura",
        imageUrl: "https://valenciatong.files.wordpress.com/2017/04/cropped-colorpastel4a.jpg?w=2000&h=1200&crop=1",
        artist: "Opakaveli",
        location: "Peste tot si nicaieri",
        created_at: new Date("2020-11-07T11:26:39.324000Z")
    },
    {
        id: "2",
        title: "Alta opera de arta",
        description: "just a simple hvtghgftf",
        imageUrl: "https://valenciatong.files.wordpress.com/2017/04/cropped-colorpastel4a.jpg?w=2000&h=1200&crop=1",
        artist: "xX_Adrian_Xx",
        location: "Berlin",
        created_at: new Date("2020-11-07T11:27:15.563000Z")
    },
    {
        id: "3",
        title: "Sculptura lui torcea",
        description: "cea mai tare",
        imageUrl: "https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c=s1200",
        artist: "Torcea",
        location: "Focsani",
        created_at: new Date("2020-11-07T11:27:50.458000Z")
    }
];

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.posts);
  }

}

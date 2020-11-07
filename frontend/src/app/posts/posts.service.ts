import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

interface PostData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  artist: string;
  location: string;
  created_at: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public getPosts() {
    return this.http
      .get(environment.backendApi)
      .pipe(
        map(resData => {
          const postArray: Post[] = Object.values(resData);
          return postArray;
        })
      );
  }

  public getPostById(id: string) {
    return this.http
      .get<PostData>(environment.backendApi + `${id}`)
      .pipe(
        map(resData => {
          return new Post(
            resData.id,
            resData.title,
            resData.description,
            resData.imageUrl,
            resData.artist,
            resData.location,
            resData.created_at
          );
        })
      )
  }
}

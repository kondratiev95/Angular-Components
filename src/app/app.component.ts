import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string 
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    { 
      title: 'Хочу выучить Angular компоненты',
      text: 'Я двигаюсь к свой мечте',
      id: 1
    },
    { 
      title: 'Следующий блок',
      text: 'Будет еще интереснее',
      id: 2
    },
    { 
      title: 'Меня зовут Владимир',
      text: 'Я будущий разработчик и просто добрый человек)',
      id: 3
    }
  ];

  addPost(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter( el => el.id !== id);
  }
}

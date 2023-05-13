import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();

    
    this.contentList.addContent({
      id: 1,
      title: 'My favorite anime 1(Naruto)',
      description: 'This is my favorite anime series 1',
      creator: 'Some creator',
      imgURL: 'assets/img/img1.jpg',
      type: 'TV Series',
      tags: ['Action', 'Adventure']
    });

    this.contentList.addContent({
      id: 2,
      title: 'My favorite anime 2(Demon Slayer)',
      description: 'This is my favorite anime series 2',
      creator: 'Another creator',
      imgURL: 'assets/img/img2.jpg',
      type: 'TV Series',
      tags: ['Action', 'Drama']
    });

    this.contentList.addContent({
      id: 3,
      title: 'My favorite anime 3(Black Clover)',
      description: 'This is my favorite anime series 3',
      creator: 'Some other creator',
      imgURL: 'assets/img/img3.jpg',
      type: 'TV Series',
      tags: ['Comedy', 'Action', 'Comedy']
    });
  }
}

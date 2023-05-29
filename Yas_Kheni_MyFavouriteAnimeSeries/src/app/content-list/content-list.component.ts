import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[] = [
    {
      id: 1,
      title: 'Naruto',
      description: 'NARUTO',
      creator: 'Creator 1',
      imgURL: 'assets/img/img1.jpg',
      type: 'Funny',
      tags: ['movie, 2011'],
      highlight: false
    },
    {
      id: 2,
      title: 'Demon Slayer',
      description: 'DEMON SLAYER',
      creator: 'Creator 2',
      imgURL: 'assets/img/img2.jpg',
      type: 'Action',
      tags: ['movie, 2011'],
      highlight: false
    },
    {
      id: 3,
      title: 'Black Clover',
      description: 'BLACK CLOVER',
      creator: 'Creator 3',
      imgURL: 'assets/img/img3.jpg',
      type: '',
      tags: ['movie, 2012'],
      highlight: false
    },
    {
      id: 4,
      title: 'Hunter × Hunter',
      description: 'Hunter × Hunter',
      creator: 'Creator4',
      imgURL: 'assets/img/img4.jpg',
      type: 'Funny',
      tags: ['movie, 2012'],
      highlight: false
    },
    {
      id: 5,
      title: 'Death Note',
      description: 'Death Note',
      creator: 'Creator5',
      imgURL: 'assets/img/img5.jpg',
      type: 'Action',
      tags: ['Mystery, 2012'],
      highlight: false
    },
    {
      id: 6,
      title: 'One Piece',
      description: 'One Piece',
      creator: 'Creator6',
      imgURL: 'assets/img/img6.jpg',
      type: '',
      tags: ['Adventure, 2012'],
      highlight: false
    },
    {
      id: 7,
      title: 'Tokyo Ghoul',
      description: 'Tokyo Ghoul',
      creator: 'Creator7',
      imgURL: 'assets/img/img7.jpg',
      type: 'Action',
      tags: [' Animation, 2012'],
      highlight: false
    }
  ]; 

  types: string[] = ['Funny', 'Action']; 
  searchTitle: string = 'Naruto';
  searchResultMessage: string = '';
  searchResultExists: boolean = false;

  searchContent(): void {
    const foundContent = this.contents.find(content => content.title === this.searchTitle);

    if (foundContent) {
      this.searchResultMessage = `Content with title "${this.searchTitle}" exists.`;
      this.searchResultExists = true;
    } else {
      this.searchResultMessage = `Content with title "${this.searchTitle}" does not exist.`;
      this.searchResultExists = false;
    }
  }
}

import { Component } from '@angular/core';
import { Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  public contents: Content[] = [
    {
      id: 1,
      title: 'Naruto',
      image: 'assets/img/img1.jpg',
      description: 'NARUTO',
      creator: 'Creator 1',
      type: 'Type 1',
      tags: ['Tag 1', 'Tag 2', 'Tag 3']
    },

    {
      id: 2,
      title: 'Demon Slayer',
      image: 'assets/img/img2.jpg',
      description: 'DEMON SLAYER',
      creator: 'Creator 2',
      type: 'Type 2',
      tags: ['Tag 1', 'Tag 2', 'Tag 3']
    },

    {
      id: 3,
      title: 'Black Clover',
      image: 'assets/img/img3.jpg',
      description: 'BLACK CLOVER',
      creator: 'Creator 3',
      type: 'Type 3',
      tags: ['Tag 1', 'Tag 2', 'Tag 3']
    },
   
  ];

  handleClick(content: Content): void {
    console.log(`Clicked on image with ID ${content.id} and title ${content.title}`);
  }
}

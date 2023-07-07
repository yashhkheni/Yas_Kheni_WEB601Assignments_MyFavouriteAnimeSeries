import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  highlightedItemIndex: number = -1;
  searchTitle: string = '';
  searchResult: string = '';
  isContentFound: boolean = false;
  contentListArray: any[] = [];
 

  constructor() {
    // Initialize content list if needed
     this.contentListArray = [
    {
      id: 1,
      title: 'Naruto',
      description: 'Naruto Des',
      creator: 'Masashi Kishimoto',
      imgURL: './assets/img/img1.jpg',
      type: 'Action',
      tags: ['Action', 'Fight', 'Adventure']
    },
    {
      id: 2,
      title: 'Death Note',
      description: 'Death Note Des',
      creator: 'Tsugumi Ohba',
      imgURL: './assets/img/img5.jpg',
      type: 'Suspence',
      tags: ['Action', 'Suspence', 'Drama']
    },
    {
      id: 3,
      title: 'Black Clover',
      description: 'Black Clover Des',
      creator: 'Ayataka Tanemura',
      imgURL: './assets/img/img3.jpg',
      type: 'Action',
      tags: ['Fight', 'Drama']
    },
    {
      id: 4,
      title: 'Demon Slayer',
      description: 'Demon Slayer Des',
      creator: 'Koyoharu Gotouge',
      imgURL: './assets/img/img2.jpg',
      type: 'Suspence',
      tags: ['Action', 'Suspence', 'Drama']
    },
    {
      id: 5,
      title: 'Hunter x Hunter',
      description: 'Hunter x Hunter',
      creator: 'Yoshihiro Togashi',
      imgURL: './assets/img/img4.jpg',
      type: 'Action',
      tags: ['Action', 'Drama', 'Suspence']
    },
    {
      id: 6,
      title: 'One piece',
      description: 'One piece des',
      creator: 'Eiichiro Oda',
      imgURL: './assets/img/img6.jpg',
      type: 'Suspence',
      tags: ['Adventure', 'Drama', 'Action']
    },
    {
      id: 7,
      title: 'Tokyo Ghoul',
      description: 'Tokyo Ghoul Des',
      creator: 'Sui IshidaJohn Lennon, Paul McCartney,and Ringo Starr',
      imgURL: './assets/img/img7.jpg',
      type: 'Suspence',
      tags: ['Action', 'Drama']
    },
  ];
  }

  displayContent(contentItem: any) {
    console.log('Content ID:', contentItem.id);
    console.log('Content Title:', contentItem.title);
  }

  public searchContentItem() {
    const foundItem = this.contentListArray.find(item => item.title === this.searchTitle);
    this.isContentFound = !!foundItem;
    this.searchResult = this.isContentFound ? 'Content item found!' : 'Content item not found!';
 
  }

 

  receiveNewContent(newContent: any): void {
    // Add the new content item to the content list
    console.log("newContent",newContent);
    this.contentListArray.push(newContent);
    console.log('contentListArray',this.contentListArray);
  }
}
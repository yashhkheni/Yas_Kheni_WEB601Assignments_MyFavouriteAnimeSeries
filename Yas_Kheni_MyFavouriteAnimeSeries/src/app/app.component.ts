import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yas_Kheni_MyFavouriteAnimeSeries';

  onContentAdded(content: Content): void {
    // Handle the emitted content object here
    console.log('New content added:', content);
  }
  
  
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { content } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getContent(): Observable<Content[]> {
    // Simulate asynchronous retrieval of content array
    return of(content);
  }

  getContentItem(id: number): Observable<Content | undefined> {
    // Simulate asynchronous retrieval of content item by ID
    const item = content.find((contentItem) => contentItem.id === id);
    return of(item);
  }
}

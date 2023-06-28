import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: [],
    highlight: false
  };
  errorMessage: string = '';

  createContent(): void {
    // Perform any required validation here

    // Check if the required fields are filled
    if (!this.newContent.title || !this.newContent.description || !this.newContent.creator) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    // Add any additional logic or validations as needed

    // Emit the new content item to the parent component
    // using an @Output property or an EventEmitter
    // Example: this.newContentEmitter.emit(this.newContent);

    // Clear the input fields and reset the newContent object
    this.newContent = {
      id: 0,
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: [],
      highlight: false
    };

    // Clear the error message
    this.errorMessage = '';
  }
}

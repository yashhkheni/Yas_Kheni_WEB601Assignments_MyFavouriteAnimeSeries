import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../app/helper-files/content-interface'; // Replace with the actual path to your Content model

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {
  transform(contents: Content[], filterType?: string): Content[] {
    if (filterType) {
      return contents.filter(content => content.type === filterType);
    } else {
      return contents.filter(content => !content.type);
    }
  }
}

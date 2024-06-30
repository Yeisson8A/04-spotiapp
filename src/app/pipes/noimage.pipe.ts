import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    // No arreglo de imágenes
    if (!images) {
      return 'assets/img/noimage.png';
    }

    // Si viene un arreglo de imágenes
    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}

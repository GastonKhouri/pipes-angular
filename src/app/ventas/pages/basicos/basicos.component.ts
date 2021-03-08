import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

	nombreLower: string = 'gastón';
	nombreUpper: string = 'GASTÓN';
	nombreCompleto: string = 'gAstÓN KHOurI';

	fecha: Date = new Date();

}

import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

	// i18nSelect
  nombre: string = 'Gastón';
  genero: string = 'masculino';

  invitacionMapa = {
  	'masculino': 'invitarlo',
  	'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Gastón', 'María', 'Eduardo', 'Pedro', 'Fernando'];
  clientesMapa = {
  	'=0': 'no tenemos ningún cliente esperando.',
  	'=1': 'tenemos un cliente esperando.',
  	'other': 'tenemos # clientes esperando.',
  }

  cambiarCliente() {
  	this.nombre = 'María';
  	this.genero = 'femenino';
  }

  borrarCliente() {
  	this.clientes.pop();
  }

  // keyValue pipe
  persona = {
  	nombre: 'Gastón',
  	edad: 21,
  	direccion: 'Venezuela'
  }

  // Json Pipe
  heroes = [
  	{
  		nombre: 'Superman',
  		vuela: true
  	},
  	{
  		nombre: 'Robin',
  		vuela: false
  	},
  	{
  		nombre: 'Aquaman',
  		vuela: false
  	},
  ]


  // Async Pipe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {

  	setTimeout(() => {
  		resolve('Tenemos data de promesa');
  	}, 3500);

  });

}

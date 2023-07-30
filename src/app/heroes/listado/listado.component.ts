import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];

heroeB!: string;

 heroeBorrado: string = ''


/* get heroeBorrado(): string{
  return this.heroeB
}


set heroeBorrado(nombre: string){
    this.heroeB = nombre;
} */

borrarHeroe(){

 this.heroeBorrado = this.heroes.shift() || '';

}

}

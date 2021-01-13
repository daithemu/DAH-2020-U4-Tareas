import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public places = [];

  constructor() {
    this.places.push({
      image: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/01/que-pasa-si-como-platano-en-ayunas.jpg',
      name: 'Platanos naturales',
      about: 'Es fuente de minerales y vitaminas además de fibra y fitoquímicos que protegen de enfermedades.',
      price: '$11 -kg'
    });
    this.places.push({
      image: 'https://mundosjumbo.cl/wp-content/uploads/2015/12/GettyImages-1163022179-720x355.jpg',
      name: 'Platanos fritos',
      about: 'Plátanos machos maduros, rebanados y fritos en aceite o manteca de cerdo, que se emplean como guarnición o postre.',
      price: '$25 -kg'
    });
    this.places.push({
      image: 'https://pbs.twimg.com/media/Cg_vyhrU0AAAQ9m.jpg',
      name: 'Platanos deshidratados',
      about: 'El proceso de deshidratación, consiste en colocar los plátanos al sol hasta que pierdan el agua.',
      price: '$15'
    });
    this.places.push({
      image: 'https://www.tvnotas.com.mx/sites/default/files/styles/644xy/public/recetas/2015-08/55dcea6990e68.jpg?itok=IxaLenQy',
      name: 'Platanos con crema',
      about: 'Los plátanos con crema se hacen con azúcar y puede usar tanto azúcar blanca como azúcar morena',
      price: '$30'
    });
  }
}

import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/MenuItem.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li {
      cursor:pointer; 
    }
    `
  ]
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    {
      ruta:'mapas/fullscreen',
      nombre:'FullScreen'
    },
    {
      ruta:'mapas/zoom-range',
      nombre:'Zoom Range'
    },
    {
      ruta:'mapas/marcadores',
      nombre:'Marcadores'
    },
    {
      ruta:'mapas/estacionamientos',
      nombre:'Estacionamientos'
    }
  ];

}

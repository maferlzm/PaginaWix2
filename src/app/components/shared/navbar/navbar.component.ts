import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public tituloEmpresa: string = 'ALPHABET';
  public NavBarTitulos: Array<string> = ['ALPHABET', 'Home',  'Shop', 'About', 'Contact' ];
 //falta login y carrito de compras 
 //cambiar el estilo de navbar fondo blanco contorno delgado negro 
  constructor() { }

  ngOnInit(): void {
  }

}

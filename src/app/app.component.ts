import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ConexionService } from './service/conexion.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'conexionApi';
  people:any[] = []
  constructor(private conexion:ConexionService){
  }

  ngOnInit(): void {
    this.conexion.getElements().subscribe((characters:any) => {
      this.people = characters.results
      console.log(this.people)
    })
  }
}

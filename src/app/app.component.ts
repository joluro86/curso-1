import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola mundo con Angular';
  users: string[] = ['jorge', 'merlis', 'juan'];
  visible: boolean = false;
  texto = "Mostrar"

  setVisible(): void {
    this.visible = this.visible ? false : true;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-notes.component.html',
  styleUrl: './add-notes.component.scss'
})
export class AddNotesComponent {
  isDisabled: boolean = true;
  showContainer: boolean = true;
  show(){
    this.showContainer=!this.showContainer
    console.log(this.showContainer)
  }
}

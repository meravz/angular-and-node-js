import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { contactModel } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactModel:contactModel;
  constructor(private contactService:ContactService) {
    this.contactModel=<contactModel>{};
   }

  ngOnInit() {
  }


   contact(){
     this.contactService.postServer(this.contactModel).subscribe(d =>{
       console.log('ok');
     })
      
    }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormProviderService } from '../services/form-provider.service';
import { TableProviderService, TableRow } from '../services/table-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private router:Router){

  }

  
  ngOnInit(): void {
   this.router.navigateByUrl('/level1');
  }
}

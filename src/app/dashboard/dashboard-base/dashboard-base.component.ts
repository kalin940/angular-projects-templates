import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-dashboard-base',
  templateUrl: './dashboard-base.component.html',
  styleUrls: ['./dashboard-base.component.css']
})
export class DashboardBaseComponent implements OnInit {

 
  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
    this.logger.log("Init dashboard component")
  }

}

import { Component, OnInit } from '@angular/core';
import { AppService } from '../../_service/app.service'

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor(public tranService: AppService) { }

  ngOnInit(): void {
  }

}

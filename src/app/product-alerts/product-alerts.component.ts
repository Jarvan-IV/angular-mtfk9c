import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notifyOut = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  notifyAlert() {
    window.alert(this.product.name + "处理完成，准备传出事件");
    // 将事件传出给父组件.
    this.notifyOut.emit();
  }


}

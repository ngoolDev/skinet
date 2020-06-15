import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order';
import { OrdersService } from '../orders.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  order: IOrder;

  constructor(
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.set('@OrderDetail', '');
  }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.ordersService
      .getOrder(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(
        (order) => {
          this.order = order;
          this.breadcrumbService.set(
            '@OrderDetail',
            `Order# ${order.id} - ${order.status}`
          );
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

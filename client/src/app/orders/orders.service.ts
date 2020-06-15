import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IOrder } from '../shared/models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get(this.baseUrl + 'orders').pipe(
      map((orders: IOrder[]) => {
        return orders.sort((a, b) => b.id - a.id);
      })
    );
  }

  getOrder(orderId: number) {
    return this.http.get<IOrder>(this.baseUrl + 'orders/' + orderId);
  }
}

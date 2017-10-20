import { Component, OnInit, Inject} from '@angular/core';

@Component({
    selector: 'app-order-list',
    templateUrl: './orderList.component.html',
    styleUrls: ['./orderList.component.scss']
})

export class OrderListComponent implements OnInit {
    products: any[];
    constructor() { }

    ngOnInit() {}
}
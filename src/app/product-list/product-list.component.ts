import {Component} from '@angular/core';

import {products} from '../products';
import {MyTestableClass} from '../decorator/MyTestableClass.modal';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList = products;

  share(product) {
    window.alert('The product has been shared!' + product.name);
    /*window.alert(MyTestableClass.isTestable);
    window.alert(MyTestableClass.testname);
    window.alert(MyTestableClass.testname1);*/
    let myTestableClass = new MyTestableClass();
    window.alert(myTestableClass.foo());
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

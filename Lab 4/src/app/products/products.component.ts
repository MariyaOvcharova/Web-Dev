import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Apple iPhone 16 Pro Max 256Gb черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      price: 676562,
      reviews: 6723,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      name: 'Apple iPhone 16 Pro Max 256Gb золотoй',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      price: 670004,
      reviews: 4943,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },
    {
      name: 'Apple iPhone 13 Pro 128Gb черный',
      
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      
      price: 278001,
      reviews: 3130,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298364/?c=750000000'
    },
    {
      name: 'Apple iPhone 13 Mini 128Gb синий',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
      price: 275433,
      reviews: 5863,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000'
    },
    {
      name: 'Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',
      price: 186150,
      reviews: 5895,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000'
    },
    {
      name: 'Samsung Galaxy A35 5G 8 ГБ/128 ГБ темно-синий',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h5e/85429009285150.png?format=gallery-medium',
      price: 122754,
      reviews: 3753,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000'
    },
    {
      name: 'Xiaomi Redmi 13C 8 ГБ/256 ГБ белый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h53/85284066590750.jpg?format=gallery-medium',
      price: 61734,
      reviews: 512,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      name: 'Samsung Galaxy A35 5G 8 ГБ/256 ГБ сиреневый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/hdb/85428768866334.png?format=gallery-medium',
      price: 140804,
      reviews: 143,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-256-gb-sirenevyi-117420466/?c=750000000'
    },
    {
      name: 'Apple iPhone 16 Max 128Gb белый',
      image: "https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium",
      price: 414532,
      reviews: 385,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000'
    },
    {
      name: 'Samsung Galaxy A55 5G 8 ГБ/256 ГБ голубой',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h7a/85428950499358.png?format=gallery-medium',
      price: 173050,
      reviews: 342,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-goluboi-117420299/?c=750000000'
    }
  ];
}

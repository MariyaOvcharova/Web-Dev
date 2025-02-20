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
  categories = [
    {
      name: 'Apple',
      products: [
        {
          name: 'Apple iPhone 16 Pro Max 256Gb черный',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
          price: 676562,
          reviews: 6723,
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
          likes: 0
        },
        {
          name: 'Apple iPhone 16 Pro Max 256Gb золотoй',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
          price: 670004,
          reviews: 4943,
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
          likes: 0
        },
        {
          name: 'Apple iPhone 13 128Gb черный',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
          price: 278001,
          reviews: 3130,
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298364/?c=750000000',
          likes: 0
        },
        {
          name: 'Apple iPhone 13 128Gb синий',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
          price: 275433,
          reviews: 5863,
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000',
          likes: 0
        },
        {
          name: 'Apple iPhone 16 128Gb белый',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium',
          price: 414532,
          reviews: 385,
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000',
          likes: 0
        },

      ]
    },
    {
      name: 'Samsung',
      products: [
        {
          name: 'Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',
          price: 186150,
          reviews: 5895,
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
          likes: 0
        },
        {
          name: 'Samsung Galaxy A35 5G 8 ГБ/256 ГБ сиреневый',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/hdb/85428768866334.png?format=gallery-medium',
          price: 140804,
          reviews: 143,
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-256-gb-sirenevyi-117420466/?c=750000000',
          likes: 0
        },
        {
          name: 'Samsung Galaxy A55 5G 8 ГБ/256 ГБ голубой',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h7a/85428950499358.png?format=gallery-medium',
          price: 173050,
          reviews: 342,
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-goluboi-117420299/?c=750000000',
          likes: 0
        },
        {
          name: 'Samsung Galaxy A35 5G 8 ГБ/128 ГБ темно-синий',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h5e/85429009285150.png?format=gallery-medium',
          price: 122754,
          reviews: 3753,
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000',
          likes: 0
        },
        {
          name: 'Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',
          price: 186150,
          reviews: 5895,
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
          likes: 0
         }
      ]
    },
    {
      name: 'Xiaomi',
      products: [
        {
          name: 'Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
          price: 126050,
          reviews: 55,
          link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
          likes: 0
        },
        
        {
          name: 'Xiaomi Redmi 13C 8 ГБ/256 ГБ синий',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h67/h01/84526692565022.png?format=gallery-medium',
          price: 293222,
          reviews: 32,
          link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-sinii-114695505/?c=750000000',
          likes: 0
        },
        {
          name: 'Xiaomi Redmi Note 12 Pro 5G 8 ГБ/256 ГБ черный',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/hcb/79755720294430.jpg?format=gallery-medium',
          price: 12711,
          reviews: 53,
          link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-8-gb-256-gb-chernyi-109734243/?c=750000000',
          likes: 0
        },
        {
          name: 'Xiaomi Redmi Note 12 Pro+ 5G NFC 8 ГБ/256 ГБ черный',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2d/79840518275102.jpg?format=gallery-medium',
          price: 186150,
          reviews: 5895,
          link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-nfc-8-gb-256-gb-chernyi-109772767/?c=750000000',
          likes: 0
        },
        {
          name: 'Xiaomi Redmi Note 12 Pro Max 5G 8 ГБ/256 ГБ черный',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/hcb/79755720294430.jpg?format=gallery-medium',
          price: 12711,
          reviews: 53,
          link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-8-gb-256-gb-chernyi-109734243/?c=750000000',
          likes: 0
        }
      ]
    },
    {
      name: 'Другое',
      products: [
        {
          name: 'Apple 18W USB-C Power Adapter USB Type-C белый',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-large',
          price: 6643,
          reviews: 55,
          link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
          likes: 0
        },
        
        {
          name: 'Samsung ERTYP-TA8000000NBEGRU черный',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h10/h44/64124144877598.jpg?format=gallery-medium',
          price: 2932,
          reviews: 3,
          link: 'https://kaspi.kz/shop/p/samsung-ep-ta800nbegru-chernyi-100972924/?c=750000000',
          likes: 0
        },
        {
          name: 'Зарядное устройство MagSafe белый',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h68/h96/82183899578398.jpg?format=gallery-medium',
          price: 1281,
          reviews: 1,
          link: 'https://kaspi.kz/shop/p/magsafe--112051606/?c=750000000',
          likes: 0
        },
        {
          name: 'Usams IPhone PD белый',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hc3/h82/85630053744670.jpg?format=gallery-medium',
          price: 1850,
          reviews: 5,
          link: 'https://kaspi.kz/shop/p/usams-iphone-pd-belyi-101830551/?c=750000000',
          likes: 0
        },
        {
          name: 'Samsung EP-TA845XBEGCN белый',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h84/hd8/64039078559774.jpg?format=gallery-medium',
          price: 1271,
          reviews: 2,
          link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-apple-usb-c---lightning-1-m-101103131/?c=750000000',
          likes: 0
        }
      ]
    }
  ];

  selectedCategory: { name: string; products: any[] } | null = null;

  selectCategory(category: { name: string; products: any[] }) {
    this.selectedCategory = category;
  }

  likeProduct(product: { likes: number }) {
    product.likes += 1;
  }

  removeProduct(category: { products: any[] }, product: any) {
    category.products = category.products.filter((p: any) => p !== product);
  }
}

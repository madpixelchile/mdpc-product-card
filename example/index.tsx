import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../dist/components/index';

const product1 = {
  id: '1',
  title: 'Producto uno',
  img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Producto dos',
  img: './coffee-mug2.png'
}

export const products: Product[] = [
  product1,
  product2
]

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductInCart extends Product {
  count: number;
}

const App = () => {
  return (
    <div>
      <ProductCard
        product={product1}
        className={'toke'}
      >
        {
          ()=>(
            <>
              <ProductImage/>
              <ProductTitle/>
              <ProductButtons/>
            </>
          )
        }
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


import React from "react";

import renderer, { act } from 'react-test-renderer'
import { ProductCard } from "../../../src/components/ProductCard/ProductCard";
import { product1 } from "../../data/products";

describe('Product Card Component', () => {

    test('El componente debe de mostrar su children correctamente', () => {

        const productCard = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <>
                            <h1>hola mundo</h1>
                        </>
                    )
                }
            </ProductCard>
        )

        expect(productCard.toJSON()).toMatchSnapshot();

    })


    test('El counter debería de incrementar el contador', () => {

        const productCard = renderer.create(
            <ProductCard product={product1}>
                {
                    ({ count, increaseBy }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(2)} >Sumar en test</button>
                        </>
                    )
                }
            </ProductCard>
        )

        let tree = productCard.toJSON();
        expect(tree).toMatchSnapshot();

        act(() => {
            (tree as any).children[2].props.onClick();
        });

        tree = productCard.toJSON();

        // console.log((tree as any).children[1].children[0]);

        expect((tree as any).children[1].children[0]).toBe('2')

    })

});

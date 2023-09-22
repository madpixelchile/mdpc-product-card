
import React from "react";

import renderer from 'react-test-renderer'
import { ProductTitle } from '../../../src/components/ProductTitle/ProductTitle';
import { ProductCard } from "../../../src/components/ProductCard/ProductCard";

import { product1, product2 } from "../../data/products";
import { ProductImage } from "../../../src/components/ProductImage/ProductImage";


describe('Product Title', () => {

    test('Debe de mostrar el componente correctamente con el título personalizado.', () => {

        const wrapper = renderer.create(
            <ProductTitle title={'Custom Product'} style={{ color: 'blue' }} />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

    test('El producto no debe de mostrar la imagen cuando no está en el objeto', () => {

        const productCard = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <>
                            <ProductTitle />
                        </>
                    )
                }
            </ProductCard>
        )

        expect(productCard.toJSON()).toMatchSnapshot();

    })

    test('El producto debe de mostrar una imagen', () => {

        const productCard = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <>
                            <ProductTitle/>
                            <ProductImage/>
                        </>
                    )
                }
            </ProductCard>
        )

        expect(productCard.toJSON()).toMatchSnapshot();

    })

});

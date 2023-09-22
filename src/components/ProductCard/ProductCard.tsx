
import React,{ createContext } from 'react';
import styles from '../../styles/styles.module.css';

import { useProduct } from '../../hooks/useProduct';
import { Product, ProductContextProps, OnChangeArgs, ProductCartInitialValues, ProductCardHandlers } from '../../interfaces/ProductInterfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children: ( args: ProductCardHandlers ) => React.JSX.Element,
    className?: string;
    style?: React.CSSProperties;
    onChangeProduct?: (args:OnChangeArgs)=> void;
    value?: number;
    initialValues?: ProductCartInitialValues;
}

export const ProductCard = ({ children, product, className = '', style, onChangeProduct, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({onChangeProduct, product, value, initialValues });

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
                className,
                maxCount
            }}
        >
            <div 
                className={`${styles.productCard} ${className}`} 
                style={style}
            >
                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        product,
                        maxCount,
                        increaseBy,
                        reset,
                    }) 
                }
            </div>
        </Provider>
    )
}

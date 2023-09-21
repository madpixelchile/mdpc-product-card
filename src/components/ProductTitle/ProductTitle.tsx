import React, { useContext } from "react";
import { ProductContext } from "../ProductCard/ProductCard";
import styles from '../../styles/styles.module.css';

export interface Props{
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductTitle = ({ title,  className = '', style }: Props ) => {
    const { product } = useContext(ProductContext);
    let productTitle: string;
    if(title){
        productTitle = title;
    }else if(product.title){
        productTitle = product.title;
    }else{
        productTitle = ''
    }
    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>{ productTitle }</span>
    )
}




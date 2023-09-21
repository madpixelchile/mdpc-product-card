# MDPC-PRODUCT-CARD

Este es un paquete de pruebas de despliegue en NPM

### Juan Escudero

## Ejemplo

````
import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "mdpc-product-card";

````


```
<ProductCard
    key={product.id}
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({ count, increaseBy, reset, isMaxCountReached }) => (
            <>
                <ProductImage/>
                <ProductTitle/>
                <ProductButtons/>
            </>
        )
    }
</ProductCard>

```
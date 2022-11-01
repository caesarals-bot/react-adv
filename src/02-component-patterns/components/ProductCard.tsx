import { createContext} from 'react';
import { useAddProduct } from '../hooks/useAddProduct';

import { ProductContextProps, Product, onChangesArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export interface Props {
    product: Product
    // children?: ReactElement | ReactElement[]
    children: ( args: ProductCardHandlers) => JSX.Element
    className?: string
    style?: React.CSSProperties
    onChange?: ( args: onChangesArgs) => void
    value?: number
    initialValues?: InitialValues
}


export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {
    
    const {
        counter,
        increaseBy, 
        maxCount,
        isMaxCountReached,
        reset
    } = useAddProduct({onChange, product, value, initialValues})

  return (
    <Provider
        value={{
            counter,
            increaseBy,
            maxCount,
            product
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
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset
                }
            )}
            
        </div>
    </Provider>
  )
}

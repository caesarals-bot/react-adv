import { 
  ProductCard, 
  ProductImage, 
  ProductTitle, 
  ProductButtons 
} from '../components';

import'../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: '/coffee-mug.png'
}
export const ShoppingPage = () => (
  <div>
    <h1>ShoppingPage</h1>
    <hr />
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}
    >
      {/* Diferentes maneras de enviar el componente primer patron */}
      <ProductCard product={product} className='bg-dark text-white'>
        <ProductCard.Image className='custom-image'/>
        <ProductCard.Title title={'Off Coffee'} className="text-bold" />
        <ProductCard.Buttons className='custom-buttons' />
      </ProductCard>
      {/* Segundo Patron */}
      <ProductCard 
        product={product}
        className='bg-dark text-white' 
      >
        <ProductImage className='custom-image'/>
        <ProductTitle className="text-white text-bold" />
        <ProductButtons className='custom-buttons' />
      </ProductCard>

      <ProductCard 
        product={product}
        style={{
          backgroundColor: '#70D1F8'
        }}
      >
        <ProductImage />
        <ProductTitle 
          title='Coffe Mug-Style' 
          style={{display:'flex', justifyContent:'center', fontWeight:'bold'}}
        />
        <ProductButtons style={{display:'flex', justifyContent:'center'}}/>
      </ProductCard>
    </div>
  </div>
)

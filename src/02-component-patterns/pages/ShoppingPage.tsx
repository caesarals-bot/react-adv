import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

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
      <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title title={'Off Coffee'} />
        <ProductCard.Buttons />
      </ProductCard>
      {/* Segundo Patron */}
      <ProductCard product={product}>
        <ProductImage />
        <ProductTitle />
        <ProductButtons  />
      </ProductCard>
    </div>
  </div>
)

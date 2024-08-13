import Item from './Items'
import { COMPANY, PRODUCTS, SUPPORT } from './Menu'

export default function ItemsContainer() {
  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 gap-6 sm:px-8 pt-16 mx-5'>
        <Item Links={PRODUCTS} title="PRODUCTS" />   
        <Item Links={SUPPORT} title="SUPPORT" />
        <Item Links={COMPANY} title="SHOPPIE" />
    </div>
  )
} 
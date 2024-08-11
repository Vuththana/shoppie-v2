import Item from './Items'
import { PRODUCTS, SUPPORT } from './Menu'

export default function ItemsContainer() {
  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 gap-6 sm:px-8 py-16'>
        <Item Links={PRODUCTS} title="PRODUCTS"/>   
        <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  )
}

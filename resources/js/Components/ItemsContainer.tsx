import Item from './Items'
import { COMPANY, PRODUCTS, SUPPORT } from './Menu'

export default function ItemsContainer() {
  return (
    <div className='sm:flex sm:gap-[300px] gap-8 sm:px-8 pt-16 mx-5 flex justify-center sm:mb-2'>
        <Item Links={PRODUCTS} title="PRODUCTS" />   
        <Item Links={SUPPORT} title="SUPPORT" />
        <Item Links={COMPANY} title="SHOPPIE" />
    </div>
  )
}
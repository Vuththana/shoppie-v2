import React from 'react';

export default function Footer() {
  return (
    <div
      className='text-white py-[48px] px-[16px]'
      style={{
        background: 'linear-gradient(235.63deg, rgb(84, 155, 239) 15.78%, rgb(91, 104, 223) 84.1%)',
        minHeight: '380px',
      }}
    >
      <div className='container mx-auto text-center'>
        <h1 className='text-3xl font-bold mb-[8px] mt-0'>World Leading Digital Marketplace</h1>

        <div className='flex justify-center space-x-8 mt-[48px]'>
        
          <div className='max-w-xs text-center'>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA1MiA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUwLjA0MDMgMTJDNDUuNTcxMyAxMi4wNDUyIDQxLjEzOTUgMTEuMTgyMiAzNy4wMTQgOS40NjMyM0MzMi44ODg1IDcuNzQ0MjYgMjkuMTU1MSA1LjIwNTE4IDI2LjA0MDMgMkMyMi45MjU2IDUuMjA1MTggMTkuMTkyMiA3Ljc0NDI2IDE1LjA2NjcgOS40NjMyM0MxMC45NDEyIDExLjE4MjIgNi41MDk0NSAxMi4wNDUyIDIuMDQwMzUgMTJDMi4wNDAzNSAxMiAtMC4wNTk2NTIzIDQ4IDI2LjA0MDMgNjJDNTIuMTQwMyA0OCA1MC4wNDAzIDEyIDUwLjA0MDMgMTJaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5jYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
              alt="Secure Transactions"
              className='mb-[16px] mx-auto'
              width={52}
              height={64}
              aria-hidden="true"
              role="presentation"
            />
            <div className='text-xl font-semibold'>Secure Transactions</div>
            <p className='mt-[8px] text-sm'>
              Feel confident each time you transact with us. Shoppie comes with SSL protection and a wide range of payment processors under a safe and secured platform.
            </p>
          </div>

      
          <div className='max-w-xs text-center'>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA1MiA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUwLjA0MDMgMTJDNDUuNTcxMyAxMi4wNDUyIDQxLjEzOTUgMTEuMTgyMiAzNy4wMTQgOS40NjMyM0MzMi44ODg1IDcuNzQ0MjYgMjkuMTU1MSA1LjIwNTE4IDI2LjA0MDMgMkMyMi45MjU2IDUuMjA1MTggMTkuMTkyMiA3Ljc0NDI2IDE1LjA2NjcgOS40NjMyM0MxMC45NDEyIDExLjE4MjIgNi41MDk0NSAxMi4wNDUyIDIuMDQwMzUgMTJDMi4wNDAzNSAxMiAtMC4wNTk2NTIzIDQ4IDI2LjA0MDMgNjJDNTIuMTQwMyA0OCA1MC4wNDAzIDEyIDUwLjA0MDMgMTJaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5jYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
              alt="Customer Support"
              className='mb-[16px] mx-auto'
              width={52}
              height={64}
              aria-hidden="true"
              role="presentation"
            />
            <div className='text-xl font-semibold'>Customer Support</div>
            <p className='mt-[8px] text-sm'>
              Our dedicated Customer Service team is available to help with any queries about your orders and provide exceptional after-sales support.
            </p>
          </div>

          <div className='max-w-xs text-center'>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA1MiA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUwLjA0MDMgMTJDNDUuNTcxMyAxMi4wNDUyIDQxLjEzOTUgMTEuMTgyMiAzNy4wMTQgOS40NjMyM0MzMi44ODg1IDcuNzQ0MjYgMjkuMTU1MSA1LjIwNTE4IDI2LjA0MDMgMkMyMi45MjU2IDUuMjA1MTggMTkuMTkyMiA3Ljc0NDI2IDE1LjA2NjcgOS40NjMyM0MxMC45NDEyIDExLjE4MjIgNi41MDk0NSAxMi4wNDUyIDIuMDQwMzUgMTJDMi4wNDAzNSAxMiAtMC4wNTk2NTIzIDQ4IDI2LjA0MDMgNjJDNTIuMTQwMyA0OCA1MC4wNDAzIDEyIDUwLjA0MDMgMTJaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5jYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
              alt="Best Offers"
              className='mb-[16px] mx-auto'
              width={52}
              height={64}
              aria-hidden="true"
              role="presentation"
            />
            <div className='text-xl font-semibold'>Best Offers</div>
            <p className='mt-[8px] text-sm'>
              G2G provides competitive pricing to the buyers driven by a free market economy while striving to keep the cost low for our sellers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

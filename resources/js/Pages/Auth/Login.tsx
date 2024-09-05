import { Head, useForm } from '@inertiajs/react'
import GuestLayout from '@/Layouts/GuestLayout';
import React, { FormEventHandler } from 'react'
import InputLabel from '@/Components/Authentication/InputLabel';
import TextInput from '@/Components/Authentication/TextInput';
import PrimaryButton from '@/Components/Authentication/PrimaryButton';

export default function Login({status, canResetPassword}: {status?: string, canResetPassword:boolean  }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('login'), {
      onFinish: () => reset('password'),
    })
  }
  
  return (
    <>
      <Head title="Log in" />

          {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

    <div className='g-screen max-w-screen-sm sm:max-w-full min-h-[60px] relative row sm:min-h-[300px] bg-blue-700'>
      
    </div>

    <div className='relative w-full md:min-h-0 sm:top-[-200px] sm:w-[600px] mx-auto'>
      <div className='flex flex-col justify-center items-center border rounded-lg bg-slate-100 py-7'>
        
        <div className='signIn-title text-center text-3xl font-semibold mb-10 mt-10'>
          <h1>Sign In</h1>
        </div>

        <form onSubmit={submit}>
            <div>
            <InputLabel htmlFor="email" value="Email" />

            <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
            </div>

            <div>
              <InputLabel htmlFor="password" value="Password" />

              <TextInput
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="mt-1 block w-full"
                  autoComplete="current-password"
                  onChange={(e) => setData('password', e.target.value)}
/>

            </div>
            <div>
              <a className="text-blue-400 text-sm underline" href="{{ route('register') }}">Create an account?</a>
            </div>
            <div className='submit-wrapper place-items-center mt-5'>
              <PrimaryButton className='mr-2' disabled={processing}>
                  Log in
                </PrimaryButton>
                <a href="/" className="border py-[9px] px-4  border-slate-300 bg-slate-100 rounded text-md hover:bg-slate-200 duration-300">Continue as guest</a>
            </div>
        </form>
        
      </div>
    </div>


      </>

  )
}

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Team } from '@/components/Team'
import { setupSupabase } from 'lib/auth-utils'
import Head from 'next/head'
import { getPageData } from '../../lib/utils'

export default function Apply({ authType }) {
  const supabase = setupSupabase()
  const { title } = getPageData()
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header active="Login" />
      <div>
        <div className="flex min-h-full flex-col justify-center py-28 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center font-display text-3xl font-bold tracking-tight text-gray-900">
              {authType === 'login'
                ? 'Login to your account'
                : 'Create a new account'}
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="border bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="sm block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="sm block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={async () => {
                      if (authType === 'login') {
                        const { data, error } =
                          await supabase.auth.signInWithPassword({
                            email: document.getElementById('email').value,
                            password: document.getElementById('password').value,
                          })
                        if (error) {
                          alert(error.message)
                          return
                        }
                        console.log('Signed in with session', data?.session)
                        window.open('/', '_self')
                      } else {
                        const { data, error } = await supabase.auth.signUp({
                          email: document.getElementById('email').value,
                          password: document.getElementById('password').value,
                        })
                        if (error) {
                          alert(error.message)
                          return
                        }
                        alert('Registered! Now, confirm your email address.')
                        window.open('/login', '_self')
                      }
                    }}
                    className="flex w-full justify-center rounded-md border border-transparent bg-gray-700 py-2 px-4 font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    {authType === 'login' ? 'Login' : 'Register'} &rarr;
                  </button>
                </div>

                {authType === 'register' && (
                  <div>
                    <p className="text-center">
                      Already have an account?{' '}
                      <a
                        href="/login"
                        className="text-blue-700 hover:underline"
                      >
                        Login
                      </a>
                      .
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export function getServerSideProps({ params }) {
  if (!['register', 'login'].includes(params.auth)) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      authType: params.auth,
    },
  }
}

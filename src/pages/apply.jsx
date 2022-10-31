import { Header } from '@/components/Header'
import Head from 'next/head'
import { getPageData } from '../../lib/utils'

export default function Apply() {
  const { nav, title } = getPageData()
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header nav={nav} active="Apply" />
      <iframe
        title="component"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          border: '0',
          width: '100%',
          height: 'calc(100% - 4rem)',
          marginTop: '4rem',
        }}
        src="https://www.usecomponent.com/flow/3ed492a6-ca0d-4d22-bbf9-b100987aac9e"
      />
      <div
        style={{
          width: '100%',
          height: '3rem',
          position: 'fixed',
          left: '0',
          bottom: '0',
          backgroundColor: '#ffffff',
          zIndex: '9999',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: '1px solid #ddd',
        }}
      >
        <p
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            display: 'inline-block',
            height: 'auto',
            fontSize: '90%',
            color: '#333333',
          }}
        >
          &copy; DropoutFund {new Date().getFullYear()}
        </p>
      </div>
    </>
  )
}

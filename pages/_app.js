import { SessionProvider, getSession } from 'next-auth/react'
import '@/src/assets/sass/main.scss'
import "@/src/assets/dist/styles.css";
import { useRouter } from 'next/router';
import ProductLayout from '@/src/components/product.layout';

function AppSwitchTheme({ children }) {
  const router = useRouter();

  if (router.asPath.startsWith('/product')) {
    return (
      <ProductLayout>
        {children}
      </ProductLayout>
    )
  } else {
    return children;
  }
}

function App(props) {
  let {
    Component,
    pageProps: {
      session,
      ...pageProps
    }
  } = props;
  return (
    <SessionProvider session={session}>
      <AppSwitchTheme>
        <Component {...pageProps} />
      </AppSwitchTheme>
    </SessionProvider>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  const session = await getSession(ctx);

  pageProps = {
    ...pageProps,
    session
  }

  return { pageProps }
}


export default App
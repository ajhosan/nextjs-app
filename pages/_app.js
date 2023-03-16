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

export default function App({ Component, pageProps }) {
  return (
    <AppSwitchTheme>
      <Component {...pageProps} />
    </AppSwitchTheme>
  )
}

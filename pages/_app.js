import 'tailwindcss/tailwind.css'
import {
  QueryClientProvider,
  QueryClient
} from 'react-query';
import Layout from '../components/layout';

const queryClient = new QueryClient() 

function App ({Component, pageProps}) {
  return ( 
    <>
      <QueryClientProvider client={queryClient} >
        <Layout>
          <Component {...pageProps} /> 
        </Layout>
      </QueryClientProvider >
    </>
  )
}

export default App
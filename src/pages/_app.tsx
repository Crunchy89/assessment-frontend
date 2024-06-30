import { Provider } from "react-redux";
import { store } from "@/store/store";
import { AppProps } from 'next/app'; // Import the AppProps type
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
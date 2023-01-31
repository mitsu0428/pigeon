import "ress";
import type { AppProps } from "next/app";
import AuthProvider from "@/components/libs/AuthContext";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </AuthProvider>
  );
}

export default MyApp;

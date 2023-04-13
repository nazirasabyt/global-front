import "../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { AuthProvider } from "../context/auth_context";

function MyApp({ Component, pageProps }) {
  const supportedChainIds = [100, 117];
  const connectors = {
    injected: {},
  };
  return (
    <AuthProvider>
      <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
      >
        <Component {...pageProps} />
        <ToastContainer />
      </ThirdwebWeb3Provider>
    </AuthProvider>
  );
}

export default MyApp;

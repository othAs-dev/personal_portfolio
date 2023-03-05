import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LdUPNQkAAAAAI_pzNEQJE9CUuuTl4pRcc5uv5gh"
      scriptProps={{
        async: false, // optional, default to false,
        defer: true, // optional, default to false
        appendTo: "body", // optional, default to "head", can be "head" or "body",
        nonce: undefined,
      }}
    >
      <Component {...pageProps} />;
    </GoogleReCaptchaProvider>
  );
}

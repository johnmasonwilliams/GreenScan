import type { AppProps, AppType } from "next/app";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  const darkTheme = createTheme({
    palette: {
      primary: { main: "#5DB075" },
      secondary: { main: "#FFF" },
      background: { default: "#FFF" },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </ThemeProvider>
  );
};

export default App;

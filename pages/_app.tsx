import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import type { ThemeConfig } from "antd";
import { ConfigProvider } from "antd";

import "@/styles/globals.scss";

import { SWRProvider } from "@/providers/swr-provider";
import { GlobalProvider } from "@/context/GlobalContext";
import { AdminLayout, RootLayout } from "@/components/Layout";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#1890ff",
  },
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const pathname = usePathname();

  const Layout = pathname.startsWith("/admin") ? AdminLayout : RootLayout;

  return (
    <SessionProvider session={session}>
      <SWRProvider>
        <GlobalProvider>
          <ConfigProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ConfigProvider>
        </GlobalProvider>
      </SWRProvider>
    </SessionProvider>
  );
}

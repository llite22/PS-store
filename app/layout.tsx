"use client";

import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";
import { store } from "@/redux/store";
import "@/styles/globals.scss";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className="wrapper">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}

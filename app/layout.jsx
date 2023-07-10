import "./globals.css";

import Navbar from "@/components/Nav";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";


export const metadata = {
  title: "e-com",
scription: "Discover the best e-com products on the web",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <main >
          <div className="">

          

          {children}
          
          

          </div>
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
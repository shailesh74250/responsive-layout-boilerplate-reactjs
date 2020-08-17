import React from 'react';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
        <Showcase />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;

import PropTypes from 'prop-types';

import Footer from '../Footer';
import Header from '../Header';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;

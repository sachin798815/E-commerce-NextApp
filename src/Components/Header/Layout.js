import NavbarComponent from './NavbarComponent'; 

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

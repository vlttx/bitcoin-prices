import Navbar from "./Navbar";

const Layout = props => (
  <div>
    {" "}
    <Navbar />
    {props.children}
  </div>
);

export default Layout;

//props are for pages
// props.children are where pages will output

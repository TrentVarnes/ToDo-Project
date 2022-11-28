/**
 * This is the Layout component for the task tracker app
 */

import NavBar from "./NavBar";

const Layout = ({children}) => (
    <>
    <NavBar />
    <main>{children}</main>
    </>
)

export default Layout;
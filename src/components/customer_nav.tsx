import { Nav, NavLink } from './Nav'

const CustomerNav = () => {
  return (
    <Nav>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/about">AboutUs</NavLink>
    <NavLink href="/services">Services</NavLink>
    <NavLink href="/callcenter">CallCenter</NavLink>
    <NavLink href="/portfolio">Portfolio</NavLink>
    <NavLink href="/admin">Portal</NavLink>
    <NavLink href="/contactus">ContactUs</NavLink>
  </Nav>
  )
}

export default CustomerNav
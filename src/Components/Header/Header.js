import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/**
 * The header of the app
 */
export default function Header({ theme }) {
    return (
        <Navbar variant={theme} style={{ zIndex: '1' }}>
            <Navbar.Brand className='ms-4'>
                <img
                    src='/TypeX/logo-cropped.png'
                    width='30'
                    height='30'
                    className='d-inline-block align-top me-2'
                />
                TypeX
            </Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link href='https://m7kra.github.io'>M7kra</Nav.Link>
            </Nav>
        </Navbar>
      );
}
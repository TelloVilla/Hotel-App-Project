import Link from 'next/link'
import { Form, FormControl, Button, Dropdown, NavDropdown, NavDropdownItem, FormCheck} from 'react-bootstrap'

export default function HeadBar(){

    return(
        <nav className="navbar-custom navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Hotel App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link active" aria-current="page" >Home</a></Link>

                        </li>
                        <li className="nav-item">
                            <Link href="/testPage"><a className="nav-link active" aria-current="page" >testPage</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/reservations"><a className="nav-link active" aria-current="page" >Reservations</a></Link>
                        </li>

                    </ul>
                    <NavDropdown variant="light" className="m-1" id="search-options" title="Search Options" menuVariant="dark">
                    <Form>
                        <div className="p-3">
                            <FormCheck inline label="Name" name="search-type" type="radio"></FormCheck>
                            <FormCheck inline label="Room Price" name="search-type" type="radio"></FormCheck>
                            <FormCheck inline label="Amenities" name="search-type" type="radio"></FormCheck>
                        </div>
                        <div className="p-3">
                            <FormCheck inline label="Pool" name="amenities-available" type="checkbox"></FormCheck>
                            <FormCheck inline label="Office" name="amenities-available" type="checkbox"></FormCheck>
                            <FormCheck inline label="Gym" name="amenities-available" type="checkbox"></FormCheck>
                            <FormCheck inline label="Spa" name="amenities-available" type="checkbox"></FormCheck>

                        </div>
                    </Form>
                </NavDropdown>
                    <Form className="d-flex">
                    <FormControl 
                    type="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-light">Search</Button>
                </Form>
                

                </div>
                
            </div>

        </nav>
    )

}
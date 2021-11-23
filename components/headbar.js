import Link from 'next/link'
import router from 'next/router';
import { useState } from 'react';
import { Form, FormControl, Button, NavDropdown, FormCheck, InputGroup, Offcanvas} from 'react-bootstrap'
import Hotel from './hotel';

export default function HeadBar(props){
    const [search, setSearch] = useState("");
    const [results, setResults] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const fetchByAmen = async (amenities) =>{
        const res = await fetch("/api/getHotelbyAmenities", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(amenities)
        });
        if(res.ok){
            const data = await res.json()
            setResults(data.map((h, i) => <Hotel key={i} hotel={h} mode="book"></Hotel>))
        }else{
            setResults(<h3>No Results</h3>)
        }
        
        setShow(true);
    }
    const fetchByPrice = async (search) =>{
        const res = await fetch("/api/getHotelByPrice", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(search)
        });
        if(res.ok){
            const data = await res.json()
            setResults(data.map((h, i) => <Hotel key={i} hotel={h} mode="book"></Hotel>))
        }else{
            setResults(<h3>No Results</h3>)
        }
        
        setShow(true);
    }
    const fetchByName = async (search) =>{
        const res = await fetch("/api/getHotelsByName", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(search)
        });
        if(res.ok){
            const data = await res.json()
            setResults(data.map((h, i) => <Hotel key={i} hotel={h} mode="book"></Hotel>))
        }else{
            setResults(<h3>No Results</h3>)
        }
        
        setShow(true);
    }
    function handleToggle(e){
        let panel = document.getElementById("amen-panel");
        let searchBar = document.getElementById("search-bar")
        
        if(e.target.id == "amen-toggle"){
            panel.style.display = "block";
            searchBar.value = "Searching by Amenities"
            searchBar.setAttribute("disabled", true);
        }else{
            panel.style.display = "none";
            searchBar.removeAttribute("disabled")
            searchBar.value = "";
        }

    }
    const onLogout = async(e) => {
        const response = await fetch("api/logout");
        if(response.ok){
          return router.push("/")
        }
      }
    function handleSearch(e){
        e.preventDefault();
        let searchType = document.getElementsByName("search-type");
        let searchBy;
        for(let i = 0; i < searchType.length; i++){
            if(searchType[i].checked){
                searchBy = searchType[i].value;
                break;
            }
            
        }

        if(searchBy == "amen"){
            let panel = document.getElementsByName("amenities-available");
        let amenities = {
            pool: false,
            spa: false,
            gym: false,
            office: false
        }
        for(let i = 0; i < panel.length; i++){
            if(panel[i].value == "pool" && panel[i].checked){
                amenities.pool = true;
            }else if(panel[i].value == "spa" && panel[i].checked){
                amenities.spa = true;

            }else if (panel[i].value == "gym" && panel[i].checked){
                amenities.gym = true;

            }else if (panel[i].value == "office" && panel[i].checked){
                amenities.office = true;
            }

        }
        
        fetchByAmen(amenities);

        }else if(searchBy == "name"){
            fetchByName(search);

        }else if(searchBy == "price"){
            fetchByPrice(search);

        }
        

    }

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
                            <Link href="/userPage"><a className="nav-link active" aria-current="page" >Profile</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/reservations"><a className="nav-link active" aria-current="page" >Reservations</a></Link>
                        </li>

                    </ul>
                    <NavDropdown variant="light" className="m-1" id="search-options" title="Search Options" menuVariant="dark">
                    <Form>
                        <InputGroup className="p-3" onClick={handleToggle}>
                            <FormCheck inline label="Name" value="name" name="search-type" type="radio"></FormCheck>
                            <FormCheck inline label="Room Price (Less Than)" value="price" name="search-type" type="radio"></FormCheck>
                            <FormCheck inline id="amen-toggle" value="amen" label="Amenities" name="search-type" type="radio"></FormCheck>
                        </InputGroup>
                        <InputGroup className="p-3" id="amen-panel">
                            <FormCheck inline label="Pool" value="pool" name="amenities-available" type="checkbox"></FormCheck>
                            <FormCheck inline label="Office" value="office" name="amenities-available" type="checkbox"></FormCheck>
                            <FormCheck inline label="Gym" value="gym" name="amenities-available" type="checkbox"></FormCheck>
                            <FormCheck inline label="Spa" value="spa" name="amenities-available" type="checkbox"></FormCheck>

                        </InputGroup>
                    </Form>
                </NavDropdown>
                    <Form className="d-flex" onSubmit={handleSearch}>
                    <FormControl 
                    type="Search"
                    className="me-2"
                    id="search-bar"
                    aria-label="Search"
                    onChange={e => setSearch(e.target.value)}
                    />
                    <Button type="submit" variant="outline-light">Search</Button>
                    {props.loggedIn && <Button onClick={onLogout} variant="outline-light">Logout</Button>}
                </Form>
                

                </div>
                <Offcanvas show={show} placement="end" onHide={handleClose} className="m-2">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Search Results</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {results}
                    </Offcanvas.Body>
                </Offcanvas>
                
            </div>

        </nav>
    )

}
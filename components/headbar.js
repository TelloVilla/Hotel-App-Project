import Link from 'next/link'
import { Form, FormControl, Button, Dropdown, NavDropdown, NavDropdownItem, FormCheck, InputGroup} from 'react-bootstrap'

export default function HeadBar(){
    function handleToggle(e){
        let panel = document.getElementById("amen-panel");
        
        if(e.target.id == "amen-toggle"){
            panel.style.display = "block";
        }else{
            panel.style.display = "none";
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
        const fetchData = async () =>{
            const res = await fetch("/api/getHotelbyAmenities", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(amenities)
            });
            const data = await res.json()
            console.log(data);
        }
        fetchData();

        }else if(searchBy == "name"){

        }else if(searchBy == "price"){

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
                            <Link href="/testPage"><a className="nav-link active" aria-current="page" >testPage</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/reservations"><a className="nav-link active" aria-current="page" >Reservations</a></Link>
                        </li>

                    </ul>
                    <NavDropdown variant="light" className="m-1" id="search-options" title="Search Options" menuVariant="dark">
                    <Form>
                        <InputGroup className="p-3" onClick={handleToggle}>
                            <FormCheck inline label="Name" value="name" name="search-type" type="radio"></FormCheck>
                            <FormCheck inline label="Room Price" value="price" name="search-type" type="radio"></FormCheck>
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
                    <Form className="d-flex">
                    <FormControl 
                    type="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button onClick={handleSearch} variant="outline-light">Search</Button>
                </Form>
                

                </div>
                
            </div>

        </nav>
    )

}
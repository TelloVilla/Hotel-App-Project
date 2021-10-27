import Link from 'next/link'

export default function Header(){

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
                            <Link href="/user"><a className="nav-link active" aria-current="page" >User Account</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/testPage"><a className="nav-link active" aria-current="page" >testPage</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/reservations"><a className="nav-link active" aria-current="page" >Reservations</a></Link>
                        </li>

                    </ul>

                </div>
            </div>

        </nav>
    )

}
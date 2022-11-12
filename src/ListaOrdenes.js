
import './App.css';
import { Link} from "react-router-dom"

function ListaOrdenes() {
  return (

    <div className="">

    {/* <!-- NAVBAR --> */}
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
            <Link to="/index" className="navbar-brand">

                Gestion Paquetes

            </Link>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link to="/index" className="nav-link active" aria-current="page">

                            Home <span className="visually-hidden">(current)</span>

                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/lista-ordenes" className="nav-link " aria-current="page">

                            Lista de ordenes

                        </Link>
                    </li>
                </ul>
                <div className="dflex my-2 my-lg-0 mx-5">
                <p className="text-light">
                    Nombre de usuario
                </p>
                </div>
                <div className="dflex my-2 my-lg-0">
                    {/* <!-- Boton Logout --> */}
                    <button type="button" className="btn btn-danger" >
                        Logout
                    </button>
                    {/* <!-- Boton Logout --> */}
                </div>
            </div>
    </div>
    </nav>
    {/* <!-- NAVBAR --> */}

        <div className="container mt-5">
            <div className="h2">
                Gestion paquetes | Listado de ordenes
            </div>
            <Link to="/RegistroEnvios" className="text-decoration-none d-md-flex justify-content-md-end">

                Crear Orden

            </Link>

            <div className="card">
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col"># Servicio</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Ciudad de entrega</th>
                            <th scope="col">Direccion de entrega</th>
                            <th scope="col">Estado</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">
                                <Link to="/ActualizacionEnvios" className="text-decoration-none" aria-current="page">

                                    1

                                </Link>
                            </th>
                            <td>01/01/2022</td>
                            <td>Santa Marta</td>
                            <td>Calle 1 #2-3</td>
                            <td>Guardado</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Link to="/ActualizacionEnvios" className="text-decoration-none" aria-current="page">

                                    2

                                </Link>
                            </th>
                            <td>01/01/2022</td>
                            <td>Barranquilla</td>
                            <td>Calle 4 #5-6</td>
                            <td>Cancelado</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Link to="/ActualizacionEnvios" className="text-decoration-none" aria-current="page">

                                    3

                                </Link>
                            </th>
                            <td>01/01/2022</td>
                            <td>Cartagena</td>
                            <td>Calle 7 #8-9</td>
                            <td>Cumplido</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>

    

    
  );
}

export default ListaOrdenes;

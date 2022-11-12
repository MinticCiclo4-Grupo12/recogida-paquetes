
import './App.css';
import { Link} from "react-router-dom"

function RegistroEnvios() {
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
                                <Link to="/ListaOrdenes" className="nav-link " aria-current="page">

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

            <form action="">
                <div className="container mt-3">
                    <div className="card w-50 mx-auto">
                        {/* <!-- CARD --> */}
                        <div className="card-header text-center">
                            {/* <!-- CARD HEADER --> */}
                            <h2 className="card-title">
                                Gestion de paquetes - Registro de ordenes(Recogida)
                            </h2>
                            {/* <!-- CARD HEADER --> */}
                        </div>
                        <div className="card-body ">
                            {/* <!-- CARD BODY --> */}
                            <div className="row">
                                <div className="col">
                                    <label for="" className="form-label">Fecha: </label>
                                    <input type="date" name="" id="" className="form-control"/>
                                </div>
                                <div className="col">
                                    <label for="" className="form-label">Hora: </label>
                                    <input type="time" name="" id="" className="form-control"/>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col">
                                    <label for="" className="form-label">Largo: </label>
                                    <input type="text" name="" id="" className="form-control"/>
                                </div>
                                <div className="col">
                                    <label for="" className="form-label">Ancho: </label>
                                    <input type="text" name="" id="" className="form-control"/>
                                </div>
                                <div className="col">
                                    <label for="" className="form-label">Alto: </label>
                                    <input type="text" name="" id="" className="form-control"/>
                                </div>
                                <div className="col">
                                    <label for="" className="form-label">Peso: </label>
                                    <input type="text" name="" id="" className="form-control"/>
                                </div>
                            </div>
                
                            <div className="mb-3">
                                <div className="" >
                                    <label for="" className="form-label">Direccion de recogida: </label>
                                </div>
                                <div className="c">
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="">
                                    <label for="" className="form-label">Ciudad de recogida</label>
                                </div>
                                <div className="">
                                    <input type="text" name="" id="" list="datalistOptions" className="form-control"/>
                                    <datalist id="datalistOptions">
                                        <option value="Bogota">Bogota</option>
                                        <option value="Medellín">Medellín</option>
                                        <option value="Cali">Cali</option>
                                        <option value="Barranquilla">Barranquilla</option>
                                        <option value="Manizales">Manizales</option>
                                    </datalist>
                                </div>
                                <div className="">
                                    <label for="" className="form-label">Nombre del destinatario: </label>
                                </div>
                                <div className="">
                                    <input type="text" name="" id="" className="form-control"/>
                                </div>
                                <div className="">
                                    <label for="" className="form-label">Cedula/Nit destinatario</label>
                                </div>
                                <div className="">
                                    <input type="text" name="" id="" className="form-control"/>
                                </div>
                                <div className="">
                                    <label for="" className="form-label">Direccion de entrega: </label>
                                </div>
                                <div className="">
                                    <input type="text" name="" id="" className="form-control"/>
                                </div>
                                <div className="">
                                    <label for="" className="form-label">Ciudad de entrega: </label>
                                </div>
                                <div className="">
                                    <input type="text" name="" id="" list="datalistOptions" className="form-control"/>
                                    <datalist id="datalistOptions">
                                        <option value="Bogota">Bogota</option>
                                        <option value="Medellín">Medellín</option>
                                        <option value="Cali">Cali</option>
                                        <option value="Barranquilla">Barranquilla</option>
                                        <option value="Manizales">Manizales</option>
                                    </datalist>
                                </div>
                            </div>
                            
                                {/* <!-- BOTON CREAR ORDEN --> */}
                                <button type="button" className="btn btn-success">
                                    Crear orden
                                </button>
                                {/* <!-- BOTON CREAR ORDEN --> */}
                            
                            {/* <!-- CARD BODY --> */}
                        </div>
                        {/* <!-- CARD --> */}
                    </div>
                    
                </div>
            </form>

    </div>

    

    
  );
}

export default RegistroEnvios;

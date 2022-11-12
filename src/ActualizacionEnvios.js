
import './App.css';
import { Link} from "react-router-dom"

function ActualizacionEnvios() {
  return (

    <div className="">

      {/* {/* <!-- NAVBAR --> */} */}
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
                            {/* {/* <!-- Boton Logout --> */} */}
                            <button type="button" className="btn btn-danger" >
                                Logout
                            </button>
                            {/* {/* <!-- Boton Logout --> */} */}
                        </div>
                    </div>
            </div>
            </nav>
            {/* {/* <!-- NAVBAR --> */} */}


    
    <main>
        {/* {/* <!-- MAIN --> */} */}
        
        <form action="">
        <div class="container mt-3">
            <div class="card w-50 mx-auto">
                {/* <!-- CARD --> */}
                <div class="card-header text-center">
                    {/* <!-- CARD HEADER --> */}
                    <h2 class="card-title">
                        Gestion de paquetes - Registro de ordenes(Recogida)
                    </h2>
                    {/* <!-- CARD HEADER --> */}
                    <label for="" class="h3">Estado: </label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Guardado</option>
                        <option value="1">Cancelado</option>
                        <option value="2">Cumplido</option>
                      </select>
                      
                </div>
                <div class="card-body ">
                    {/* <!-- CARD BODY --> */}
                    <div class="row">
                        <div class="col">
                            <label for="" class="form-label">Fecha: </label>
                            <input type="date" name="" id="" class="form-control"/>
                        </div>
                        <div class="col">
                            <label for="" class="form-label">Hora: </label>
                            <input type="time" name="" id="" class="form-control"/>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col">
                            <label for="" class="form-label">Largo: </label>
                            <input type="text" name="" id="" class="form-control"/>
                        </div>
                        <div class="col">
                            <label for="" class="form-label">Ancho: </label>
                            <input type="text" name="" id="" class="form-control"/>
                        </div>
                        <div class="col">
                            <label for="" class="form-label">Alto: </label>
                            <input type="text" name="" id="" class="form-control"/>
                        </div>
                        <div class="col">
                            <label for="" class="form-label">Peso: </label>
                            <input type="text" name="" id="" class="form-control"/>
                        </div>
                    </div>
        
                    <div class="mb-3">
                        <div class="" >
                            <label for="" class="form-label">Direccion de recogida: </label>
                        </div>
                        <div class="c">
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="">
                            <label for="" class="form-label">Ciudad de recogida</label>
                        </div>
                        <div class="">
                            <input type="text" name="" id="" list="datalistOptions" class="form-control"/>
                            <datalist id="datalistOptions">
                                <option value="Bogota">Bogota</option>
                                <option value="Medellín">Medellín</option>
                                <option value="Cali">Cali</option>
                                <option value="Barranquilla">Barranquilla</option>
                                <option value="Manizales">Manizales</option>
                            </datalist>
                        </div>
                        <div class="">
                            <label for="" class="form-label">Nombre del destinatario: </label>
                        </div>
                        <div class="">
                            <input type="text" name="" id="" class="form-control"/>
                        </div>
                        <div class="">
                            <label for="" class="form-label">Cedula/Nit destinatario</label>
                        </div>
                        <div class="">
                            <input type="text" name="" id="" class="form-control"/>
                        </div>
                        <div class="">
                            <label for="" class="form-label">Direccion de entrega: </label>
                        </div>
                        <div class="">
                            <input type="text" name="" id="" class="form-control"/>
                        </div>
                        <div class="">
                            <label for="" class="form-label">Ciudad de entrega: </label>
                        </div>
                        <div class="">
                            <input type="text" name="" id="" list="datalistOptions" class="form-control"/>
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
                        <button type="button" class="btn btn-success">
                            Actualizar orden
                        </button>
                        {/* <!-- BOTON CREAR ORDEN --> */}
                    
                    {/* <!-- CARD BODY --> */}
                </div>
                {/* <!-- CARD --> */}
            </div>
            
        </div>
    </form>
        
        {/* {/* <!-- MAIN --> */} */}
    </main>

    </div>

    

    
  );
}

export default ActualizacionEnvios;

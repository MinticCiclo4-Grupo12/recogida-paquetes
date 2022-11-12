
import './App.css';

import { Link} from "react-router-dom"

function App2() {
  return (

    <div className="">

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      {/* <!-- NAVBAR --> */}
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
                </ul>
                <div className="dflex my-2 my-lg-0">
                    {/* <!-- Boton login MODAL --> */}
                    
                    <button type="button" className="btn btn-secondary me-3" data-bs-toggle="modal" data-bs-target="#modalId2">
                        Registrarse
                    </button>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalId">
                        Login
                    </button>
                    {/* <!-- Boton login MODAL --> */}
                </div>
            </div>
      </div>
      {/* <!-- NAVBAR --> */}
    </nav>


    
    <main>
      {/* <!-- MAIN --> */}
        
        <div className="container">
            <div className="row text-white bg-dark bg-opacity-50 rounded mt-5">
                <div className="mb-3 p-3">
                    <h2 className="text-center">
                        GESTION DE PAQUETES
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident harum totam possimus, vitae quis atque soluta voluptatibus dolorem inventore similique necessitatibus ex minima. Quibusdam minus error laborum. Itaque, placeat. Quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, enim deserunt. Accusantium, quis sint! Repellat vitae magni earum sunt fuga dicta, modi iste asperiores deserunt expedita, laboriosam tenetur temporibus quod!
                    </p>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId2">
                            Crear cuenta
                        </button>
                    </div>
                </div>

                
            </div>
            <div className="row mt-5">
                <div className="col">
                    <div className="card border border-dark">
                        <div className="card-header text-center">
                            <img src="/static/image/email.png" className="card-img-top w-25" alt="..."/>
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">Soluciones digitales</h5>
                            <p className="card-text">Entregas electronicas, SMS, email masivo, más para publicidad, legales y otros.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border border-dark">
                        <div className="card-header text-center">
                            <img src="/static/image/camion.png" className="card-img-top w-25 mx-auto" alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Soluciones de Transporte y entrega</h5>
                            <p className="card-text">Recogemos en tu puerta y entregamos en el tiempo que quieras.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border border-dark">
                        <div className="card-header text-center">
                            <img src="/static/image/transporte.png" className="card-img-top w-25 mx-auto" alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Soluciones de logistica</h5>
                            <p className="card-text">Optimizamos tu logistica para campañas y tu almacenamiento</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- MAIN --> */}
    </main>

    </div>

    

    
  );
}

export default App2;

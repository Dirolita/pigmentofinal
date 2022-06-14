function ModalGaleria(props){
    return(
        <div className="modal fade" id={props.pm1} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLabel">{props.pm3}</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={props.pm2} width="100%" />
                        <p className="g-modalP">
                    Nombre de la obra:<span><em> {props.pm3}</em></span><br />
                    Autor:<span> {props.pm4}</span><br />
                    Técnica:<span> {props.pm5}</span><br />
                    Dimensión:<span> {props.pm6}</span><br />
                    Año:<span> {props.pm7}</span><br />
                    Precio:<span> {props.pm8}</span>
                </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
    }
    export default ModalGaleria;
    

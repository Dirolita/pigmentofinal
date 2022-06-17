
function ModalPinturas({producto,mid}){
return(
    <div className="modal fade" id={mid} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{producto.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <img src={producto.image} width="100%" />
                    <h2>Precio: $ {producto.price}</h2>
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
export default ModalPinturas;
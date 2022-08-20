import Button from "react-bootstrap/Button";

const Producto = (props) => {
    
    return (
        <>
        <div className="bg-gray-800 text-white p-2 rounded m-1" >
            <img className="rounded-md " src={props.img} alt={props.alt} width="100%" />
            <h1 className="text-sm font-extrabold mt-2"> {props.nombre}</h1>
            <h3 className="text-sm font-extralight">{props.descripcion}</h3>
            <h3 className="text-xs font-thin">{props.productDetail}</h3>
            <h2 className="text-sm font-mono">Precio: ${props.precio}</h2>
            
            
            <Button variant="primary mt-2 ">Ver Más</Button>
            <Button variant="success mt-2 ml-3 ">Comprar</Button>

            <h4 className="text-slate-300 text-sm mt-10 font-thin justify-center">Stock: {props.stock}</h4>

            <p className="font-thin text-xs mt-2">Tags: {props.tags}</p>
        </div>
        
        </>
    );
}

export default Producto;
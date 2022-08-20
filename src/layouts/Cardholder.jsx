import Producto from "../components/Producto";
import NY1 from "../assets/NY1.png";
import NY2 from "../assets/NY2.png";
import NY3 from "../assets/NY3.png";
import SP1 from "../assets/SaoPaulo1.png";
import LA1 from "../assets/LA1.png";
import LA2 from "../assets/LA2.png";
import CH1 from "../assets/Chicago1.png"

function Cardholder() {
  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
      <Producto
        nombre="GRAFFITI BROOKLYN"
        descripcion="Composición de graffiti Neo Yorkino del barrio de Brooklyn."
        productDetail="Marco Negro 50 x 40 | Cristal Polarizado | Despacho Incluido."
        precio="69.990"
        stock="6 Unidades"
        img={NY1}
        alt="ny1"
        tags=" NY | Black & White | USA | Street Art "
      />
      <Producto
        nombre="ICONO DEL POP EN TIMESQUARE"
        descripcion="En la ciudad de las luces y en el barrio del show teatral y musical, aun queda en pie un homenaje a un otrora icono musical."
        productDetail="Marco Negro 50 x 40 | Cristal Polarizado | Despacho Incluido."
        precio="60.990"
        stock="7 Unidades"
        img={NY2}
        alt="ny2"
        tags=" NY | Black & White | USA | Street Art "
      />
      <Producto
        nombre="GRAFFITI FAMOSO DE SOHO"
        descripcion="En uno de los barrios taquillas de New York, se encuentra un graffiti el cual todavia no sabemos quien lo hizo, pero muchos influencers aparecen con el. Le sacamos una buena foto y le dimos el toque visionario."
        productDetail="Marco Negro 50 x 40 | Cristal Polarizado | Despacho Incluido."
        precio="69.990"
        stock="4 Unidades"
        img={NY3}
        alt="ny3"
        tags=" NY | Black & White | USA | Street Art "
      />
      <Producto
        nombre="ARTE BRASILERO | PARQUE IBARAPUERA"
        descripcion="Un parque alucinante ... palmeras ... un museo (de arte moderno) ... pintoresco es un atributo débil para describir un lugar de verdes, sambas, arte y carritos de comida  ."
        productDetail="Marco Negro 80 x 50 | Cristal Polarizado | Despacho Incluido."
        precio="79.990"
        stock="2 Unidades"
        img={SP1}
        alt="sp1"
        tags=" Sao Paulo | Black & White | Brasil | Street Deco "
      />

      <Producto
        nombre="CUANDO LA CIUDAD SE MEZLCA EN NATURALEZA | VENICE BEACH"
        descripcion="Cuando el atractivo natural, la ciudad, y el comercio se juntan. Cuna de la casa de MAUI & SONS, este retrato exhibe el amalgamiento de 3 mundos que confluyen en un solo sector"
        productDetail="Marco Negro 50 x 40 | Cristal Polarizado | Despacho Incluido."
        precio="69.990"
        stock="8 Unidades"
        img={LA1}
        alt="la1"
        tags=" Los Angeles | Black & White | USA | Street & Nature Art "
      />

      <Producto
        nombre="GIGANTOGRAFIA CONTEXTUAL"
        descripcion="Un contexto donde el arte callejero resalta con lujo de detalles, cuando los detalles también son parte del arte"
        productDetail="Marco Negro 80 x 50 | Cristal Polarizado | Despacho Incluido."
        precio="79.990"
        stock="9 Unidades"
        img={LA2}
        alt="la2"
        tags=" Los Angeles | Black & White | USA | Street & Nature Art "
      />

<Producto
        nombre="THE WINDY CITY ICONS"
        descripcion="Iconos de la ciudad de los vientos. Un teatro con historia ... con muchas historias de sus habitantes que tratan de llegar a su casa"
        productDetail="Marco Negro 50 x 40 | Cristal Polarizado | Despacho Incluido."
        precio="79.990"
        stock="0 Unidades"
        img={CH1}
        alt="la2"
        tags=" Chicago | Black & White | USA | Street & Building "
      />



    </div>
  );
}

export default Cardholder;

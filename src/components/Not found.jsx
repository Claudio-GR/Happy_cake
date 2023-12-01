import Bocchi from '../img/Bocchi.jpg'

const Not_found = () => {
    return (
        <>
            <h1>Error 404</h1>
            <h2>Sorry! Al parecer no se pudo cargar esta página!</h2>
            <img src={Bocchi} alt="Not found img" />
        </>
    )
}

export default Not_found
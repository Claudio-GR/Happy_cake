import happy_cake from '../img/Happy_cake.png'

const Home_page = () => {
    return (
        <>
            <div className="home_title">
                <h1>Bienvenido a Happy Cake</h1>
            </div>
            <p>El lugar de los pasteles felices</p>
            <img src={happy_cake} alt="Happy Cake img" className='Happy_cake_img'/>
        </>
    )
}

export default Home_page
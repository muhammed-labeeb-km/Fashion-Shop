const Hero = () =>{
    return (
    <main className="hero container">
        <div className="hero-content">
            <h1 className="matte">you deserve <h1 className="better"> BETTER </h1></h1>
            <p className="descr">Indulge in a premium facewash for a better you. Discover the difference as our formula deeply cleanses and revitalizes, ensuring you deserve the best care. Elevate your routine today and reveal radiant skin</p>
            <div className="hero-btn">
                <button className="h-btn">Shop Now</button>
                <button className="h-btn secondary"> Details</button>
            </div>
        </div>


        <div className="hero-image">
        <img src="/images/shampoo.png" alt="hero-image" height={600}></img>
        </div>
    </main>
    );
}; 

export default Hero;
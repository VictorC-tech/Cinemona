function Footer() {
    return ( 
        <footer className="flex justify-around text-white bg-red-700 p-8 mt-5">
            <div className="flex flex-col">
            <h1 className="text-4xl">Cinemona+</h1>
            <span>Amet minim mollit non deserunt ullamco est sit  <br />aliqua dolor do amet sintelit officia consequat</span>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl">Connect with us</h2>
                <div className="flex flex-row space-x-2.5">
                    <img src="/instagram.png" alt="instagram" />
                    <img src="/github.png" alt="github" />
                    <img src="/whatsapp.png" alt="whatsapp" />
                    <img src="/linkedin.png" alt="linkedin" />
                </div>
            </div>

        </footer>
    );
}

export default Footer;
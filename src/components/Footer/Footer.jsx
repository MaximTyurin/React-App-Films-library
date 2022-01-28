import "./Footer.scss"

function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
            </div>
        </footer>
    );
}

export default Footer;
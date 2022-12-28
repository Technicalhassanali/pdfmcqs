import Head from "next/head";
import Link from "next/link";
// import "../styles/Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <h3>MCQs</h3>
                <p>Improve your communication skills, IT knowledge, and more with our comprehensive MCQs. Test your understanding of PPSC, data structure, and other subjects with our challenging questions and detailed explanations.</p>
                <ul className="socials">
                    <li><Link href="#"><i class="fab fa-facebook-square"></i></Link></li>
                    <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                    <li><Link href="#"><i className="fa fa-google-plus"></i></Link></li>
                    <li><Link href="#"><i className="fa fa-youtube"></i></Link></li>
                    <li><Link href="#"><i className="fa fa-linkedin-square"></i></Link></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy;2021 <a href="#">Hassan Ali</a>  </p>
                <div className="footer-menu">
                    <ul className="f-menu">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/About">About</Link></li>
                        <li><Link href="/Contact">Contact</Link></li>
                        <li><Link href="/">Blog</Link></li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer;
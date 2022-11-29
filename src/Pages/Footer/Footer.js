import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="text-black grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 footer p-6 mt-5 bg-white">
            <div>
                
                <p>Laptop Market<br />Providing reliable tech since 2022</p>
            </div>
            <div>
                <span className="footer-title text-black">Product</span>
                <Link className="link link-hover text-black">Hp Brand</Link>
                <Link className="link link-hover text-black">Lenovo Brand</Link>
                <Link className="link link-hover text-black">Toshiba Brand</Link>
                <Link className="link link-hover text-black">Apple Brand</Link>
            </div>
            <div>
                <span className="footer-title text-black">Company</span>
                <Link className="link link-hover text-black">About us</Link>
                <Link className="link link-hover text-black">Contact</Link>
                <Link className="link link-hover text-black">Jobs</Link>
                <Link className="link link-hover text-black">Press kit</Link>
            </div>
            <div>
                <span className="footer-title text-black">Legal</span>
                <Link className="link link-hover text-black">Terms of use</Link>
                <Link className="link link-hover text-black">Privacy policy</Link>
                <Link className="link link-hover text-black">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
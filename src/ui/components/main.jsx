'use client'

import { FaUser, FaLink } from "react-icons/fa";
import { Logo, Text } from "./elements";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { Nav } from "./nav";

const Header = function() {
    const [burger, setBurger] = useState(false);

    function burgerState() {
        setBurger(!burger);
    }

    return (<>
        <header>
            <div className="header-wrapper">
                <div className="burger-button" onClick={burgerState}>
                    <span className={clsx(
                    'burger-rect',
                    {
                        'burger-rect1' : burger === true,
                    }
                    )}></span>
                    <span className={clsx(
                    'burger-rect',
                    {
                        'burger-rect2' : burger === true,
                    }
                    )}></span>
                    <span className={clsx(
                    'burger-rect',
                    {
                        'burger-rect3' : burger === true,
                    }
                    )}></span>
                </div>
                <Link href='/' className="logo-container">
                    <Logo />
                </Link>
                <div className="header-profile">
                    <FaUser />
                    <Text style='p'>Nickname</Text>
                </div>
            </div>
        </header>
        <ul className={clsx(
            'burger-nav',
            {
                'burger-open' : burger === true,
            }
        )}>
            <Nav />
        </ul>
    </>)
}

const Footer = function() {
    return (<>
        <footer>
            <div className="footer-wrapper">
                <ul className="footer-nav">
                    <Nav />
                </ul>
                <Link href='/' className="logo-container">
                    <Logo />
                </Link>
                <Link href='/links' className="footer-links">
                    <FaLink />
                    <Text style='sm'>Ссылки</Text>
                </Link>
            </div>
        </footer>
    </>)
}

export { Header, Footer }
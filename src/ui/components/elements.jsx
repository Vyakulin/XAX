'use client';

import { montserrat, comfortaa } from '@/ui/fonts';
import { FaCheck } from "react-icons/fa";

const Text = function(props){
    const {
        style = 'p',
        children
    } = props;

    switch (style) {
        case 'h1':
            return (<>
                <h1 className={`${comfortaa.className} h1`}>{children}</h1>
            </>);
        case 'h2':
            return (<>
                <h2 className={`${montserrat.className} h2`}>{children}</h2>
            </>);
        case 'h3':
            return (<>
                <h3 className={`${montserrat.className} h3`}>{children}</h3>
            </>);
        case 'p':
            return (<>
                <p className={`${montserrat.className} p`}>{children}</p>
            </>);
        case 'sm':
            return (<>
                <p className={`${montserrat.className} sm`}>{children}</p>
            </>);
        case 'mn':
            return (<>
                <p className={`${montserrat.className} mn`}>{children}</p>
            </>);
    }
}

const Button = function(props) {
    const {
        children,
        style = 'color',
        text = 'h3',
    } = props;

    return (<>
        <button
            className={`bt-${style} ${text} ${montserrat.className}`}
        >
            {children}
        </button>
    </>)
}

const Input = function(props) {
    const {
        children,
        style = 'border',
        text = 'h3',
        id,
        type = 'text',
        value,
        name
    } = props;

    switch (type) {
        case 'text':
            return (<>
                <label htmlFor={id} placeholder={children} className={`in-${style} ${text} ${montserrat.className}`}>
                    <input type="text" name={id} id={id} placeholder='' />
                </label>
            </>);
        case 'checkbox':
            return (<>
                <label htmlFor={id} className={`checkbox`}>
                    <input type="checkbox" name={id} id={id} value={value} />
                    <FaCheck />
                </label>
            </>);
        case 'radio':
            return (<>
                <label htmlFor={id} className={`radio`}>
                    <input type="radio" name={name} id={id} value={value} />
                </label>
            </>);
        case 'toggle':
            return (<>
                <label htmlFor={id} className={`toggle`}>
                    <input type="checkbox" name={id} id={id} value={value} />
                    <span></span>
                </label>
            </>);
    }
}

const Logo = function() {
    return (<>
        <svg className='logo' width="64.000000" height="64.000000" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path id="path" d="M6.09524 22.7097C6.09524 19.8592 8.40602 17.5484 11.2565 17.5484L52.5469 17.5484C55.3973 17.5484 57.7081 19.8592 57.7081 22.7097L57.7081 38.5308C57.7081 43.5455 56.6268 47.9663 54.4639 51.7932C52.3502 55.6202 49.3764 58.6115 45.5423 60.7668C41.7081 62.9224 37.1613 64 31.9017 64C26.6913 64 22.1444 62.9224 18.2611 60.7668C14.427 58.6115 11.4286 55.6202 9.26575 51.7932C7.15208 47.9663 6.09524 43.5455 6.09524 38.5308L6.09524 22.7097ZM21.063 28.2375C18.2125 28.2375 15.9017 30.5483 15.9017 33.3988L15.9017 38.0029C15.9017 41.0822 16.5408 43.7434 17.8187 45.9868C19.146 48.2742 21.0138 50.0338 23.4224 51.2655C25.831 52.5411 28.6574 53.1788 31.9017 53.1788C35.1951 53.1788 38.0215 52.5411 40.381 51.2655C42.7895 50.0338 44.6328 48.2742 45.9109 45.9868C47.2381 43.7434 47.9017 41.0822 47.9017 38.0029L47.9017 33.3988C47.9017 30.5483 45.5909 28.2375 42.7404 28.2375L21.063 28.2375Z" fill="#E8E8E8" fillOpacity="1.000000" fillRule="nonzero"/>
            <path id="path" d="M25.7081 6.19354C25.7081 2.77295 22.9352 0 19.5146 0C16.094 0 13.321 2.77295 13.321 6.19354C13.321 9.61414 16.094 12.3871 19.5146 12.3871C22.9352 12.3871 25.7081 9.61414 25.7081 6.19354Z" fill="#E8E8E8" fillOpacity="1.000000" fillRule="nonzero"/>
            <path id="path" d="M50.4823 6.19354C50.4823 2.77295 47.7094 0 44.2888 0C40.8682 0 38.0952 2.77295 38.0952 6.19354C38.0952 9.61414 40.8682 12.3871 44.2888 12.3871C47.7094 12.3871 50.4823 9.61414 50.4823 6.19354Z" fill="#E8E8E8" fillOpacity="1.000000" fillRule="nonzero"/>
        </svg>
    </>)
}

export { Button, Text, Input, Logo}
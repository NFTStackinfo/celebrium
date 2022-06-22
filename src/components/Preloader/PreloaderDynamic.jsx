import React from 'react';
import {LoaderStyle} from './Preloader.style';

const Preloader = ({ onLoad, className }) => {
    const [count, setCount] = React.useState(0);
    const [loaded, setLoaded] = React.useState(false);
    const counter = React.useRef(0);

    React.useEffect(() => {
        let images = document.querySelectorAll('img');
        images.forEach((img) => {
            if (img.complete) {
                incrementCounter(images.length);
            } else {
                img.addEventListener('load', () => incrementCounter(images.length));
            }
        });
        return () => {
            setCount(0);
            counter.current = 0;
        };
    }, []);

    function incrementCounter(len) {
        counter.current++;
        if (counter.current === len) {
            setCount(100);
            setTimeout(() => {
                setLoaded(true);
            }, 400);
        } else {
            setCount((counter.current * 100) / 80);
        }
    }
    React.useEffect(() => {
        if (loaded) {
            setTimeout(() => {
                if (onLoad) {
                    onLoad();
                }
            }, 400);
        }
    }, [loaded, onLoad]);

    return loaded ? null : (
        <LoaderStyle className={className}>
            <div className="content">
                <img src="logo.svg" alt="Logo" />
                <div className="progress">
                    <div
                        className={`progress-inner ${count > 5 ? "box-shadow" : ""}`}
                        style={{ width: `${count}%` }}
                    />
                </div>
                <div className="percent">
                    <p>{count.toFixed()}%</p>
                </div>
            </div>
        </LoaderStyle>
    );
}

export default Preloader;

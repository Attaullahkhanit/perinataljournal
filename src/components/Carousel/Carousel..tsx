"use client"
import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const slides = [
    {
        image: '/PMF logo yuvarlak trans.png.png',
        link: '/News/Detail/publisher',
        title: 'Publisher',
        description: 'info@perinatalmedicine.org',
    },
    {
        image: '/bu.jpg.jpg',
        link: '/News/Detail/wspm-online-courses',
        title: 'WSPM Online Courses',
        description: 'WSPM organizes online training courses for Perinatal Expert and Obstetrician',
    },
    // Add more slides if needed
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length); // Circular logic
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length); // Circular logic
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length); // Circular logic
    };

    return (
        <div className={styles.carouselContainer}>
            <div
                className={styles.carouselInner}
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div className={styles.carouselItem} key={index}>
                        <img src={slide.image} alt={slide.title} />
                        <a href={slide.link}>{slide.title}</a>
                        <p>{slide.description}</p>
                    </div>
                ))}
            </div>

            <div className={styles.carouselFooter}>
                <div className={styles.carouselDots}>
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${index === current ? styles.active : ''}`}
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>

                <div className={styles.carouselControlsRight}>
                    <button onClick={prevSlide} className={`${styles.controlBtn} ${styles.smallBtn}`}>‹</button>
                    <button onClick={nextSlide} className={`${styles.controlBtn} ${styles.smallBtn}`}>›</button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;

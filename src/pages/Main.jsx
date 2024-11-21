import MovieIcon from '@mui/icons-material/Movie';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { useState, useEffect, useRef } from 'react';
import { ProductCard } from '../components/ProductCard';

export const Main = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [artIsVisible, setArtIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const artRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setArtIsVisible(true);
                    } else {
                        setArtIsVisible(false);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (artRef.current) {
            observer.observe(artRef.current);
        }

        return () => {
            if (artRef.current) {
                observer.unobserve(artRef.current);
            }
        };
    }, []);

    return (
        <div className="mainWrapper">
            <div className="mainContainer">
                <div className="imageOverlay">
                    <div className="middleBrandName">
                        <span>Bardak</span>
                        <span>Movie</span>
                        <span>Studios</span>
                    </div>
                    <div className="textContainer">
                        <p>
                            A new reliable cinema studio created by university students
                        </p>
                    </div>
                </div>
            </div>
            <div className="whyChooseUs">
                <div className="imageOverlay">
                    <div className='details'></div>
                    <span ref={sectionRef} className={`section ${isVisible ? 'show' : ''}`}>Why Choose Us</span>
                    <div ref={sectionRef} className={`spanWrapper ${isVisible ? 'show' : ''}`}>
                        <div className="container">
                            <MovieIcon sx={{ color: 'white' }} />
                            <span>Quality</span>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="container">
                            <MovieFilterIcon sx={{ color: 'white' }} />
                            <span>Quality</span>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="container">
                            <HighQualityIcon sx={{ color: 'white' }} />
                            <span>Quality</span>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="container">
                            <TheaterComedyIcon sx={{ color: 'white' }} />
                            <span>Quality</span>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="creativeCinema">
                <div className="imageOverlay">
                    <span ref={artRef} className={`spanWrapper ${artIsVisible ? 'show' : ''}`}>Creative Cinema Arts</span>
                    <div ref={artRef} className={`section ${artIsVisible ? 'show' : ''}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perspiciatis cupiditate ipsam.
                        Amet accusamus, iste laudantium, quis eveniet cupiditate sint minima veniam fuga dolores ducimus at deserunt? Eligendi, numquam doloremque.
                    </div>
                </div>
            </div>
            <div className="latestProducts">
                <div className="imageOverlay">
                    <span>Our Latest Products</span>
                    <div className='products'>
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
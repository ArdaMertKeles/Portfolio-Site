import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import profilePhoto from '../img/blank-profile.webp'
import icon from '../img/icon.png'
import { Link } from 'react-router-dom';

export const About = () => {

    return (
        <div className="aboutWrapper">
            <div className="imageOverlay">
                <div className="container">
                    <img src={icon} draggable='false' alt="" />
                    <div className="details">
                        <span>Bardak Movie Studios</span>
                        <p>A new enterprising movie studio.</p>
                    </div>
                    <div className="refs">
                        <Link><InstagramIcon /></Link>
                        <Link to={'https://www.youtube.com/channel/UChRaCl9uSNojdkfK9E2eKgA'}><YouTubeIcon /></Link>
                    </div>
                </div>
                <div className="container">
                    <img src={profilePhoto} draggable='false' alt="" />
                    <div className="details">
                        <span>Arda Mert Keleş</span>
                        <p>Cinema and TV Student, Actor, Web Developer.</p>
                    </div>
                    <div className="refs">
                        <Link to={'https://github.com/ArdaMertKeles'}><GitHubIcon /></Link>
                        <Link><InstagramIcon /></Link>
                    </div>
                </div>
                <div className="container">
                    <img src={profilePhoto} draggable='false' alt="" />
                    <div className="details">
                        <span>Taner Ulutaş</span>
                        <p>Cinema and TV Student, Director.</p>
                    </div>
                    <div className="refs">
                        <Link><InstagramIcon /></Link>
                    </div>
                </div>
                <div className="container">
                    <img src={profilePhoto} draggable='false' alt="" />
                    <div className="details">
                        <span>Okan Özbek</span>
                        <p>Cinema and TV Student, Sound Director, Musician.</p>
                    </div>
                    <div className="refs">
                        <Link><InstagramIcon /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
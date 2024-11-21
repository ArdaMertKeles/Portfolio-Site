import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export const ContactUs = () => {

    return (
        <div className="contactUsWrapper">
            <div className="imageOverlay">
                <div className="contactUs">
                    <h3>Contact Us</h3>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, consectetur.</span>
                </div>
                <div className="bottomContainer">
                    <div className="contactDetails">
                        <div className="detailContainer">
                            <span className='svgSpan'><LocationOnIcon /></span>
                            <div className="details">
                                <span>Adress</span>
                                <p>Türkiye, Antalya</p>
                            </div>
                        </div>
                        <div className="detailContainer">
                            <span className='svgSpan'><PhoneIcon /></span>
                            <div className="details">
                                <span>Phone</span>
                                <p>0555-555-55-55</p>
                            </div>
                        </div>
                        <div className="detailContainer">
                            <span className='svgSpan'><EmailIcon /></span>
                            <div className="details">
                                <span>E-Mail</span>
                                <p>bardakmoviestudios@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="sendMessage">
                        <span>Send Message</span>
                        <form action="">
                            <input className='textInput' type="text" placeholder="Full Name" />
                            <input className='textInput' type="text" placeholder="E-Mail" />
                            <input className='textInput' type="text" placeholder="Your Message" />
                            <input className='submitBtn' type="submit" value={'Send'} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
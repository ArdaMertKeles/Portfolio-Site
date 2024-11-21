import bardakMovie from '../video/bardak.mp4'

export const ProductCard = () => {

    return(
        <div className="productCard">
            <video width={'280px'} height={'200px'} controls>
                <source src={bardakMovie} type='video/mp4' />
            </video>
            <div>
                <span>Bardak Director's Cut</span>
                <span>Psychological movie of a young lost man</span>
            </div>
        </div>
    )
}
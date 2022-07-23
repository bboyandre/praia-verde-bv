import './style.scss'
import seta from '../assets/Vector.png'
import estrela from '../assets/Star 1.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Praias = ()=> {
    var settings = {
        // dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <section className="Praias">
            <div className='container'>
                <header className="d-flex justify-content-around Praias-header">
                    <div>
                        <img src={seta} />
                    </div>
                    <div>
                        <p>PRAIA VERDE BV</p>
                    </div>
                    <div>
                        <div className="Praias-circle"></div>
                    </div>
                </header>
                <div className='Praias-body'>
                    <p>Praias</p>
                    <Slider {...settings}>
                        <div className='slide-container d-flex align-items-center'>
                            <div className='Praias-square'></div>
                            <div className='d-flex row ps-2'>
                                <div className='lh-lg'>
                                    Curupira
                                </div>
                                <div className='lh-lg'>
                                    Boa Vista</div>
                                <div className='lh-lg nota'>
                                    Nota: 10 pontos
                                </div>
                            </div>
                        </div>
                        <div className='slide-container d-flex align-items-center'>
                            <div className='Praias-square'></div>
                            <div className='d-flex row ps-2'>
                                <div className='lh-lg'>
                                    Curupira
                                </div>
                                <div className='lh-lg'>
                                    Boa Vista</div>
                                <div className='lh-lg nota'>
                                    Nota: 10 pontos
                                </div>
                            </div>
                        </div>
                        <div className='slide-container d-flex align-items-center'>
                            <div className='Praias-square'></div>
                            <div className='d-flex row ps-2'>
                                <div className='lh-lg'>
                                    Curupira
                                </div>
                                <div className='lh-lg'>
                                    Boa Vista</div>
                                <div className='lh-lg nota'>
                                    Nota: 10 pontos
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <p className='pt-3'>Notícias</p>
                    {/* <div style="text-align:right; width:300px;">powered by <a href="http://www.surfing-waves.com" rel="noopener" target="_blank" style="color:#ccc;font-size:10px">Surfing Waves</a></div>  */}
                </div>
            </div>
        </section>
  )
}

export default Praias
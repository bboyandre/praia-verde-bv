import './style.scss'
import seta from '../assets/Vector.png'
import estrela from '../assets/Star 1.png'

const Praias = ()=> {
    return (
        <div className="Praias">
            <header className="Praias-header">
                <img src={seta} />
                <p>PRAIA VERDE BV</p>
                <div className="Praias-circle"></div>
            </header>
            <section className='Praias-body'>
                <p>Praias</p>
                <div className='Praias-container'>
                    <div className='Praias-square'></div>
                    <div className='Praias-info'>
                        <div>
                            <p>Curupira</p>
                        </div>
                        <p>Boa Vista</p>
                        <div>
                            <img src={estrela} />
                            <img src={estrela} />
                            <img src={estrela} />
                            <img src={estrela} />
                            <img src={estrela} />
                        </div>
                    </div>
                </div>
                <p>Notícias</p>
            </section>
        </div>
  )
}

export default Praias
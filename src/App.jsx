import hero from './assets/hero.svg'
import production from './assets/production.svg'
import delivery from './assets/delivery.svg'

export default function App() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1 style={{fontSize:'52px',marginBottom:'20px'}}>
              Современная фабрика-кухня и производство готовой еды
            </h1>
            <p style={{fontSize:'20px',lineHeight:'1.7',marginBottom:'30px'}}>
              Более 10 лет мы производим готовые обеды, кулинарию, выпечку и кондитерские изделия
              для retail, корпоративного питания и ежедневного потребления.
            </p>
            <a className="button" href="#contact">Связаться с нами</a>
          </div>
          <img src={hero} alt="Производство еды" />
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <img src={production} alt="Производство" />
          <div>
            <h2 style={{fontSize:'40px'}}>О производстве</h2>
            <p style={{fontSize:'18px',lineHeight:'1.8'}}>
              Наше производство площадью 1200 м² ежедневно выпускает более 3500 кг качественной продукции.
              В команде работают 250 профессионалов, а доставка осуществляется собственным транспортом с рефрижераторами.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{fontSize:'40px',marginBottom:'30px'}}>Почему выбирают нас</h2>
          <div className="cards">
            <div className="card">
              <h3>7000+ домохозяйств</h3>
              <p>Ежедневно доверяют нашей готовой еде.</p>
            </div>
            <div className="card">
              <h3>24 кафе-кулинарии</h3>
              <p>Крупнейшая сеть во Владимирской области.</p>
            </div>
            <div className="card">
              <h3>100+ наименований</h3>
              <p>Кулинария, выпечка, кондитерские изделия и начинки.</p>
            </div>
            <div className="card">
              <h3>Без антибиотиков</h3>
              <p>Современные стандарты качества и упаковка в газовой среде.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <h2 style={{fontSize:'40px'}}>Приглашаем к сотрудничеству</h2>
            <p style={{fontSize:'18px',lineHeight:'1.8'}}>
              Мы открыты к сотрудничеству с компаниями, которым требуется организация питания сотрудников,
              корпоративные обеды, а также поставки готовой еды для магазинов, кафе и retail-сетей.
            </p>
          </div>
          <img src={delivery} alt="Доставка" />
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container">
          <h2 style={{fontSize:'42px'}}>Связаться с нами</h2>
          <p style={{fontSize:'20px'}}>
            Обсудим сотрудничество и поставки готовой еды
          </p>

          <div className="contact-buttons">
            <a className="call" href="tel:+79106733767">
              +7 (910) 673-37-67
            </a>

            <a className="mail" href="mailto:beriobed2025@gmail.com">
              beriobed2025@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

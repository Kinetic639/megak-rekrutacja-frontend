import './studentCV.css'

export const StudentCV = () => {
  return (
    <>
      <div className="wrapper">
        <button>Wróć</button>
        <article className="student-cv">

          <article className='student-panel'>
            <section className='student-panel__identity'>
              <div className='wrapper-img'>
                <img src="" alt="" />
              </div>

              <h2>Jan Kowalski</h2>
              <div>jankowalski</div>
            </section>

            <div className='student-panel__contact'>
              <div className='student-panel__phone'>+48 566 072 227</div>
              <div className='student-panel__mail'>jankowalski@gmail.com</div>
            </div>

            <section className='student-panel__about-student'>
              <h4 className='student-panel__about-me-title'>O mnie</h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
              </p>
            </section>

            <div className='student-panel__status-btns'>
              <button className='student-panel__status-btn'>Brak zainteresowania</button>
              <button className='student-panel__status-btn'>Zatrudniony</button>
            </div>

          </article>

          <div>
            <section>
              <h3 className='student-cv__section-title'>Oceny</h3>
              <div className='student-cv__grid'>
                <p className='student-cv__grid-title'>Ocena przejścia kursu</p>
                <div className='student-cv__grid-content'></div>
                <p className='student-cv__grid-title'>Ocena aktywności i zaangażowania na kursie</p>
                <div className='student-cv__grid-content'></div>
                <p className='student-cv__grid-title'>Ocena kodu w projekcie własnym</p>
                <div className='student-cv__grid-content'></div>
                <p className='student-cv__grid-title'>Ocena pracy w zespole w Scrum</p>
                <div className='student-cv__grid-content'></div>
              </div>
            </section>

            <section>
              <h3 className='student-cv__section-title'>Oczekiwanie w stosunku do zatrudnienia</h3>
              <div className='student-cv__grid student-cv__grid--6'>
                <p className='student-cv__grid-title'>Preferowane miejsce pracy</p>
                <div className='student-cv__grid-content'>Biuro</div>
                <p className='student-cv__grid-title'>Docelowe miasto, gdzie chce pracować kandydat</p>
                <div className='student-cv__grid-content'>Warszawa</div>
                <p className='student-cv__grid-title'>Oczekiwany typ kontraktu</p>
                <div className='student-cv__grid-content'>Umowa o pracę</div>
                <p className='student-cv__grid-title'>Oczekiwane wynagrodzenie miesięczne netto</p>
                <div className='student-cv__grid-content'>8 000 zł</div>
                <p className='student-cv__grid-title'>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                <div className='student-cv__grid-content'>TAK</div>
                <p className='student-cv__grid-title'>Komercyjne doświadczenie w programowaniu</p>
                <div className='student-cv__grid-content'>6 miesięcy</div>
              </div>
            </section>

            <section>
              <h3 className='student-cv__section-title'>Edukacja</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </section>

            <section>
              <h3 className='student-cv__section-title'>Kursy</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </section>

            <section>
              <h3 className='student-cv__section-title'>Doświadczenie zawodowe</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </section>

            <section>
              <h3 className='student-cv__section-title'>Portfolio</h3>
              <ul>
                <li><a href="">https://Loremipsum/dolor/sit/amet</a></li>
              </ul>

            </section>

            <section>
              <h3 className='student-cv__section-title'>Projekt w zespole Scrumowym</h3>
              <ul>
                <li><a href="">https://Loremipsum/dolor/sit/amet</a></li>
                <li><a href="">https://Loremipsum/dolor/sit/amet</a></li>
              </ul>
            </section>

            <section>
              <h3 className='student-cv__section-title'>Projekt na zaliczenie</h3>
              <ul>
                <li><a href="">https://Loremipsum/dolor/sit/amet</a></li>
                <li><a href="">https://Loremipsum/dolor/sit/amet</a></li>
              </ul>
            </section>

          </div>
        </article>
      </div>
    </>
  )
}

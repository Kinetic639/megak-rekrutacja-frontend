import './Filters.css';

export const Filters = () => {
  return (
    <>
      <div className="backdrop">
        <article className="filtersPanel">
          <section className='filtersPanel__head'>
            <h2 className='filtersPanel__title'>Filtrowanie</h2>
            <button className='filtersPanel__element'>Wyczyść wszystkie</button>
          </section>

          <section className="filtersPanel__filter">
            <h3 className="filtersPanel__subtitle">Ocena przejścia kursu</h3>
            <ul className="filtersPanel__options-list">
              <li>
                <button className='filtersPanel__element'>
                  <span>5</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>4</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>3</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>2</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>1</span>
                  <img src="" alt="" />
                </button>
              </li>
            </ul>
          </section>

          <section className="filtersPanel__filter">
            <h3 className="filtersPanel__subtitle">Ocena aktywności i zaangażowania w kursie</h3>
            <ul className="filtersPanel__options-list">
              <li>
                <button className='filtersPanel__element'>
                  <span>5</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>4</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>3</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>2</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>1</span>
                  <img src="" alt="" />
                </button>
              </li>
            </ul>
          </section>
          <section className="filtersPanel__filter">
            <h3 className="filtersPanel__subtitle">Ocena kodu w projekcie własnym</h3>
            <ul className="filtersPanel__options-list">
              <li>
                <button className='filtersPanel__element'>
                  <span>5</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>4</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>3</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>2</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>1</span>
                  <img src="" alt="" />
                </button>
              </li>
            </ul>
          </section>
          <section className="filtersPanel__filter">
            <h3 className="filtersPanel__subtitle">Ocena pracy w zespole scrum</h3>
            <ul className="filtersPanel__options-list">
              <li>
                <button className='filtersPanel__element'>
                  <span>5</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>4</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>3</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>2</span>
                  <img src="" alt="" />
                </button>
              </li>
              <li>
                <button className='filtersPanel__element'>
                  <span>1</span>
                  <img src="" alt="" />
                </button>
              </li>
            </ul>
          </section>

          <section className="filtersPanel__filter">
            <h3 className="filtersPanel__subtitle">Preferowane miejsce pracy</h3>
            <ul className="filtersPanel__options-list">
              <li><button className='filtersPanel__element'>Praca zdalna</button></li>
              <li><button className='filtersPanel__element'>Praca w biurze</button></li>
            </ul>
          </section>

          <section className="filtersPanel__filter">
            <h3 className="filtersPanel__subtitle">Oczekiwany typ kontraktu</h3>
            <ul className="filtersPanel__options-list">
              <li><button className='filtersPanel__element'>Umowa o pracę</button></li>
              <li><button className='filtersPanel__element'>B2B</button></li>
              <li><button className='filtersPanel__element'>Umowa Zlecenie</button></li>
              <li><button className='filtersPanel__element'>Umowa o dzieło</button></li>
            </ul>
          </section>

          <section className="filtersPanel__filter">
            <h3 className="filtersPanel__subtitle">Oczekiwane wynagrodzenie miesięczne netto</h3>
            <ul className="filtersPanel__options-list">
              <li>
                <label>
                  Od
                  <input type="number" placeholder="np. 1000"></input>
                </label>
              </li>
              <li>
                <label>
                  Do
                  <input type="number" placeholder='np. 10000'></input>
                </label>
              </li>
            </ul>
          </section>

          <section className="filtersPanel__filter">
            <h3 className="filtersPanel__subtitle">Zgoda na odbycie bezpłatnych praktyk/stażu na początek</h3>
            <ul className="filtersPanel__options-list">
              <li>
                <label>
                  Tak
                  <input type="radio" name="canTakeApprenticeship"></input>
                </label>
              </li>
              <li>
                <label>
                  Nie
                  <input type="radio" name="canTakeApprenticeship"></input>
                </label>
              </li>
            </ul>
          </section>

          <section className="filtersPanel__filter">
            <h3 className="filtersPanel__subtitle">Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu</h3>
            <ul className="filtersPanel__options-list">
              <li>
                <input type="number" id="commercialExp" name="commercialExp" placeholder='0 miesięcy'></input>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </>
  );
};

import './Filters.css';

export const Filters = () => {
  return (
    <>
      <div className="backdrop">
        <article className="filtersPanel">
          <section>
            <h2>Filtrowanie</h2>
            <button>Wyczyść wszystkie</button>
          </section>

          <section className="filter">
            <h3 className="subTitle">Ocena przejścia kursu</h3>
            <ul>
              <li>5</li>
              <li>4</li>
              <li>3</li>
              <li>2</li>
              <li>1</li>
            </ul>
          </section>

          <section className="filter">
            <h3 className="subTitle">Ocena aktywności i zaangażowania w kursie</h3>
            <ul>
              <li>5</li>
              <li>4</li>
              <li>3</li>
              <li>2</li>
              <li>1</li>
            </ul>
          </section>
          <section className="filter">
            <h3 className="subTitle">Ocena kodu w projekcie własnym</h3>
            <ul>
              <li>5</li>
              <li>4</li>
              <li>3</li>
              <li>2</li>
              <li>1</li>
            </ul>
          </section>
          <section className="filter">
            <h3 className="subTitle">Ocena pracy w zespole scrum</h3>
            <ul>
              <li>5</li>
              <li>4</li>
              <li>3</li>
              <li>2</li>
              <li>1</li>
            </ul>
          </section>

          <section className="filter">
            <h3 className="subTitle">Preferowane miejsce pracy</h3>
            <ul>
              <li><button>Praca zdalna</button></li>
              <li><button>Praca w biurze</button></li>
            </ul>
          </section>

          <section className="filter">
            <h3 className="subTitle">Oczekiwany typ kontraktu</h3>
            <ul>
              <li><button>Umowa o pracę</button></li>
              <li><button>B2B</button></li>
              <li><button>Umowa Zlecenie</button></li>
              <li><button>Umowa o dzieło</button></li>
            </ul>
          </section>

          <section className="filter">
            <h3 className="subTitle">Oczekiwane wynagrodzenie miesięczne netto</h3>
            <ul>
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

          <section className="filter">
            <h3 className="subTitle">Zgoda na odbycie bezpłatnych praktyk/stażu na początek</h3>
            <ul>
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

          <section className="filter">
            <h3 className="subTitle">Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu</h3>
            <ul>
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

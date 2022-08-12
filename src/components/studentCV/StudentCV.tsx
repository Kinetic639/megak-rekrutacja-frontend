import { Rating } from '../../components/rating/Rating';
import { LoadingPlaceholder } from '../../components/loadingPlaceholder/LoadingPlaceholder';
import { useGetStudentQuery } from '../../redux/features/apiSlice'
import './studentCV.css';
import ChevronLeft from '../../assets/svg/ChevronLeft';

interface StudentCVProps {
  id: string;
}

export interface StudentData {
  firstName: string;
  lastName: string;
  email: string;
  bio: string | null;
  tel: string | null;
  githubUsername: string | null;
  courseCompletion: number;
  projectDegree: number;
  teamProjectDegree: number;
  courseEngagement: number;
  expectedTypeWork: string;
  targetWorkCity: string | null;
  expectedContractType: string;
  expectedSalary: string | null;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: number;
  education: string | null;
  workExperience: string | null;
  courses: string | null;
  portfolioUrls: string[];
  projectUrls: string[];
  scrumProjectUrls: string[];
}

type keyType<Type extends StudentData> = keyof Type;

type studentDataProp<Type extends StudentData> = keyType<Type>;

type parseStudentDataKey = studentDataProp<StudentData>

export const StudentCV: React.FC<StudentCVProps> = ({ id }) => {
  const { data, isSuccess } = useGetStudentQuery(id);

  const parseStudentData = (prop: parseStudentDataKey) => {
    if (!(typeof data === 'object')) return;
    if (!data?.[prop]) return 'Brak informacji';
    if (prop === 'teamProjectDegree' || prop === 'projectDegree' || prop === 'courseCompletion' || prop === 'courseEngagement') {
      return <Rating rating={data[prop]} />
    }
    if (prop === 'portfolioUrls' || prop === 'projectUrls' || prop === 'scrumProjectUrls') {
      return data[prop].map(url => <li key={url}><a href={url}>{url}</a></li>)
    }

    return `${data[prop]}`;
  }

  return (
    <>
      <div className="wrapper">
        <button className='btn-prev-site'><ChevronLeft />Wróć</button>
        <article className="student-cv">

          <article className='student-panel'>
            {isSuccess ?
              <>
                <section className='student-panel__identity'>
                  <div className='wrapper-img'>
                    <img src="" alt="" />
                  </div>

                  <h2 className='student-panel__student-name'>{`${parseStudentData('firstName')} ${parseStudentData('lastName')}`}</h2>
                  <div>{parseStudentData('githubUsername')}</div>
                </section>

                <div className='student-panel__contact'>
                  <div className='student-panel__phone'>{parseStudentData('tel')}</div>
                  <div className='student-panel__mail'>{parseStudentData('email')}</div>
                </div>

                <section className='student-panel__about-student'>
                  <h4 className='student-panel__about-me-title'>O mnie</h4>
                  <p className='fst-ltr-up'>
                    {parseStudentData('bio')}
                  </p>
                </section>
              </> :
              <LoadingPlaceholder />
            }


            <div className='student-panel__status-btns'>
              <button className='student-panel__status-btn'>Brak zainteresowania</button>
              <button className='student-panel__status-btn'>Zatrudniony</button>
            </div>

          </article>

          <div>
            <section>
              <h3 className='student-cv__section-title'>Oceny</h3>
              <div className='student-cv__grid'>
                {
                  isSuccess ?
                    <>
                      <p className='student-cv__grid-title'>Ocena przejścia kursu</p>
                      <div className='student-cv__grid-content'>{parseStudentData('courseCompletion')}</div>
                      <p className='student-cv__grid-title'>Ocena aktywności i zaangażowania na kursie</p>
                      <div className='student-cv__grid-content'>{parseStudentData('courseEngagement')}</div>
                      <p className='student-cv__grid-title'>Ocena kodu w projekcie własnym</p>
                      <div className='student-cv__grid-content'>{parseStudentData('projectDegree')}</div>
                      <p className='student-cv__grid-title'>Ocena pracy w zespole w Scrum</p>
                      <div className='student-cv__grid-content'>{parseStudentData('teamProjectDegree')}</div>
                    </> :
                    <>
                      <p className='student-cv__grid-title'>Ocena przejścia kursu</p>
                      <p className='student-cv__grid-title'>Ocena aktywności i zaangażowania na kursie</p>
                      <p className='student-cv__grid-title'>Ocena kodu w projekcie własnym</p>
                      <p className='student-cv__grid-title'>Ocena pracy w zespole w Scrum</p>
                      <div className='student-cv__grid-content student-cv__grid-content--placeholder'>
                        <LoadingPlaceholder />
                      </div>
                    </>
                }

              </div>
            </section>

            <section>
              <h3 className='student-cv__section-title'>Oczekiwanie w stosunku do zatrudnienia</h3>
              <div className='student-cv__grid student-cv__grid--6'>
                {
                  isSuccess ?
                    <>
                      <p className='student-cv__grid-title'>Preferowane miejsce pracy</p>
                      <div className='student-cv__grid-content'>{parseStudentData('expectedTypeWork')}</div>
                      <p className='student-cv__grid-title'>Docelowe miasto, gdzie chce pracować kandydat</p>
                      <div className='student-cv__grid-content'>{parseStudentData('targetWorkCity')}</div>
                      <p className='student-cv__grid-title'>Oczekiwany typ kontraktu</p>
                      <div className='student-cv__grid-content'>{parseStudentData('expectedContractType')}</div>
                      <p className='student-cv__grid-title'>Oczekiwane wynagrodzenie miesięczne netto</p>
                      <div className='student-cv__grid-content'>{parseStudentData('expectedSalary')}</div>
                      <p className='student-cv__grid-title'>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                      <div className='student-cv__grid-content'>{parseStudentData('canTakeApprenticeship')}</div>
                      <p className='student-cv__grid-title'>Komercyjne doświadczenie w programowaniu</p>
                      <div className='student-cv__grid-content'>{parseStudentData('monthsOfCommercialExp')}</div>
                    </> :
                    <>
                      <p className='student-cv__grid-title'>Preferowane miejsce pracy</p>
                      <p className='student-cv__grid-title'>Docelowe miasto, gdzie chce pracować kandydat</p>
                      <p className='student-cv__grid-title'>Oczekiwany typ kontraktu</p>
                      <p className='student-cv__grid-title'>Oczekiwane wynagrodzenie miesięczne netto</p>
                      <p className='student-cv__grid-title'>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                      <p className='student-cv__grid-title'>Komercyjne doświadczenie w programowaniu</p>
                      <div className='student-cv__grid-content student-cv__grid-content--placeholder'>
                        <LoadingPlaceholder />
                      </div>
                    </>
                }

              </div>
            </section>

            <section>
              <h3 className='student-cv__section-title'>Edukacja</h3>
              <p className='student-cv__text'>
                {isSuccess ? parseStudentData('education') : <LoadingPlaceholder />}
              </p>
            </section>

            <section>
              <h3 className='student-cv__section-title'>Kursy</h3>
              <p className='student-cv__text'>
                {isSuccess ? parseStudentData('courses') : <LoadingPlaceholder />}
              </p>
            </section>

            <section>
              <h3 className='student-cv__section-title'>Doświadczenie zawodowe</h3>
              <p className='student-cv__text'>
                {isSuccess ? parseStudentData('workExperience') : <LoadingPlaceholder />}
              </p>
            </section>

            <section>
              <h3 className='student-cv__section-title'>Portfolio</h3>
              <ul className='student-cv__list'>
                {isSuccess ? parseStudentData('portfolioUrls') : <LoadingPlaceholder />}
              </ul>

            </section>

            <section>
              <h3 className='student-cv__section-title'>Projekt w zespole Scrumowym</h3>
              <ul className='student-cv__list'>
                {isSuccess ? parseStudentData('scrumProjectUrls') : <LoadingPlaceholder />}
              </ul>
            </section>

            <section>
              <h3 className='student-cv__section-title'>Projekt na zaliczenie</h3>
              <ul className='student-cv__list'>
                {isSuccess ? parseStudentData('projectUrls') : <LoadingPlaceholder />}
              </ul>
            </section>

          </div>
        </article>
      </div>
    </>
  )
}

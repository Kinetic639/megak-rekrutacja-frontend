import { SyntheticEvent, useCallback, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../types/hooks';
import { selectFilters, setFilters } from '../../store/filtersSlice';
import { StarIcon } from '../../assets/svg/StarIcon';
import { Filter } from './Filter';
import { Input, InputI } from './Input';
import './FiltersPanel.css';

export interface activeFiltersI {
  courseCompletion: string[],
  courseEngagement: string[],
  projectDegree: string[],
  teamProjectDegree: string[],
  expectedTypeWork: string[],
  expectedContractType: string[],
  expectedSalaryFrom: string,
  expectedSalaryTo: string,
  canTakeApprenticeship: string,
  monthsOfCommercialExp: string,
  [prop: string]: string[] | string
}

export const FiltersPanel = () => {
  const btnElementsRef = useRef<HTMLButtonElement[]>([]);
  const inputElementsRef = useRef<HTMLInputElement[]>([]);
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);

  const setFilter = useCallback((e: SyntheticEvent) => {
    if (!(e.currentTarget instanceof HTMLButtonElement) && !(e.currentTarget instanceof HTMLInputElement)) {
      return;
    }
    const filter = e.currentTarget.dataset.filter;
    if (!filter) return;
    const value = e.currentTarget.dataset?.value ?? e.currentTarget.value;
    dispatch(setFilters({ filter: filter, value: value }));
  }
    , []);

  const ratingsContents = useCallback((filterName: string) => new Array(5).fill(filterName).map((item, index, arr) => {
    return (
      <button className='filtersPanel__option-btn' key={`${item}${index}`} ref={(e: any) => btnElementsRef.current.push(e)} data-filter={item} data-value={`${arr.length - index}`} onClick={setFilter}>
        <span className='filtersPanel__btn-text'>{arr.length - index}</span>
        <StarIcon classes='star-icon' />
      </button>
    )
  }), []);

  const workPlaceContents = useCallback((filterName: string) => ['Praca zdalna', 'Praca w biurze'].map((item, index) => {
    return (
      <button className='filtersPanel__option-btn' key={`${item}${index}`} ref={(e: any) => btnElementsRef.current.push(e)} data-filter={filterName} data-value={item} onClick={setFilter}>{item}</button>
    )
  }), []);

  const workTypeContents = useCallback((filterName: string) => ['Umowa o pracę', 'B2B', 'Umowa Zlecenie', 'Umowa Zlecenie'].map((item, index) => {
    return (
      <button className='filtersPanel__option-btn' key={`${item}${index}`} ref={(e: any) => btnElementsRef.current.push(e)} data-filter={filterName} data-value={item} onClick={setFilter}>{item}</button>
    )
  }), []);

  const expectedSalaryContents = useCallback((filterName: string) => ([
    { labelText: 'Od', placeholder: 'np. 1000', type: 'number', name: `From` },
    { labelText: 'Do', placeholder: 'np. 10000', type: 'number', name: 'To' }] as InputI[])
    .map((item, index) => {
      const dataProp = { [`data-filter`]: `${filterName}${item.name}` };
      return <Input ref={(e: any) => inputElementsRef.current.push(e)} labelText={item.labelText} placeholder={item.placeholder} name={item.name} type={item.type} key={`${item.labelText}${index}`} dataProp={dataProp} callback={setFilter} />
    }), []);

  const canTakeApprenticeshipContents = useCallback((filterName: string) => ([
    { labelText: 'Tak', type: 'radio', name: 'canTakeApprenticeship', value: 'true' },
    { labelText: 'Nie', type: 'radio', name: 'canTakeApprenticeship', value: 'false' }] as InputI[])
    .map((item, index) => {
      const dataProp = { [`data-filter`]: `${filterName}`, [`data-value`]: `${item.value}` };
      return <Input ref={(e: any) => inputElementsRef.current.push(e)} labelText={item.labelText} name={item.name} type={item.type} key={`${item.labelText}${index}`} dataProp={dataProp} value={item.value} callback={setFilter} />
    }), []);

  const commercialExpContents = useCallback((filterName: string) => ([
    { labelText: '', type: 'number', placeholder: '0 miesięcy', name: 'commercialExp' }] as InputI[])
    .map((item, index) => {
      const dataProp = { [`data-filter`]: `${filterName}` };
      return <Input ref={(e: any) => inputElementsRef.current.push(e)} labelText={item.labelText} placeholder={item.placeholder} name={item.name} type={item.type} key={`${item.name}${index}`} dataProp={dataProp} callback={setFilter} />
    }), []);

  return (
    <>
      <div className="backdrop">
      </div>

      <article className="filtersPanel">
        <section className='filtersPanel__head'>
          <h2 className='filtersPanel__title'>Filtrowanie</h2>
          <button className='filtersPanel__option-btn'>Wyczyść wszystkie</button>
        </section>

        <Filter subTitle='Ocena przejścia kursu' listComponents={ratingsContents('courseCompletion')} />
        <Filter subTitle='Ocena aktywności i zaangażowania w kursie' listComponents={ratingsContents('courseEngagement')} />
        <Filter subTitle='Ocena kodu w projekcie własnym' listComponents={ratingsContents('projectDegree')} />
        <Filter subTitle='Ocena pracy w zespole scrum' listComponents={ratingsContents('teamProjectDegree')} />
        <Filter subTitle='Preferowane miejsce pracy' listComponents={workPlaceContents('expectedTypeWork')} />
        <Filter subTitle='Oczekiwany typ kontraktu ' listComponents={workTypeContents('expectedContractType')} />
        <Filter subTitle='Oczekiwane wynagrodzenie miesięczne netto ' listComponents={expectedSalaryContents('expectedSalary')} />
        <Filter subTitle='Zgoda na odbycie bezpłatnych praktyk/stażu na początek ' listComponents={canTakeApprenticeshipContents('canTakeApprenticeship')}
          classes='filtersPanel__options-list--column' />
        <Filter subTitle='Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu ' listComponents={commercialExpContents('monthsOfCommercialExp')} />

      </article>

    </>
  );
};

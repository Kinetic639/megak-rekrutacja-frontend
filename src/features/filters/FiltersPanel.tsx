import { SyntheticEvent, useCallback, useEffect, useRef } from 'react';
import { StarIcon } from '../../assets/svg/StarIcon';
import { Filter } from './Filter';
import { Input, InputI } from './Input';
import './FiltersPanel.css';
import { useEffectOnce } from 'src/hooks/useEffectOnce';

export const FiltersPanel = () => {

  const btnElementsRef = useRef<HTMLButtonElement[]>([]);
  const inputElementsRef = useRef<HTMLInputElement[]>([]);

  const ratingsContents=useCallback(()=> new Array(5).fill('rating').map((item,index,arr) => {
    return (
      <button className='filtersPanel__option-btn' key={`${item}${index}`} ref={(e:any) => btnElementsRef.current.push(e) }>
      <span className='filtersPanel__btn-text'>{arr.length-index}</span>
      <StarIcon classes='star-icon'/>
    </button>
    )
  }),[]);

  const workPlaceContents=useCallback(()=> ['Praca zdalna', 'Praca w biurze'].map((item, index)=>{
    return (
      <button className='filtersPanel__option-btn' key={`${item}${index}`} ref={(e:any) => btnElementsRef.current.push(e) }>{item}</button>
    )
  }),[]);

  const workTypeContents=useCallback(()=>['Umowa o pracę','B2B', 'Umowa Zlecenie', 'Umowa Zlecenie'].map((item, index)=>{
    return (
      <button className='filtersPanel__option-btn' key={`${item}${index}`} ref={(e:any) => btnElementsRef.current.push(e) }>{item}</button>
    )
  }),[]);

  const expectedSalaryContents=useCallback(()=>([
    {labelText:'Od', placeholder:'np. 1000', type:'number', name:`from`},
     {labelText:'Do', placeholder:'np. 10000',type:'number', name:'to'}]as InputI[])
     .map((item, index)=>{
    return <Input ref={(e:any) => inputElementsRef.current.push(e) } labelText={item.labelText} placeholder={item.placeholder} name={item.name} type={item.type} key={`${item.labelText}${index}`}/>
  }),[]);

 const canTakeApprenticeshipContents=useCallback(()=> ([
  {labelText:'Tak', type:'radio',  name:'canTakeApprenticeship'},
   {labelText:'Nie', type:'radio', name:'canTakeApprenticeship'}]as InputI[])
   .map((item, index)=>{
  return <Input ref={(e:any) => inputElementsRef.current.push(e) } labelText={item.labelText} name={item.name} type={item.type} key={`${item.labelText}${index}`}/>
}),[]);

const commercialExpContents=useCallback(()=> ([
  {labelText:'', type:'number',placeholder:'0 miesięcy',  name:'commercialExp'}]as InputI[])
   .map((item, index)=>{
  return <Input ref={(e:any) => inputElementsRef.current.push(e) } labelText={item.labelText} placeholder={item.placeholder} name={item.name} type={item.type} key={`${item.name}${index}`}/>
}),[]);

  return (
    <>
      <div className="backdrop">
      </div>

        <article className="filtersPanel">
          <section className='filtersPanel__head'>
            <h2 className='filtersPanel__title'>Filtrowanie</h2>
            <button className='filtersPanel__option-btn'>Wyczyść wszystkie</button>
          </section>

          <Filter subTitle='Ocena przejścia kursu' listComponents={ratingsContents()}/>
          <Filter subTitle='Ocena aktywności i zaangażowania w kursie' listComponents={ratingsContents()}/>
          <Filter subTitle='Ocena kodu w projekcie własnym' listComponents={ratingsContents()}/>
          <Filter subTitle='Ocena pracy w zespole scrum' listComponents={ratingsContents()}/>
          <Filter subTitle='Preferowane miejsce pracy' listComponents={workPlaceContents()}/>
          <Filter subTitle='Oczekiwany typ kontraktu ' listComponents={workTypeContents()}/>
          <Filter subTitle='Oczekiwane wynagrodzenie miesięczne netto ' listComponents={expectedSalaryContents()}/>
          <Filter subTitle='Zgoda na odbycie bezpłatnych praktyk/stażu na początek ' listComponents={canTakeApprenticeshipContents()} 
          classes='filtersPanel__options-list--column'/>
          <Filter subTitle='Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu ' listComponents={commercialExpContents()}/>

        </article>
      
    </>
  );
};

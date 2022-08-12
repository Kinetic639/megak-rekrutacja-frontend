import { forwardRef, SyntheticEvent } from "react"

export interface InputI{
    labelText:string,
    placeholder?:string,
    type: 'number'| 'radio',
    name: string,
    value?:string,
    callback:(e:SyntheticEvent)=>void,
    dataProp: {[prop:string]:string}
}

export const Input=forwardRef<HTMLInputElement,InputI>(({labelText, dataProp, callback, ...props},ref)=>{

  const typePropClasses= {
    radio: 'filtersPanel__input--radio ',
    number: 'filtersPanel__input'
  }

  const labelClasses= {
    radio: 'filtersPanel__label--reverse',
    number: 'filtersPanel__label'
  }
  
  return(
            <label className={labelClasses[props.type]}>
                  {labelText}
                  <input ref={ref} className={typePropClasses[props.type]} onChange={callback} {...dataProp} {...props}></input>
            </label>
  )  
})
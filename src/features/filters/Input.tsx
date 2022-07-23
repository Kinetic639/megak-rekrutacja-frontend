export interface InputI{
    labelText:string,
    placeholder?:string,
    type: 'number'| 'radio',
    name: string
}

export const Input:React.FC<InputI> =({labelText, ...props})=>{

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
                  <input className={typePropClasses[props.type]} {...props}></input>
            </label>
  )  
}
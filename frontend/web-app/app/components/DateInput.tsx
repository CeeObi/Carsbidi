import React from 'react'
import { Label, TextInput } from 'flowbite-react'
import { UseControllerProps, useController } from 'react-hook-form'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'



type Props = {
    label:string,
    types?: string,
    showlabel?: boolean
} & UseControllerProps & Partial<ReactDatePickerProps> //& applies to deriving from useControllerProps



function DateInput(props: Props) {
    const  {fieldState, field} = useController({...props, defaultValue:""}) 
  
    return (
    <div className='block'>
        <ReactDatePicker  
                {...props}
                {...field}
                onChange={(value) => field.onChange(value)}
                selected={field.value}
                placeholderText={props.label}
                className = {`rounded-lg w-[100%] flex flex-col ${fieldState.error ? "bg-red-50 border-red-500 text-red-900":
                            (!fieldState.invalid && fieldState.isDirty) ? "bg-green-50 border-green-500 text-green-900":""}
                        `}
            />
            {fieldState.error && (<div className='text-red-50 text-sm'>
                {fieldState.error.message}
            </div>)}
    </div>
  )
}


export default DateInput
import React from 'react'
import { DatePicker, Label, TextInput } from 'flowbite-react'
import { UseControllerProps, useController } from 'react-hook-form'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'

type Props = {
    label:string,
    types?: string,
    showlabel?: boolean
} & UseControllerProps & Partial<ReactDatePickerProps> //& applies to deriving from useControllerProps



function DateInput(props: Props) {
    const  {fieldState,field} = useController({...props, defaultValue:""})
  
  
    return (
    <div className='block'>
        <DatePicker  
                {...props}
                {...field}
                onChange={(value: any) => field.onChange(value)}
                selected={field.value}
                placeholderText={props.label}
                color={fieldState.error ? "failure" : !fieldState.isDirty ? "" : "success"}
                helperText={fieldState.error?.message}
            />
    </div>
  )
}


export default DateInput
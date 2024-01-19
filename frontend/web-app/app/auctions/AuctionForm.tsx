"use client"
import { Button, TextInput } from 'flowbite-react';
import React from 'react'
import { FieldValue, FieldValues, useForm } from 'react-hook-form'
import Input from '../components/Input';

function AuctionForm() {
    const {control, handleSubmit, setFocus, formState:{isValid,isSubmitting,errors,isDirty}} = useForm();

    function onSubmit(data : FieldValues) {
        console.log(data)
    }

  return (
    <form className='flex flex-col mt-3' onSubmit={handleSubmit(onSubmit)}>
        <Input label='Make' name='make' control={control} rules={{required:"Make is required"}} />
        <Input label='Model' name='model' control={control} rules={{required:"Model is required"}} />            
        
        <div className='flex justify-between'>
            <Button outline color='gray'>Cancel</Button>
            <Button type='submit' outline disabled={!isValid} isProcessing={isSubmitting} color='success'>Submit</Button>

        </div>
    </form>
  )
}

export default AuctionForm
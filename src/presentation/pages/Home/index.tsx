"use client"
import { AddressForm, CakeSelector, OrderInformation } from '@/presentation/components'
import * as s from './styled'
import { useFormContext } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { IHome } from './types'

export default function Home({ cache, toast }:IHome) {

  const { watch, handleSubmit } = useFormContext()
  const hasSelectCake = watch('cake')
  const router = useRouter()

  const onSubmit = (e:any) => {
    cache.set('cake', {select: ''})
    toast.showToast('🍰 Em breve seu delicioso bolo será preparado e entregue no seu endereço.!');
    setTimeout(() => router.push('/order-confirm'), 1500); // simulando um tempo de resposta da api
  }
  return (
    <s.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Cake Order Form</h1>
        <p>Order your freshly baked cakes made using only the finest quality natural ingredients</p>
        <hr/>
        <p>Please choose your favorite cake from among the following:*</p>
        <CakeSelector />
        {hasSelectCake && <OrderInformation />}
        {hasSelectCake && <AddressForm />}
        {hasSelectCake && <s.Submit type='submit'   value='Order' />}
      </form>
      {toast.toastContainer}
    </s.Container>
  )
}

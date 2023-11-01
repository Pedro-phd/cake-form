"use client"

import { CheckCircle, ShoppingBasket } from 'lucide-react'
import * as s from './styled'
import Link from 'next/link'
import { IOrder } from './types'
import { useFormContext } from 'react-hook-form'

export default function OrderConfirm({ cache } : IOrder) {
  const { reset, getValues } = useFormContext()
  const {firstName, email} = getValues()

  return(
    <s.Container>
      <s.Header>
        <CheckCircle size={48} color="#68bd00" />
        <h1>Order Confirmation</h1>
      </s.Header>
      <p>
        Dear Mr./Ms {firstName ?? ''}, here is the order confirmation{email && `, also sent to the following email: ${email}`}. Please await the delivery.
      </p>
      <h3>Would you like to place a new order?</h3>
      <Link href="/" scroll={false} onClick={() => reset()}>
        <button >go to new order <ShoppingBasket size={32} color="#ffffff" /></button>
      </Link>
    </s.Container>

  )


}
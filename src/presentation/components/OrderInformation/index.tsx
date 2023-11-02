import * as s from './styled'
import { CustomInput } from "@/presentation/components"
import { Calendar, Clock } from "lucide-react"
import { useFormContext } from 'react-hook-form'

export const OrderInformation = () => {

  const { register, formState: { errors } } = useFormContext()

  return (
    <>
      <s.Title>Order Information</s.Title>
      <s.Container>
        <CustomInput
          label="Name"
          placeholder="First"
          required {...register("firstName")}
          errorMessage={errors?.firstName?.message?.toString()}
        />
        <CustomInput placeholder="Last" {...register("lastName")} />
        <CustomInput
          label="Delivery date"
          placeholder="DD/MM/YYYY"
          endAdornment={<Calendar />}
          mask="date"
          {...register("date")}
          errorMessage={errors?.date?.message?.toString()}
        />
        <CustomInput label="Preferred delivery time" placeholder="HH:MM" endAdornment={<Clock />} mask="hour" {...register("hour")} />
        <CustomInput
          label="Phone"
          placeholder="*** *** ****"
          required mask="phone"
          {...register("phone")}
          errorMessage={errors?.phone?.message?.toString()}
        />
        <CustomInput
          label="Email"
          required 
          hint='To receive the complete receipt'
          placeholder='Email'
          {...register("email")}
          errorMessage={errors?.email?.message?.toString()}
        />
      </s.Container>
    </>
  )
}
import { CustomInput, CustomSelect } from "@/presentation/components"
import { useFormContext } from "react-hook-form"
import { country } from "./const"

import * as s from './styled'

export const AddressForm = () => {

  const { register, setValue} = useFormContext()

  return(
    <s.Container data-testid="address-form">
      <h2>Adress</h2>
      <CustomInput placeholder="Street Address" {...register("address")}/>
      <CustomInput placeholder="Street Address Line 2" {...register("address-two")}/>
      <s.Row>
        <CustomInput placeholder="City" {...register("city")}/>
        <CustomInput placeholder="Region" {...register("region")}/>
        <CustomInput placeholder="Postal / Zip Code" {...register("zip")} mask="zipcode"/>
        <CustomSelect 
          placeholder="Country" 
          items={country} 
          onChange={(e) => setValue("country", e)}
        />
      </s.Row>

    </s.Container>
  )
}
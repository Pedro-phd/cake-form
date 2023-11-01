import Image from "next/image";
import { useFormContext } from "react-hook-form";
import FirstCake from '@/assets/cake1.jpg'
import SecondCake from '@/assets/cake2.jpg'
import ThirdCake from '@/assets/cake3.jpg'
import FourthCake from '@/assets/cake4.jpg'

import * as s from './styled'
import { makeLocalStorageAdapter } from "@/main/factories/cache/make-cache-factory";
import { useEffect } from "react";

export const CakeSelector = () => {
  const { register, setValue } = useFormContext()
  const cache = makeLocalStorageAdapter()
  const setCache = (value: string)  => cache.set('cake', { select: value })

  useEffect(() =>  {
    const data = JSON.parse(cache.get("cake"))
    data?.select && setValue('cake', data?.select)
  }, [])


  return (
    <s.Container>
      <label onClick={() => setCache("first")}>
        <input
          {...register("cake")}
          type="radio"
          value="first"
        />
        <Image src={FirstCake} alt="cake" width={300} height={200} />
      </label>
      <label onClick={() => setCache("second")}>
        <input
          {...register("cake")}
          type="radio"
          value="second"
        />
        <Image src={SecondCake} alt="cake" width={300} height={200} />
      </label>
      <label onClick={() => setCache("third")}>
        <input
          {...register("cake")}
          type="radio"
          value="third"
        />
        <Image src={ThirdCake} alt="cake" width={300} height={200} />
      </label>
      <label onClick={() => setCache("fourth")}>
        <input
          {...register("cake")}
          type="radio"
          value="fourth"
        />
        <Image src={FourthCake} alt="cake" width={300} height={200} />
      </label>
    </s.Container>
  )
}
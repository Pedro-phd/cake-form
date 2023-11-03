import { AddressForm } from '@/presentation/components'
import { faker } from '@faker-js/faker'
import { RenderResult, fireEvent, render } from '@testing-library/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

const makeSut = (component: JSX.Element): RenderResult => {
  const WrapperContext: FC = () => {
    const methods = useForm()
    return (
      <FormProvider {...methods}>
        {component}
      </FormProvider>
    )
  }

  return render(<WrapperContext />)
}

describe('Address form', () => {
  test('Should render component', () => {
    const { getByTestId } = makeSut(<AddressForm />)
    const form = getByTestId('address-form')
    expect(form).toBeInTheDocument()
  })

  test('Should correct values input' , () => {
    const { getByPlaceholderText } = makeSut(<AddressForm />)

    const address = getByPlaceholderText('Street Address')
    const addresstwo = getByPlaceholderText('Street Address Line 2')
    const city = getByPlaceholderText('City')
    const region = getByPlaceholderText('Region')
    const zip = getByPlaceholderText('Postal / Zip Code')

    fireEvent.input(address, {target: {
      value:'any_address',
    }})
    fireEvent.input(addresstwo, {target: {
      value: 'any_address_2',
    }})
    fireEvent.input(city, {target: {
      value: 'any_city',
    }})
    fireEvent.input(region, {target: {
      value: 'any_region',
    }})
    fireEvent.input(zip, {target: {
      value: '0000000',
    }})

    expect(address).toHaveValue('any_address')
    expect(addresstwo).toHaveValue('any_address_2')
    expect(city).toHaveValue('any_city')
    expect(region).toHaveValue('any_region')
    expect(zip).toHaveValue('00000-00')

  })
})
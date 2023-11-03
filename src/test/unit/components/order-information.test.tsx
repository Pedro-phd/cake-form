import { OrderInformation } from '@/presentation/components'
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

describe('Order information', () => {
  test('Should correct values input' , () => {
    const { getByPlaceholderText, getByLabelText } = makeSut(<OrderInformation />)

    const first = getByLabelText('Name*')
    const last = getByPlaceholderText('Last')
    const date = getByLabelText('Delivery date')
    const hour = getByLabelText('Preferred delivery time')
    const phone = getByLabelText('Phone*')
    const email = getByPlaceholderText('Email')

    fireEvent.input(first, {target: {
      value:'any_first',
    }})
    fireEvent.input(last, {target: {
      value: 'any_last',
    }})
    fireEvent.input(date, {target: {
      value: '01012001',
    }})
    fireEvent.input(hour, {target: {
      value: '1111',
    }})
    fireEvent.input(phone, {target: {
      value: '1111111111',
    }})
    fireEvent.input(email, {target: {
      value: 'any_email',
    }})

    expect(first).toHaveValue('any_first')
    expect(last).toHaveValue('any_last')
    expect(date).toHaveValue('01.01.2001')
    expect(hour).toHaveValue('11:11')
    expect(phone).toHaveValue('111 111 1111')
    expect(email).toHaveValue('any_email')

  })
})
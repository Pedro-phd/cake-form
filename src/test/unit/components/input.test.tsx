import { CustomInput } from '@/presentation/components'
import { fireEvent, render } from '@testing-library/react'

describe('Input', () => {
  test('Should render component', () => {
    const { getByLabelText } = render(<CustomInput label="any_label"/>)
    const input = getByLabelText('any_label')
    expect(input).toBeInTheDocument()
  })

  test('Should correct mask', () => {
    const { getByLabelText } = render(
      <>
        <CustomInput label="date" mask="date"/>
        <CustomInput label="phone" mask="phone"/>
        <CustomInput label="hour" mask="hour"/>
        <CustomInput label="zipcode" mask="zipcode"/>
      </>
    )

    const date = getByLabelText('date')
    const phone = getByLabelText('phone')
    const hour = getByLabelText('hour')
    const zipcode = getByLabelText('zipcode')

    fireEvent.input(date, {target: {
      value: '07082001',
    }})
    fireEvent.input(phone, {target: {
      value: '1231231231',
    }})
    fireEvent.input(hour, {target: {
      value: '1212',
    }})
    fireEvent.input(zipcode, {target: {
      value: '12312312',
    }})

    expect(date).toHaveValue('07.08.2001')
    expect(phone).toHaveValue('123 123 1231')
    expect(hour).toHaveValue('12:12')
    expect(zipcode).toHaveValue('12312-312')
  })

  test('Should dont show incorrect hour', () => {
    const { getByLabelText } = render(
        <CustomInput label="hour" mask="hour"/>
    )

    const hour = getByLabelText('hour')

    fireEvent.input(hour, {target: {
      value: '9999',
    }})
    expect(hour).toHaveValue('')

    fireEvent.input(hour, {target: {
      value: '256059',
    }})

    // 25 isn't possible, 26 isn't either, so it defaults to 0, which is the next value it accepts, 
    // and it accepts 59 because it's less than 60.
    expect(hour).toHaveValue('20:59') 
  })
})
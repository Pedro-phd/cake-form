import Home from '@/presentation/pages/Home'
import { RenderResult, fireEvent, act, render, prettyDOM, findAllByRole } from '@testing-library/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { CacheMock } from '../mock/cache-mock'
import { ToastMock } from '../mock/toast-mock'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormSchema } from '@/domain/form-validation-schema'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

const makeSut = (component: JSX.Element): RenderResult => {
  const WrapperContext: FC = () => {
    const methods = useForm({
      resolver: yupResolver(FormSchema)
    })
    return (
      <FormProvider {...methods}>
        {component}
      </FormProvider>
    )
  }

  return render(<WrapperContext />)
}

describe('Home page', () => {

  test('Should error msg if incorrect values input' , async () => {
    const mockCache = new CacheMock()
    const mockToast = new ToastMock()
    const { findByPlaceholderText, findAllByRole, findByDisplayValue, getByTestId } = makeSut(
      <Home cache={mockCache} toast={mockToast} />
    )

    const firstRadio = getByTestId('cake-1').querySelector('input');
    fireEvent.click(firstRadio!);

    const alerts = await findAllByRole('alert')
    const btn = await findByDisplayValue('Order')

    fireEvent.click(btn)
    
    expect(alerts[0]).toBeInTheDocument()

  })
})
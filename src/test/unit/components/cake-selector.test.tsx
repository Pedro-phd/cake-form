import { CakeSelector } from '@/presentation/components';
import ProviderMock from '../mock/provider-wrapper-mock';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { FormProvider, UseFormReturn, useForm, useFormContext } from 'react-hook-form';
import { FC } from 'react';
import { act } from 'react-dom/test-utils';


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

describe('Cake Selector', () => { 
  test('Render Component', async () => {
    const { findByTestId } = makeSut(<CakeSelector />)

    const firstCake = await findByTestId('cake-1')
    expect(firstCake).toBeInTheDocument();
  })

  it("updates the form value when a radio button is clicked", async () => {
    const { getByTestId } = makeSut(<CakeSelector />);
    const firstRadio = getByTestId("cake-1").querySelector("input");
    fireEvent.click(firstRadio!);

    await act(() => {
      const updatedValue = getByTestId("cake-1").querySelector("input");
      expect(updatedValue!.checked).toBe(true);
    });

  });
 })
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form'

const ProviderMock = (component: ReactNode) => {
  const methods = useForm();
  const Component =
    <FormProvider {...methods}>
      {component}
    </FormProvider>
  return {
    methods,
    Component
  }
}

export default ProviderMock
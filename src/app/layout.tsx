"use client"
import { useForm, FormProvider, useFormContext } from "react-hook-form"
import { Inter } from 'next/font/google'
import '@/presentation/styles/globals.css'
import { yupResolver } from "@hookform/resolvers/yup"
import { FormSchema } from "@/domain/form-validation-schema"
import StyledComponentsRegistry from "./styled-rss"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const methods = useForm({
    resolver: yupResolver(FormSchema),
    shouldFocusError: true
  })

  return (
    <html lang="en">
      <FormProvider {...methods}>
        <body className={inter.className}>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
      </FormProvider>
    </html>
  )
}

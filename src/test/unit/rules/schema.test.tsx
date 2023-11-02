import { FormSchema } from "@/domain/form-validation-schema"

describe("Schema", () => {
  test('Date rule', async () => {
    await expect(FormSchema.validateAt("date", "01.01.2001")).rejects.toThrow("The date must be at least tomorrow.")
  })
  test('First rule', async () => {
    await expect(FormSchema.validateAt("firstName", "")).rejects.toThrow("Required information")
  })
  test('Phone rule', async () => {
    await expect(FormSchema.validateAt("phone", "")).rejects.toThrow("Required information")
  })
  test('Email rule', async () => {
    await expect(FormSchema.validateAt("email", "")).rejects.toThrow("Required information")
  })
})
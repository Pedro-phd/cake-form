import { isAfter, parse } from "date-fns";
import { object, string } from "yup";

export const FormSchema = object().shape({
  firstName: string().required('Required information'),
  email: string().required('Required information'),
  phone: string().required('Required information'),
  date: string().test('isTomorrow', 'The date must be at least tomorrow.', (value) => {
    const dateParse = parse(value!, 'dd.MM.yyyy', new Date());
    return isAfter(dateParse, new Date());
  })
})
import { IMask } from 'react-imask'

export const inputMasks = {
  phone: {
    mask: '000 000 0000',
    lazy: true
  },
  hour: {
    mask: 'hh:mm',
    lazy: true,
    blocks: {
      // Bloco para as horas
      'hh': {
        mask: IMask.MaskedRange,
        from: 0,
        to: 24
      },
      'mm': {
        mask: IMask.MaskedRange,
        from: 0,
        to: 59,
        maxLength: 2,
        validate: function (value: string) {
          var minutes = parseInt(value, 10);
          return minutes <= 59;
        }
      }
    }
  },
  date: {
    mask: Date,
    lazy: true,
    autofix: true,
    blocks: {
      d: { mask: IMask.MaskedRange, placeholderChar: 'd', from: 1, to: 31, maxLength: 2 },
      m: { mask: IMask.MaskedRange, placeholderChar: 'm', from: 1, to: 12, maxLength: 2 },
      Y: { mask: IMask.MaskedRange, placeholderChar: 'y', from: 1900, to: 2999, maxLength: 4 }
    }
  },
  zipcode: {
    mask: '00000-000',
    lazy: true
  }
}

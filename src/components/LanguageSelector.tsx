import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES, AUTO_LANGUAGE } from '../constants'
import { type FromLanguage, type Language } from '../types'

// interface Props {
//   onChange: (language: Language) => void
// }

type Props =
  | { type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: 'to', value: Language, onChange: (language: Language) => void }

export const LanguageSelector: React.FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(type, value)

    onChange(evt.target.value as Language)
  }

  return (
    <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value='Daniel'>

      {type === 'from' && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}

      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}

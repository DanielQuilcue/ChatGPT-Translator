import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (event: any) => void
  value: string
}
const commanStyle = { border: 0, heigth: '200px' }
const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading === true) return 'Cargando ...'
  return 'Traducción'
}
export const Textarea = ({ type, loading, value, onChange }: Props) => {
  const styles = type === SectionType.From
    ? commanStyle
    : { ...commanStyle, backgroundColor: '#f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }
  return (
    <Form.Control
    autoFocus={type === SectionType.From}
    as='textarea'
    placeholder={getPlaceholder({ type, loading })}
    style={styles}
    value={value}
    onChange={handleChange}
  />
  )
}

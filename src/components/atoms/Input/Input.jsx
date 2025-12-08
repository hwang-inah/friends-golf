import styles from './Input.module.css'

const Input = ({ type = 'text', name, placeholder, value, onChange, required = false }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={styles.input}
    />
  )
}

export default Input
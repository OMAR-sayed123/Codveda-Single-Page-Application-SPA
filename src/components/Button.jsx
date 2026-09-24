import { Link } from 'react-router-dom'

export default function Button({ children, to, type = 'button', variant = 'primary', className = '', onClick }) {
  const classes = `button button-${variant} ${className}`.trim()

  if (to) {
    return <Link className={classes} to={to} onClick={onClick}>{children}<span aria-hidden="true">↗</span></Link>
  }

  return <button className={classes} type={type} onClick={onClick}>{children}<span aria-hidden="true">↗</span></button>
}

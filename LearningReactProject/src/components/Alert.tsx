
interface Props{
    text: string;
}

const Alert = ({text}: Props) => {
  return (
    <div className="alert alter-primary">{text}</div>
  )
}

export default Alert
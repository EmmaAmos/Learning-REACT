interface Props {
    children: React.ReactNode; // Corrected spelling and more general type
  }
  
  const Alert = ({ children }: Props) => {
    return <div className="alert alert-primary">{children}</div>; // Corrected class name
  };
  
  export default Alert;
import Badge from 'react-bootstrap/Badge';

const Footer = (props) => {
  return (
    <div>
        <h2> <Badge bg="dark">{props.pies}</Badge></h2>
    </div>
  )
}

export default Footer
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useData} from '../Data.Context'
import '../styles'

//Right section[Balance_column]

const BalComponent = () => {
    const {teams} = useData()

    return ( 
        <div className='bal-container'>
            <h4 style={{marginBottom:'1em'}}>Balance</h4>
            {teams.map((team,index)=>(
                    <Row style={{fontSize:'1.2em',padding:'1em',fontWeight:'400'}} key={index}>
                        <Col>{team.name}</Col>
                        <Col style={{textAlign:'right',color:'#D68D00'}} md={4}>{team.balance} L</Col>
                  </Row>
                ))}
        </div>
     );
}
 
export default BalComponent;
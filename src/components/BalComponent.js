import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useData} from '../Data.Context'
import '../styles'

//Right section[Balance_column]

const BalComponent = () => {
    const {teams,boys,girls} = useData()

    return ( 
        <div className='bal-container'>
            <h4 style={{fontSize:'2em', marginBottom:'1em'}}>Balance</h4>
            
            {teams.map((team,index)=>(
                    <Row style={{backgroundColor:'#ffffff',fontSize:'1.3em',paddingTop:'0.6em',paddingBottom:'0.5em', margin:'0.1em',fontWeight:'bold', borderTop: '1.5px solid #020024'}} key={index}>
                        <Row>
                            <Col>{team.name}</Col>
                            <Col style={{textAlign:'right',color:'#D68D00'}} md={4}>{team.balance} L</Col>
                        </Row>
                        <Row style={{backgroundColor:`${team.color}`,marginLeft:'0.1em', marginRight:'1em', marginTop:'0.3em', marginBottom:'0em', borderRadius:'1em'}}>
                            <Col style={{textAlign:'left', color:'#020024', margin:'3px'}}>G:{team.girls}</Col>
                            <Col style={{textAlign:'center', color:'#020024',margin:'3px'}}>B:{team.boys}</Col>
                        <Col style={{margin:'3px',borderRadius:'1.2em',textAlign:'center', color:'#020024', backgroundColor:'#ffffff'}}>{team.total}</Col>

                        </Row>
                    </Row>
                ))}
        </div>
     );//#bbbbbb (row member count color) // md={4}
}
 
export default BalComponent;
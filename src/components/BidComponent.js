import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from 'react';
import {useData} from '../Data.Context'
import '../styles'
import ConfirmModal from './ConfirmModal';

const BidComponent = () => {
    const {bid, updateBid,teams,setConfirm,setCurr,his,setHis,playerIndex} = useData()
    

    function history(n) {
        if (bid > 0){
            const newHis = his.concat({ team: teams[n].name, bid:`${bid}L` });
            setHis(newHis);
            setCurr(n)
        }
        
    }
    


    return ( 
        <>
        <Stack gap={.5}>

            <div className=" bid-row">
                <div><h4>Bid</h4></div>
                <div style={{textAlign:'center'}}><h1>{bid} L</h1></div>
                <hr/>

                <Row>
                <Col>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group" size="lg">
                        <Button variant='light' onClick={()=>updateBid(bid - 10)}>-</Button> <Button variant='light'  onClick={()=>updateBid(bid + 10)}>+</Button>
                    </ButtonGroup>
                </ButtonToolbar>
                </Col>

                <Col md={7}>
                    
                    {teams.map((team,index)=>{
                            return(
                                <Button variant='light' style={{borderRadius:'3em',margin:'0.45em',fontSize:'0.7em',fontWeight:'600',color:'#ffffff',backgroundColor:`${team.color}`}} onClick={()=>history(index)} key={index}>{team.short}</Button>
                            )
                        })}

                </Col>
                </Row>
            </div>


            <div className="bid-row bid-history">
                <h6>History</h6>
                {his.slice(0).reverse().map((item,index)=>(
                    <Row style={{fontSize:'1.2em',padding:'0 .5em',color:'#868686'}} key={index}>
                        <Col>{item.team}</Col>
                        <Col style={{textAlign:'right'}} md={4}>{item.bid}</Col>
                  </Row>
                ))}
            </div>

            <Button variant="danger bid-row" onClick={()=>{
                if (his.length !== 0){
                    setConfirm(true)
                }
            }} ><h4>Sold</h4></Button>
        </Stack>

        <ConfirmModal/>
        </>
     );
}
 
export default BidComponent;
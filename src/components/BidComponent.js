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
                <div style={{textAlign:'center', borderRadius:'1.2em', backgroundColor:'lightpink'}}><h1>{bid} L</h1></div>
                <hr/>

                <Row style={{}}>
                    <Row>
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-2" aria-label="First group" size="lg">
                            <Button style={{border:'1px solid #000000',color: '#000000'}} variant='light' onClick={()=>{
                                if (bid <= 200) {
                                    // Decrease by 20 until bid is 100
                                    updateBid(Math.max(bid - 10, 0));
                                } else {
                                    // Decrease by 25 after bid is 200
                                    updateBid(Math.max(bid - 25, 200));
                                }
                            }}>-</Button>
                            <Button style={{border:'1px solid #000000',color: '#000000'}} variant='light'  onClick={()=>{
                                if (bid<200){
                                    // Increase by 20 up to 200
                                    updateBid(bid+10);
                                } else{
                                    // Increase by 25 upto infinity :)
                                    updateBid(bid+25);
                                }
                            }}>+</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    </Row>

                    <Row style={{width:'220px',border:'1px solid #000000',borderRadius:'1em', margin:'0.5em'}} md={7}>
                        {teams.map((team,index)=>{
                            return(
                                <Button variant='light' style={{width:'50px',borderRadius:'2em',margin:'0.45em',fontSize:'0.7em',fontWeight:'600',color:'#ffffff',backgroundColor:`${team.color}`}} onClick={()=>history(index)} key={index}>{team.short}</Button>
                            )
                        })}
                    </Row>
                </Row>
            </div>


            <div className="bid-row bid-history">
                <h6>History</h6>
                <div style={{overflowY:'scroll',overflowX:'hidden', minHeight:'35vh',maxHeight:'35vh'}}>
                    {his.slice(0).reverse().map((item,index)=>(
                        <Row style={{fontSize:'1em',padding:'0.5em',color:'#868686', borderTop:'1px solid #868686'}} key={index}>
                            <Col>{item.team}</Col>
                            <Col style={{textAlign:'right'}} md={4}>{item.bid}</Col>
                        </Row>
                        
                    ))}
                </div>
            </div>

            <Button style={{}} variant="danger bid-row" onClick={()=>{
                if (his.length !== 0){
                    setConfirm(true)
                }
            }}><h2>Sell</h2></Button>
        </Stack>

        <ConfirmModal/>
        </>
     );
}
 
export default BidComponent;
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
        <Stack gap={1}>

            <div className="bid-row">
                <div style={{fontSize:'2em', marginBottom:'0.5em'}}>Bid</div>
                <div style={{fontSize:'3em',textAlign:'center', borderRadius:'1.2em', backgroundColor:'lightpink'}}>{bid} L</div>
                <hr/>

                <>
                    <ButtonToolbar aria-label="Toolbar with button groups" style={{justifyContent:'center'}}>
                        <ButtonGroup className="mb-2" aria-label="First group" size="lg">
                            <Button style={{border:'1px solid #000000',color: '#000000', padding:'1.5em'}} variant='light' onClick={()=>{
                                if (bid <= 200000) {
                                    // Decrease by 20 until bid is 100
                                    updateBid(Math.max(bid - 5000, 0));
                                } else {
                                    // Decrease by 25 after bid is 200000
                                    updateBid(Math.max(bid - 10000, 200000));
                                }
                            }}>-</Button>
                            <Button style={{border:'1px solid #000000',color: '#000000', padding:'1.5em'}} variant='light'  onClick={()=>{
                                if (bid<200000){
                                    // Increase by 20 up to 200000
                                    updateBid(bid+5000);
                                } else{
                                    // Increase by 25 upto infinity :)
                                    updateBid(bid+10000);
                                }
                            }}>+</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    

                    <Row style={{padding:'.5em',gap:'1em',width:'100%',border:'1px solid #000000', borderRadius:'1em', margin:'0.5em', justifyContent:'center',}} md={4}>
                        {teams.map((team,index)=>{
                            return(
                                <Button variant='light' style={{borderRadius:'2em',padding:'0.75em', fontWeight:'600', color:'#ffffff',backgroundColor:`${team.color}`}} onClick={()=>history(index)} key={index}>{team.short}</Button>
                            )
                        })}
                    </Row>
                
                </>
            </div>


            <div className="bid-row bid-history">
                <div style={{fontSize:'1.5em', marginBottom:'0.5em'}}>History</div>
                <div style={{overflowY:'scroll',overflowX:'hidden', minHeight:'35vh',maxHeight:'35vh'}}>
                    {his.slice(0).reverse().map((item,index)=>(
                        <Row style={{fontSize:'1.25em',padding:'0.5em',color:'#861659', borderTop:'1px solid #868686'}} key={index}>
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
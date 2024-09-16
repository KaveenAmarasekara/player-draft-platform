import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import { useData } from '../Data.Context';
import Image from 'react-bootstrap/Image'
import { alignPropType } from 'react-bootstrap/esm/types';
import '../styles'


//Bid_confirm_dialog

const ConfirmModal = () => {
    const {confirm,setConfirm,curr,teams,setTeams,bid,updateBid,setHis,playerIndex,players,setPlayers} = useData()
    const handleClose = () => setConfirm(false);


    function genderSelect(){
            
      const gender = players[playerIndex].gender
      if(gender === 1){
        const boys = teams[curr].boys + 1;
      return boys
      }
      else if(gender === 0){
        const girls = teams[curr].girls + 1;
      return girls
      }
      else{
        alert("Gender undefined")
      }
      
    }

    function sold(){
      if (curr != null){
          const currentBal = teams[curr].balance - bid
          const newlist = [...teams]
          newlist[curr].balance = currentBal
          let boys = 0;
          let girls = 0;
          let Total = 0;
          genderSelect(curr)
          

          newlist[curr].boys = boys
          newlist[curr].girls = girls
          newlist[curr].total = boys + girls
          setTeams(newlist)
          setHis([])
          updateBid(0)
          
          const newPlayers = [...players]
          newPlayers.splice(playerIndex,1)
          setPlayers(newPlayers)

          

          console.log("Teams array:", teams);
          console.log("Current index:", curr);
          console.log("Current team:", teams[curr]);
      }

      setConfirm(false)

  }

  const getTeamImagePath = (curr) => {

    try {
      // Try to require the image path
      const teamimagePath = require(`../Assets/Teams/team${curr + 1}.jpg`);
      return teamimagePath;
      
    } catch (error) {
      // If an error occurs (image not found), return the default image path
      return require(`../Assets/teamdef.webp`);
    }
    
  };

    return ( 

      <Modal show={confirm} onHide={handleClose} centered>

        <Modal.Header closeButton>
        <Modal.Title style={{fontWeight:'bold', fontSize:'25px'}}>{players[playerIndex].name}   <Badge bg="success">Sold to</Badge></Modal.Title>
        </Modal.Header>

        <Modal.Body style={{width:'300px', alignSelf:'center'}}>
            {<Image src={getTeamImagePath(curr)} fluid rounded />}
            <div style={{ textAlign: 'center', marginTop: '1em'}}>
                <label style={{
                    fontWeight: 'bold', 
                    color: 'black', 
                    border: '1px solid black', 
                    padding: '.375rem .75rem',  // Optional: Adjust padding to match Badge styling
                    borderRadius: '.25rem',    // Optional: Adjust border radius to match Badge styling
                    backgroundColor: 'white'   // Optional: Set background color to match Badge styling
                    }}>
                  {teams[curr]?.name}
                </label>
            </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={sold}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

     );
}
 
export default ConfirmModal;

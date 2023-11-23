import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import { useData } from '../Data.Context';
import Image from 'react-bootstrap/Image'




const ConfirmModal = () => {
    const {confirm,setConfirm,curr,teams,setTeams,bid,updateBid,setHis,playerIndex,players,setPlayers} = useData()
    const handleClose = () => setConfirm(false);

    function sold(){
      if (curr != null){
          const currentBal = teams[curr].balance - bid
          const newlist = [...teams]
          newlist[curr].balance = currentBal
          setTeams(newlist)
          setHis([])
          updateBid(0)

          const newPlayers = [...players]
          newPlayers.splice(playerIndex,1)
          setPlayers(newPlayers)
      }

      setConfirm(false)

  }

    return ( 

      <Modal show={confirm} onHide={handleClose} size='sm' centered>
        <Modal.Header closeButton>
        <Modal.Title>{players[playerIndex].name} <Badge bg="success">Sold to</Badge></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={require(`../Assets/Teams/team${curr+1}.jpeg`)} alt={teams.name} fluid rounded/>
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
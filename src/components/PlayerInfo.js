import React, { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import {useData} from '../Data.Context'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

//middle_section[player_profile + Banner]

const PlayerInfo = () => {
    const {players,setPlayerIndex} = useData()

    const handleSelect = (selectedIndex) => {
        setPlayerIndex(selectedIndex);
    };

    const getImagePath = (player) => {
        
        try {
          // Try to require the image path
          const imagePath = require(`../Assets/Profiles/${player?.img}.png`);
          return imagePath;

        } catch (error) {
          // If an error occurs (image not found), return the default image path
          return require(`../Assets/playerdef.png`);
        }
      };

    let remain = 0
    let sold = 0
    
    return ( 
        <>
        <Carousel interval={null} style={{width:'350',margin:'.8em',borderRadius:'1em',overflow:'hidden'}} onSlid={handleSelect}>

            {players.map((player,index)=>(
                
                <Carousel.Item key={index} >
                    <img
                    className="d-block w-100"
                    src={getImagePath(player)}
                    alt={player.name}
                    />
                </Carousel.Item>
            ))}

        </Carousel>
        <div >
        
        <Row className='bal-container' style={{marginLeft:'3em',marginRight:'3em', padding:'.5em'}}>
            <Col style={{textAlign:'center', color:'wheat', marginLeft:'3em', marginRight:'3em',borderRadius:'2em', backgroundColor:'darkred'}}>Remain: {remain = players.length}</Col>
            <Col style={{textAlign:'center', color:'wheat', marginLeft:'3em', marginRight:'3em',borderRadius:'2em', backgroundColor:'darkgreen'}}>Sold: {sold = 120-remain}</Col>
        </Row>
        </div>
        {
        /*
        <Image 
        
            src={require('../Assets/banner.jpg')}
            style={{margin:"0.8em",marginTop:'1em',borderRadius:'1em',objectFit:'cover',width:'96.5%'}}
            fluid
        />*/
        }
        </>
     );
}
 
export default PlayerInfo;
import React, { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import {useData} from '../Data.Context'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles'

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
        <Carousel style={{width:'95%', margin:'1em', overflow:'clip', borderRadius:'1em'}} interval={null} onSlid={handleSelect}>

            {players.map((player,index)=>(
                
                <Carousel.Item key={index} >
                    <img
                    //className="d-block w-100"
                    src={getImagePath(player)}
                    alt={player.name}
                    style={{height:'90vh', width:'100%'}}
                    />
                </Carousel.Item>
            ))}

        </Carousel>
        <>
        <Row style={{width: '70%', height: 'auto',
                    marginLeft:'2em', marginRight:'2em', marginBottom:'.5em',
                    padding:'.5em', gap: '0.5em',
                    overflow: 'clip', alignContent: 'center',
                    display:'flex', backgroundColor: '#ffffff',
                    borderRadius:'1em',
                }
            }>

            <Col style={{textAlign:'center', color:'wheat', marginLeft:'3em', marginRight:'3em',borderRadius:'2em', backgroundColor:'darkred'}}>Remain: {remain = players.length}</Col>
            <Col style={{textAlign:'center', color:'wheat', marginLeft:'3em', marginRight:'3em',borderRadius:'2em', backgroundColor:'darkgreen'}}>Sold: {sold = 120-remain}</Col>
        </Row>
        </>
        {
        
        // <Image 
        
        //     src={require('../Assets/banner.jpg')}
        //     style={{margin:"0.8em",marginTop:'1em',borderRadius:'1em',objectFit:'cover',width:'96.5%'}}
        //     fluid
        // />
        }
        </>
     );
}
 
export default PlayerInfo;
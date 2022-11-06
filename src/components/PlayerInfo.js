import React, { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import {useData} from '../Data.Context'

const PlayerInfo = () => {
    const {players,setPlayerIndex} = useData()

    const handleSelect = (selectedIndex) => {
        setPlayerIndex(selectedIndex);
    };


    return ( 
        <>
        <Carousel interval={null} style={{margin:'.8em',borderRadius:'1em',overflow:'hidden'}} onSlid={handleSelect}>

            {players.map((player,index)=>(
                <Carousel.Item key={index} >
                    <img
                    className="d-block w-100"
                    src={require(`../Assets/Profiles/prof__${player.img}.png`)}
                    alt={player.name}
                    />
                </Carousel.Item>
            ))}

        </Carousel>

        <Image 
            src={require('../Assets/banner.jpeg')}
            style={{margin:"0.8em",marginTop:'0',borderRadius:'1em',objectFit:'cover',width:'96.5%'}}
            fluid
        />
        </>
     );
}
 
export default PlayerInfo;
import { createContext ,useContext,useState,useEffect} from 'react'
import { playerProfiles } from './Players.js'


const DataContext = createContext()

export const useData = ( ) =>{
    return useContext(DataContext)
}


const teamData = [
    {
        name:'White Wolves',
        balance: 8000,
        short:'WW',
        color:'#05BAD9',
        girls: 0,
        boys: 0,
        total: 0
    },
    {
        name:'Blue Titans',
        balance: 8000,
        short:'BT',
        color:'#291FC0',
        girls: 0,
        boys: 0,
        total: 0
    },
    {
        name:'Red Raptors',
        balance: 8000,
        short:'RR',
        color:'#DE0500',
        girls: 0,
        boys: 0,
        total: 0
    },
    {
        name:'Golden Lions',
        balance: 8000,
        short:'GL',
        color:'#F4A735',
        girls: 0,
        boys: 0,
        total: 0
    },
    {
        name:'Black Panthers',
        balance: 8000,
        short:'BP',
        color:'#7C7C7C',
        girls: 0,
        boys: 0,
        total: 0
    },
    {
        name:'Green Gladiators',
        balance: 8000,
        short:'GG',
        color:'#2D9312',
        girls: 0,
        boys: 0,
        total: 0
    }
]


export const DataProvider = ({children}) => {

    const [bid, updateBid] = useState(0);
    const [confirm, setConfirm] = useState(false);
    const [curr, setCurr] = useState(null);
    const [his, setHis] = useState([]);
    const [playerIndex, setPlayerIndex] = useState(0);

    const [teams, setTeams] = useState(()=>{
        const localTeamsData = localStorage.getItem('teams')
        return localTeamsData ? JSON.parse(localTeamsData) : teamData
    })

    const [players,setPlayers] = useState(()=>{
        const localPlayersData = localStorage.getItem('players')
        return localPlayersData ? JSON.parse(localPlayersData) : playerProfiles
    })


    useEffect(()=>{
        localStorage.setItem('teams',JSON.stringify(teams))
    },[teams])

    useEffect(()=>{
        localStorage.setItem('players',JSON.stringify(players))
    },[players])

    const value = {
        bid,
        teams,
        confirm,
        curr,
        his,
        players,
        playerIndex,
        updateBid,
        setTeams,
        setConfirm,
        setCurr,
        setHis,
        setPlayers,
        setPlayerIndex
        
    }

    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

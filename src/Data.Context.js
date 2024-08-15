import { createContext ,useContext,useState,useEffect} from 'react'
import { playerProfiles } from './Players'


const DataContext = createContext()

export const useData = ( ) =>{
    return useContext(DataContext)
}


const teamData = [
    {
        name:'Pansalwatta Killers',
        balance: 700000,
        short:'PK',
        color:'#05BAD9',
        girls: 0,
        boys: 0,
        total: 0
    },
    {
        name:'Kalana Saha Puthrayo',
        balance: 700000,
        short:'KS',
        color:'#291FC0',
        girls: 0,
        boys: 0,
        total: 0
    },
    {
        name:'Wijayarathna Tours',
        balance: 700000,
        short:'WT',
        color:'#DE0500',
        girls: 0,
        boys: 0,
        total: 0
    },
    {
        name:'Bawane Panu Meeyo',
        balance: 700000,
        short:'BP',
        color:'#F4A735',
        girls: 0,
        boys: 0,
        total: 0
    },
    {
        name:'Goraka Gladiators',
        balance: 700000,
        short:'GG',
        color:'#7C7C7C',
        girls: 0,
        boys: 0,
        total: 0
    },
    {
        name:'Thummulle Geeks',
        balance: 700000,
        short:'TG',
        color:'#2D9312',
        girls: 0,
        boys: 0,
        total: 0
        //color:'#01371F'
    },
    {
        name:'Angoda Picco',
        balance: 700000,
        short:'AP',
        color:'#28b463',
        girls: 0,
        boys: 0,
        total: 0
        //color:'#01371F'
    },
    {
        name:'Thuthukudi Thakkadiyo',
        balance: 700000,
        short:'TT',
        color:'#17202a',
        girls: 0,
        boys: 0,
        total: 0
        //color:'#01371F'
    },
    {
        name:'Okapathana Pythons',
        balance: 700000,
        short:'OP',
        color:'#6c3483',
        girls: 0,
        boys: 0,
        total: 0
        //color:'#01371F'
    },
    {
        name:'Sri Lanka Jathika Kandayama',
        balance: 700000,
        short:'SL',
        color:'#6e2c00',
        girls: 0,
        boys: 0,
        total: 0
        //color:'#01371F'
    },
]


export const DataProvider = ({children}) => {

    const [bid, updateBid] = useState(0)
    const [confirm, setConfirm] = useState(false);
    const [curr, setCurr] = useState(null)
    const [his, setHis] = useState([])
    const [playerIndex, setPlayerIndex] = useState(0)

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

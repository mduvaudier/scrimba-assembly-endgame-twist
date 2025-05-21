import { holidays } from "../assets/holidays"

export default function Header(props){
    return(
        <header style={{backgroundColor: holidays[props.counter].bgcolor, color: holidays[props.counter].textcolor}}>
            <h1>Public Holidays: Endgame</h1>
            <p>It's January, back to work and you're already dreaming of the next public holiday? But it's not that simple: you're going to have to guess the word in less than 8 tries to make sure you've got public holidays this year.</p>
        </header>
    )
}
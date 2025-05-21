import { holidays } from "../assets/holidays";

export default function Message(props) {
    return (
      <section className="message" style={{color: holidays[props.counter].bgcolor, backgroundColor: holidays[props.counter].textcolor}}>
        {props.message} 
      </section>
    );
  }

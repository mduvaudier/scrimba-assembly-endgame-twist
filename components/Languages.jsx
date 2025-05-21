import Lang from "./Lang";
import { holidays } from "../assets/holidays";

export default function Languages(props) {
  const listes = holidays.slice(0, 8).map((item) => (
    <Lang image={item.image} key={item.id} dead={props.counter > item.id ? true : false} win={props.win}/>
  ));

  return <section className="languages">{listes}</section>;
}

import "./Destination.css";
import Montain1 from "../assets/1.jpg";
import Montain2 from "../assets/2.jpg";
import Montain3 from "../assets/5.jpg";
import Montain4 from "../assets/6.jpg";
import DestinationData from "./DestinationData";

function Destination() {
  return (
    <div className="destination">
      <h1>Популярные красивые места</h1>
      <p>Узрите красивые пейзажи Якутии</p>
      <DestinationData
        className="first-des"
        heading="Ленские столбы"
        text="Ленские столбы — это природный заповедник, расположенный в Якутии, 
        на берегу реки Лены. Это уникальное геологическое образование, представляющее собой скалы высотой до 100 метров, 
        которые стоят вдоль берега реки на протяжении многих километров."
        img1={Montain1}
        img2={Montain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Горы Кисилях"
        text="Горы Кисилях — это горный хребет, расположенный в Республике Саха (Якутия), 
        на северо-востоке Сибири. Они являются частью Верхоянского хребта и представляют собой 
        суровый и труднодоступный регион, где царит вечная мерзлота, 
        а вершины покрыты снегами и ледниками."
        img1={Montain3}
        img2={Montain4}
      />
    </div>
  );
}

export default Destination;

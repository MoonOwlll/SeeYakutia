import "./Share.css";
import ShareData from "./ShareData";
import Share1 from "../assets/4.jpg";
import Share2 from "../assets/8.jpg";
import Share3 from "../assets/7.jpg";

function Share() {
  return (
    <div className="share">
      <h1>Галерея</h1>
      <p>Ты можешь отправить фотографии для опубликации на этой стене</p>
      <div className="tripcard">
        <ShareData
          image={Share1}
          heading="Якутская природа"
          text=""
        />

        <ShareData
          image={Share2}
          heading="Якутская природа 2"
          text=""
        />

        <ShareData
          image={Share3}
          heading="Яна Индигирка Колыма"
          text=""
        />
      </div>
    </div>
  );
}

export default Share;

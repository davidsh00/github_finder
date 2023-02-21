import ReactDom from "react-dom";
import loadingGif from "../../../assets/gif/loading.gif";
import BackDrop from "./BackDrop";
import "./Loading.css";
const Loading = () => {
  const content = (
    <BackDrop>
      <div className="loading">
        <img src={loadingGif} alt="loading" />
      </div>
    </BackDrop>
  );
  return ReactDom.createPortal(content, document.getElementById("modalHook"));
};
export default Loading;

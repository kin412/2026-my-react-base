import { useContext } from "react";
import { FirstContext } from "./BasicTestMain";

const LastComponent = () => {
  //context로 props 전달
  const name = useContext(FirstContext);

  return (
    <div>
      <div>LastComponent</div>
      <div>context 로 전달받은 props : {name}</div>
    </div>
  );
};

export default LastComponent;

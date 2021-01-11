import ArrowContainer from "./styled";
import ArrowSvg from "../../assets/images/arrow.svg";

export default function Arrow({ name, disabled, ClickFunc }) {
  return (
    <ArrowContainer disabled={disabled} name={name} onClick={ClickFunc}>
      <img src={ArrowSvg} alt="" />
    </ArrowContainer>
  );
}

import { useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faHdd, faMemory, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';

export function Vote({ brandName, model, Specs, logo }) {
  
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [opened, setOpened] = useState(false);

    return (

    <div className="Vote" style={{ backgroundColor: like > dislike ? "#5FFB64" : "white" }}>

      <img src={logo} className="image" alt=""></img>

      <h1 style={{ textTransform: "uppercase" }}>{brandName}</h1>

      <h4 style={{ textTransform: "uppercase" }}>{model}</h4>

      <div>
        <img className="phone-image" src={Specs.image} alt=" "></img>
      </div>

      <Button onClick={() => setOpened(!opened)} variant="contained" color="primary">
        {opened ? "Show Less" : "Show More"}
      </Button>

      {opened ? <Specificaition Specs={Specs} /> : ''}

      <IconButton onClick={() => setLike(like + 1)}>👍 {like}</IconButton>

      <IconButton onClick={() => setDislike(dislike + 1)}>👎 {dislike}</IconButton>

    </div>
  );

  function Specificaition({ Specs }) {
    return (
      <div>
        <h3>Specificaition :-</h3>
        <h4>{Specs.OS === " IOS" ? <AppleIcon /> : <AndroidIcon />} {Specs.OS}</h4>
        <h4><FontAwesomeIcon icon={faMicrochip} />{Specs.Proccesor}</h4>
        <h4><FontAwesomeIcon icon={faMemory} />{Specs.Ram}</h4>
        <h4><FontAwesomeIcon icon={faHdd} />{Specs.Storage}</h4>
        <h4><FontAwesomeIcon icon={faCamera} />{Specs.RearCamera}</h4>
      </div>
    );
  }
}

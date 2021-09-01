import { useState } from "react";
import { Vote } from "./Vote";
import { TextField } from "@material-ui/core";


export function Brands() {

  const brands = [
    { name: "motorola", model: "One 5G Ace", Specs: { OS: " Android", Proccesor: " Snapdragon 750G", Ram: " 8GB", Storage: " 128GB", RearCamera: " 48 MP", image: "https://motorolaus.vtexassets.com/arquivos/ids/159933-800-auto?width=800&height=auto&aspect=true" }, logo: "https://1000logos.net/wp-content/uploads/2017/04/Motorola-Logo.png" },
    { name: "apple", model: "12 Pro", Specs: { OS: " IOS", Proccesor: " A14 Bionic", Ram: " 8GB", Storage: " 128GB", RearCamera: " 48 MP", image: "https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2020/11/12/source-img/20201112102608_5fac9d40327dc.jpg" }, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/862px-Apple_logo_black.svg.png" },
    { name: "MI", model: "Note 9 Pro", Specs: { OS: " Android", Proccesor: " Snapdragon 720G", Ram: " 8GB", Storage: " 128GB", RearCamera: " 48 MP", image: "https://i01.appmifile.com/webfile/globalimg/zhouyuxin/J6B-Green-800.png" }, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/600px-Xiaomi_logo_%282021-%29.svg.png" },
    { name: "asus", model: "rog 3", Specs: { OS: " Android", Proccesor: " Snapdragon 865+", Ram: " 8GB", Storage: " 128GB", RearCamera: " 48 MP", image: "https://dlcdnwebimgs.asus.com/gain/5B44AC0A-5EBF-43ED-A2DF-B3D21DA46F02/w250" }, logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png" },
    { name: "oneplus", model: "9 Pro", Specs: { OS: " Android", Proccesor: " Snapdragon 888", Ram: " 8GB", Storage: " 128GB", RearCamera: " 48 MP", image: "https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9-pro/Pine%20green-gallery..png" }, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/OnePlus_logo.svg/1200px-OnePlus_logo.svg.png" }
  ];
   
  const [Search, setSearch] = useState("");

  return (
    <div className="brands">
     
      <TextField
        value={Search}
        onChange={(event) => setSearch(event.target.value)}
        type="text" 
        label="Search" 
        variant = "outlined"
      />
      {brands.filter( (brand) => brand.model.includes( Search.toLowerCase() ) ).map (
        brand => <Vote brandName={brand.name} model={brand.model} Specs={brand.Specs} logo={brand.logo} />)}
    </div>
  );
}

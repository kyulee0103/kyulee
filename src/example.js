import React from "react"
import { SvgXml } from "react-native-svg";

export default function Svg(){
    const logo = `
    <svg id="관계" xmlns="http://www.w3.org/2000/svg" width="33" height="21" viewBox="0 0 33 21">
  <path id="ic_group_24px" d="M23.5,14A4.5,4.5,0,1,0,19,9.5,4.481,4.481,0,0,0,23.5,14Zm-12,0A4.5,4.5,0,1,0,7,9.5,4.481,4.481,0,0,0,11.5,14Zm0,3C8.005,17,1,18.755,1,22.25V26H22V22.25C22,18.755,14.995,17,11.5,17Zm12,0c-.435,0-.93.03-1.455.075A6.33,6.33,0,0,1,25,22.25V26h9V22.25C34,18.755,26.995,17,23.5,17Z" transform="translate(-1 -5)" fill="#c9c9c9"/>
</svg>
`
const LogoSvg = ()=> <SvgXml xml={logo} width="30%" height="30%" />
 
  return <LogoSvg/>
}
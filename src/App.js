import { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom"
import Home from "./Routes/Home";
import Sports from "./Routes/Sports";
import International from "./Routes/International";
import India from "./Routes/India";
import Tech from "./Routes/Tech";
import Israel from "./Routes/Israel";
import Space from "./Routes/Space";
import About from "./Routes/About";
import News from "./Routes/News";
import SignIn from "./Routes/SignIn";

export default function App(){

  const [international, setInternational] = useState([]);
  const [india, setIndia] = useState([]);
  const [sports, setSports] = useState([]);
  const [tech , setTech] = useState([]);
  const [space, setSpace] = useState([]);
  const [israel, setIsrael] = useState([]);


  const Api_key = `cfccc2b54f2f4b94b174100e77c825bd`;



  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=International&apiKey=${Api_key}`)
    .then(results => results.json()).then(data => {
    setInternational(data.articles);
    })
    fetch(`https://newsapi.org/v2/everything?q=India&apiKey=${Api_key}`)
    .then(results => results.json()).then(data => {
    setIndia(data.articles);
    })
    fetch(`https://newsapi.org/v2/everything?q=Sports&apiKey=${Api_key}`)
    .then(results => results.json()).then(data => {
    setSports(data.articles);
    })
    fetch(`https://newsapi.org/v2/everything?q=tech&apiKey=${Api_key}`)
    .then(results => results.json()).then(data => {
    setTech(data.articles);
    })
    fetch(`https://newsapi.org/v2/everything?q=israel&apiKey=${Api_key}`)
    .then(results => results.json()).then(data => {
    setIsrael(data.articles);
    })
    fetch(`https://newsapi.org/v2/everything?q=Space&apiKey=${Api_key}`)
    .then(results => results.json()).then(data => {
    setSpace(data.articles);
    })
    
  }, [])


  
  return(
    <div className = "App font-mono bg-[#e0e0e6] w-fit">
      <Routes>
        <Route path = "/" element = {<Home  India = {india} International = {international} Space = {space} Sports = {sports} Tech = {tech} Israel = {israel}/>}/>
        <Route path = "/Sports" element = {<Sports Sports = {sports}/>}/>
        <Route path = "/India" element = {<India India = {india}/>}/>
        <Route path = "/International" element = {<International International = {international}/>}/>
        <Route path = "/Technology" element = {<Tech Tech = {tech}/>} />
        <Route path = "/Israel" element = {<Israel Israel = {israel}/>}/>
        <Route path = "/Space" element = {<Space Space = {space}/>} />
        <Route path = "/About-Us" element = {<About/>}/>
        <Route path = "/News-source" element = {<News/>}/>
        <Route path = "/sign-in" element = {<SignIn/>}/>
      </Routes>
    </div>
  );
}

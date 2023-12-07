import { useEffect, useState } from "react";

export default function Hero(){

  const Api_key = `cfccc2b54f2f4b94b174100e77c825bd`;

  const [herodata, setHeroData] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=For+You&apiKey=${Api_key}`).then(results => results.json()).then(data => {
      setHeroData(data.articles);
    })
  }, [])


    return(
      <section className = "flex items-center justify-around mt-12 mx-8" >
        <div className = "w-[45%] ">
          <div className = "w-fit rounded-md h-auto relative">
            <img src = {herodata[0]?.urlToImage} className = "rounded-md" alt = "" />
            <p className = "absolute left-0 bottom-0 px-4 text-black text-lg"><a href = {herodata[0]?.url} target="_blank" >{herodata[0]?.title}</a></p>
          </div>
          <div className = "">
            <ul className = "grid grid-cols-2 gap-2  mt-2" >
            {herodata?.slice(2,10)?.map((d) => {
              return(
                <li className = "flex  shadow-md rounded-md justify-between gap-2 bg-white px-2 py-4" >
                  <img src = {d.urlToImage} className = "w-[5rem] h-auto" />
                  <p className = ""><a href = {d.url} target = "_blank">{d.title}</a></p>
                </li>
              )
            })}
            </ul>
          </div>
        </div>
        
        <div className = "w-[45%]" >
          
          <ul className = "grid grid-cols-2 gap-2" >
            {herodata?.slice(15,23)?.map((d) => {
              return(
                <li className = " px-2 py-4 shadow-md bg-white rounded-md flex gap-2">
                  <img className = "w-[5rem] h-auto " src = {d.urlToImage} />
                  <p className = ""><a href = {d.url} target="_blank">{d.title}</a></p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
}
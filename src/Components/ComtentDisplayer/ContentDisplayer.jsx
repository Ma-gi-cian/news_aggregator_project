import { useEffect, useState } from "react";
import Date from "../Date/Date";


export default function ContentDisplayer(props){

    const BookMarkHandler = (url, title, description) => {
        console.log(url, title, description);
    }
    const [data, setData] = useState([]);
    const data_given = props.data
    return(
        <section>
            
            <div className = "mt-12 mx-36">
                <div>
                <h1 className = "text-left"><a href = {props.name} className = " text-center text-2xl font-semibold text-blue-600 underline">{props.name}</a></h1>
                <ul>
                    {data_given?.map((d, index) => {
                        return(
                            <li key = {index} className = "flex  border-b-[5px] relative border-gray-300 bg-white rounded-md px-2 py-4 gap-4 items-center flex-row items- mt-2  ">
                                <div className = "px-0 max-w-md ">
                                    <img src = {d.urlToImage} className = "max-w-[10rem] px-0 h-auto"/>
                                </div>
                                <div classname = "">
                                    <a href = {d.url} target="_blank" className = "text-xl text-blue-400" >{d.title}</a>
                                    <p className = "text-lg">{d.description}</p>
                                    <div className = "text-gray-600 flex items-center justify-between">
                                        <p>{d.publishedAt}</p>
                                        <button className = "border-gray-600 border-[2px] hover:text-white hover:bg-gray-600 px-2 py-1 mr-4 mb-2 absolute right-0 bottom-0 " onClick={() => {BookMarkHandler(d.url, d.title, d.description)}}>BookMark</button>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                </div>
            </div>
        </section>
    );
}


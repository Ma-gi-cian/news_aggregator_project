import {LiaNewspaper} from 'react-icons/lia'
export default function Navigation(){
    return(
        <nav>
            <section className = "flex w-screen bg-white shadow-lg py-4 justify-around items-center">
            <div className = "w-1/2">
                <a href = "/" className = " flex items-center hover:text-blue-500 text-2xl"><LiaNewspaper className = "w-1/6 h-12"/>The Newspaper</a>
            </div>
            
            <div className = "flex flex-col  items-center justify-around w-1/3">
                <button className = "border-2 border-black max-[600px]:text-sm text-white px-2 py-1 hover:bg-white hover:text-black bg-black rounded-md">Subscribe</button>
                <p>Already a member - <a href = "/sign-in" className = "text-blue-500 hover:underline">Sign In</a></p>
            </div>
        </section>
        <section className = "bg-black text-sm flex w-screen items-center px-2 justify-around text-white ">
            <div className = "flex w-[60%] justify-around">
                <a href = "/India">India</a>
                <a href = "/International">International</a>
                <a href = "/Sports">Sports</a>
                <a href = "/Space">Space</a>
                <a href = "/Technology">Tech</a>
                <a href = "/Israel">Israel War</a>
            </div>
            <div className = "flex w-[20%]  justify-between">
                <p>50&deg;C</p>
                <button className = "h-full bg-blue-600">Subscribe</button>
                <button>Sign In</button>
            </div>
        </section>
        </nav>
    )
}
export default function Date(props){

    const d = new Date(props.date);
   
    return(
        <p>{d}</p>
    )
}
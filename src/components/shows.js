import ShowItem from "./Showitem";

const Shows = (props)=>{
    // Map over the list of shows passed as a prop (myShows)
    return props.myShows.map(
        (show)=>{
            return <ShowItem myshow={show} key={show._id} Reload={props.ReloadData} />
        }
    );
}

export default Shows;//export so it can be used elsewhere
import ShowItem from "./Showitem";

const Shows = (props)=>{
    return props.myShows.map(
        (show)=>{
            return <ShowItem myshow={show} key={show._id} Reload={props.ReloadData} />
        }
    );
}

export default Shows;
const Search = ()=>{
return(
    <>
            <div className="search-popup" data-popup="1">
            <div className="search-popup-content">
                <form>
                    <button type="submit"><i className="fa fa-search"></i></button>
                    <input type="text" placeholder="Type Your Search..."
                        required/>
                </form>
                <button type="button" className="close-popup"></button>
            </div>
        </div>
    
    </>
)
}


export default Search;
import React, { useState } from "react";
import SearchForm from "../../components/SearchForm";
import Results from "../../components/Results";


function SearchPage() {

    const [ books, setBooks ] = useState([]);

    console.log( "books", books );

    return(

        <div>


            <SearchForm  setBooks={setBooks}/>
        <Results books={books} />


        </div>



    )



}

export default SearchPage;
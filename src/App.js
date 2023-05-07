import React, {useState} from "react";
import postData from "./data/posts.json"
import Posts from "./Components/Posts";
import Table from "./Components/PostsByTable"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer";

function App() {
  const [searchBar, setSearchBar] = useState("")

  function handleSearchBar(event){
    event.preventDefault()
    setSearchBar(event.target.value)
  }  

  const filteredPosts = postData.filter(post => {
    return (
      post.location.toLowerCase().includes(searchBar.toLowerCase()) || 
      post.title.toLowerCase().includes(searchBar.toLowerCase())
    )
  });

  // Function was not needed because the cancel button works...
  // function cancelSearch (event) {
  //   event.preventDefault()
  //   setSearchBar("")
  // }
  return (
    <div className="container-fluid">
      <Nav />
      <main className="row">
        <span className="bg-light border border-dark-border">
          <h3 className="script-font p-4 text-center">Travel is the only thing you buy that makes you richer...</h3>
        </span>
        <form className="container form-group d-flex align-items-center" onChange={handleSearchBar}>
          <label>Search posts by location... </label>
          <input className="form-control" type="search"/>
          <button className="btn btn-warning p-1 m-2" type="submit">Cancel</button>
        </form>
         
        <div className="col-8">
          <Posts 
          posts = {filteredPosts}/>
        </div>

        <div className="col">
          <Table />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

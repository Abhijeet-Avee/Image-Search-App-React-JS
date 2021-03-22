import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { SearchList } from '../components/SearchList';

export default class Search extends React.Component{    //Smart Component; it extends React.Component
    constructor(props){
        //Initialize 'props' and 'states'
        super(props);   //calling a parent constructor
        //initalize the props from the parent and give it to child
        //props = {} ; It is an empty object
        //props.title = "Image Search App"
        this.state = {imagedata:[]};        //state contains data; intially it is empty
        this.searchTxtValue = '';
    }
    //It is called automatically; live cycle method: componentDidMount()
    componentDidMount(){     //predefined method; if the component is visible/mounted then give me the data
        //this.giveMeTheData();
    }
    giveMeTheData(searchValue){
        //Note the use of `` with url and variable
        const url = `https://api.giphy.com/v1/gifs/search?api_key=4d4RVOWEliCA6F6L87O6k0HPTnWT7Bun&q=${searchValue}&limit=5`;
        const promise = fetch(url);     //predefined function to fetch data
        promise.then(response=>{
            var p = response.json();    //response converted into json
            p.then(result=>{
                console.log('Data is ',result.data);
                this.setState({imagedata:result.data});    //set the state of a component using data, internally calls render;
                
                //console.log('RENDER:::: IMAGE DATA IS ',this.state.imagedata);
            }).catch(err=>{
                console.log('Error in JSON ',err);
            })
            console.log('Response is coming ',response);
        }).catch(err=>{
            console.log('Error coming from the Source ',err);
        })
    }
    takeInput(event){
        let data = event.target.value;
        this.searchTxtValue = data;
        console.log('Calling by child ',this.searchTxtValue);
    }
    searchNow(){
        console.log('Search Button is Clicked');
        this.giveMeTheData(this.searchTxtValue);
    }
    render(){
        return(
            <div>
            <h1 className='alert-info text-center'>{this.props.title} &nbsp; {this.props.name}</h1> {/** use bind(this) to bind the 'this' to the prop passed to the child so that it does not get lost when called from child[avoid undefined error] */}
            <SearchBar takeInput={this.takeInput.bind(this)} btClick={this.searchNow.bind(this)}/>     {/*passing function from parent to child using props*/}
            <SearchList imagedata={this.state.imagedata}/>  
            </div>
        )
    }
}





/* DUMB n OLD
function Search(){
    return(
        <div>
            <h1 className='alert-info text-center'>Search Engine App</h1>
            <SearchBar/>
            <SearchList/>
        </div>
    )
}
export default Search;    // declaring a default export
*/
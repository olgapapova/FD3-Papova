import { updateLoadState, updateData } from "./booksFilterSlice.js";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


let booksFilt;
function FilterChange (){
    booksFilt = useSelector( state => state.booksChange.dataChange );
    console.log(booksFilt)
};


export async function booksFilterLoad(dispatch) { 
  
  FilterChange ();

  try {
    dispatch( updateLoadState({state:1,error:null}) );
    const response=await fetch("http://localhost:3001/list?q="+booksFilt);
    if ( response.ok ) {
      const dataF=await response.json();
      console.log(dataF);
      dispatch( updateLoadState({state:2,error:null}) );
      dispatch( updateData(dataF) );
    }
    else {
      dispatch( updateLoadState({state:3,error:"HTTP error "+response.status}) );
    }
    }
    catch ( err ) {
      dispatch( updateLoadState({state:3,error:err.message}) );
  }
};
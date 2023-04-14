import { updateLoadListState, updateDataList } from "./booksListSlice.js";

export async function booksList4Load(dispatch) {
  try {
    dispatch( updateLoadListState({state:1,error:null}) );
    const response=await fetch("http://localhost:3001/list?_limit=30&_page=4");
    if ( response.ok ) {
      const dataList=await response.json();
      dispatch( updateLoadListState({state:2,error:null}) );
      dispatch( updateDataList(dataList) );
    }
    else {
      dispatch( updateLoadListState({state:3,error:"HTTP error "+response.status}) );
    }
    }
    catch ( err ) {
      dispatch( updateLoadListState({state:3,error:err.message}) );
  }
};
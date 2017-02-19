/**
 * Created by admin on 09.02.2017.
 */
class CommentService {
  constructor($http) {
    this.baseUrl ="http://localhost:4001/api/v1/comments";
    this.http = $http;
  }

  fetchData(id){
    return this.http.get(this.baseUrl+"/"+id)
  }


  addData(userName, userText, id){
    debugger;
    return this.http.post(this.baseUrl,
      { "item_id": id,
        "text": userText,
        "author": userName,
        "created_on": new Date() })

  }



}

export {CommentService}

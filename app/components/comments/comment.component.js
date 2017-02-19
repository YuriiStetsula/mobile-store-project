/**
 * Created by admin on 09.02.2017.
 */

import template from "./comment.component.html"
import  "./comment.component.styl"

class Controller{
  constructor($stateParams,commentService){
    this.comment = commentService
    this.commentId = $stateParams.id

    this.getComment();
  }

  getComment(){
    this.comment.fetchData(this.commentId).then((resp)=>{
      debugger;
      this.review = resp.data

    })
  }

  addComment(){
    debugger;
    if (this.newUserName === undefined || this.newUserMessage === undefined ){
      alert ("type some symbols")
    } else {
      this.comment.addData(this.newUserName, this.newUserMessage,this.commentId).then((resp)=>{
        console.log(resp)
        this.getComment();
        this.newUserName = ""
        this.newUserMessage = ""
      })
    }

  }

}

const CommentComponent = {
  template,
  controller: Controller ,


}

export {CommentComponent}

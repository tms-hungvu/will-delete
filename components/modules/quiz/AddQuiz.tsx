import { SwitcherOutlined } from "@ant-design/icons";

export default function AddQuiz(){
    return (<div className="app__quizz--list">
         <div className="app__quizz--add">
            <div className="app__quizz--add-delete"> &times; </div>
            <div className="app__quizz--add-title">
                 <div className="app__quizz--add-title-text">
                      <span>Question</span>
                      <div className=""> 1 of 1 </div>
                 </div>
                 <div className="app__quizz--add-title-icon">
                     <SwitcherOutlined />
                 </div>
            </div>

            <div className="app__quizz--add-content">
                  <div className="app__quizz--add-content-question">
                       <div className="app__quizz--add-content-question-content">
                            <div className="">Question</div>
                       </div>
                   </div> 
                   <div className="app__quizz--add-content-answer">
                       answer
                   </div> 
            </div>
        </div>
    </div>
   )
}
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Question from "./question";
import TextEditor from "@/components/Ckeditor/customEditor";
import { getRandomInitQuestion, getRandomNumber } from "@/utils/randomNumber";



interface ItemType {
    id: number;
    name: string;
    init : any;
  }

export default function SortAble(){
  const [newBlogData, setNewBlogData] = useState<any>({});
  const [answerEdit, setAnswerEdit] = useState<any>();

  
 
  
  
    const [state, setState] = useState<any>(getRandomInitQuestion());
      const [state1, setState1] = useState<any>([]);

    
      // pull: "clone"
      const handleSetState = (data : ItemType[]) => {
        setState(getRandomInitQuestion());
        console.log("data 1", data)
      }
      const handleSetState1 = (data : any) => {
        setState1(data);
      //  console.log("data 2", data)
      }


      const onOpenCkeditor = (item : any) => {
         setAnswerEdit(item);
      }
      const onCloseAndSaveCkeditor = (payload : any) => {
       
         console.log(payload)
         setAnswerEdit(0);
         setState1((prev : any) => {
             return prev.map((item : any) => {
                if(item.type == payload.questionType){
                  return {
                    ...item,
                    initQuestion : item.initQuestion?.map((answer : any) => {
                       if(answer.id == payload.answerId ){
                         return {
                            ...answer,
                            title : payload.newTitle
                         }
                       }else {
                        return answer;
                       }
                    })
                  }
                }else {
                  return item;
                }
             })
         })
      }

      const onChangePoint = (newPoinst : any,answerId : any, questionType : any ) => {
         //console.log(newPoinst, answerId, questionType)
         setState1((prev : any) => {
          return prev.map((item : any) => {
             if(item.type == questionType){
               return {
                 ...item,
                 initQuestion : item.initQuestion?.map((answer : any) => {
                    if(answer.id == answerId ){
                      return {
                         ...answer,
                         points : newPoinst 
                      }
                    }else {
                     return answer;
                    }
                 })
               }
             }else {
               return item;
             }
          })
      })
      }
      const onClickAddAnswer = (questionType : any) => {
      
         setState1((prev : any) => {
          return prev.map((item : any) => {
             if(item.type == questionType){
               return {
                 ...item,
                 initQuestion : [
                  ...item.initQuestion, 
                  {
                    id: getRandomNumber(),
                    title : 'Answer',
                    correctAnswer : false,
                    points : 0
                  },
                  {
                    id: getRandomNumber(),
                    title : 'Answer',
                    correctAnswer : false,
                    points : 0
                  },
                ]
               }
             }else {
               return item;
             }
          })
      })
      }

      const onDeleteAnswer = (questionType : any, answerId : any) => {
        setState1((prev : any) => {
          return prev.map((item : any) => {
             if(item.type == questionType){
               return {
                 ...item,
                 initQuestion : item.initQuestion.filter((a : any) => a.id !=  answerId)
                 
               }
             }else {
               return item;
             }
          })
      })
      }

      
      return (
        <> 
        {/**   <div className="pb-8">
            <TextEditor setNewBlogData={setNewBlogData} newBlogData={newBlogData} />
            <button  onClick={() => handleSubmit()}>
                Submit
              </button>
    </div> */}



          <div className="flex gap-[100px] px-[20px]">

          <ReactSortable  group={{name: "a", pull: "clone"}}  list={state} setList={handleSetState}> 
       
          {state.map((item : any, key : number) => (
            <div style={{margin: "20px", border : '1px solid red',padding : '10px'}} key={key}>{item.name}</div>
          ))}

        </ReactSortable>







        <ReactSortable style={{background: "rgba(255, 0, 0, 0.211)", border: '1px solid red', width : '50%' }} group={{name: 'b',put: ['a']}} list={state1} setList={handleSetState1}>
          
          {state1.map((item : any, key : number) => (
            <div style={{margin: "20px", border : '1px solid red',padding : '10px', width : '100%'}} key={key}>
                <h3  >{item.name} </h3>  
                <Question data={item} onCloseAndSaveCkeditor={onCloseAndSaveCkeditor} onOpenCkeditor={onOpenCkeditor} answerEdit={answerEdit} onChangePoint={onChangePoint} onClickAddAnswer={onClickAddAnswer} onDeleteAnswer={onDeleteAnswer}/> 
                
            </div>
          ))}
        </ReactSortable>



          </div>
        
        </>
      );
}


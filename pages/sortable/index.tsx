import { useEffect, useRef, useState } from "react";
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
  const ref = useRef<any>();
  const [newContentQuestion, setContentQuestion] = useState<any>({});
  const [questionEdit, setQuestionEdit] = useState<any>();
  const [answerEdit, setAnswerEdit] = useState<any>();
  const [state, setState] = useState<any>(getRandomInitQuestion());
  const [state1, setState1] = useState<any>([]);
  

 console.log(state1)
  useEffect(() => {
    setContentQuestion({content : questionEdit?.name});
  }, [questionEdit])


  useEffect(() => {
    
    function handleClickOutside(event : any) {
       
       if (ref.current && !ref.current?.contains(event.target)) {
           onCloseAndSaveQuestion(questionEdit.id, newContentQuestion.content);
           setQuestionEdit(0)

       }
     }
     
     document.addEventListener("mousedown", handleClickOutside);
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, [ref, newContentQuestion]);

      const handleCorrectAnswerRadio = (isCorrect : any, questionId : any, answerId : any) => {
          
          setState1((prev : any) => {
            return prev.map((item : any) => {
               if(item.id == questionId){
                 return {
                   ...item,
                   initQuestion : item.initQuestion?.map((answer : any) => {
                      if(answer.id == answerId ){
                        return {
                           ...answer,
                           correctAnswer : isCorrect 
                        }
                      }else {
                         return {
                           ...answer,
                           correctAnswer : false
                         } 
                     }
                   })
                 }
               }else {
                 return item;
               }
            })
        })

      }

      const handleCorrectAnswer = (isCorrect : any, questionId : any, answerId : any) => {
        
         setState1((prev : any) => {
          return prev.map((item : any) => {
             if(item.id == questionId){
               return {
                 ...item,
                 initQuestion : item.initQuestion?.map((answer : any) => {
                    if(answer.id == answerId ){
                      return {
                         ...answer,
                         correctAnswer : isCorrect 
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
    
      // pull: "clone"
      const handleSetState = (data : ItemType[]) => {
        setState(getRandomInitQuestion());
        //console.log("data 1", data)
      }
      const handleSetState1 = (data : any) => {
        setState1(data);
      //  console.log("data 2", data)
      }

      const onCloseAndSaveQuestion = (questionId : any, newText : any) => {
        //console.log(questionId, newText,state1);
        setState1((prev : any) => {
            return prev.map((item : any) => {
            
               if(item.id == questionId){
                  return {
                    ...item,
                    name : newText
                  }
               }else {
                return item;
               }
            })
        })
      }
      const onOpenCkeditor = (item : any) => {
         setAnswerEdit(item);
      }
      const onOpenCkeditorQuestion = (item : any) => {
        setQuestionEdit(item)
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
      const onClickAddAnswer = (questionId : any, questionType : any) => {
      console.log(questionId)
         setState1((prev : any) => {
          return prev.map((item : any) => {
             if(item.id == questionId){
              if(questionType == 3){
                return {
                  ...item,
                  initQuestion : [
                   ...item.initQuestion, 
                   {
                     id: getRandomNumber(),
                     image : 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg',
                     correctAnswer : false,
                     points : 0
                   },
                   {
                     id: getRandomNumber(),
                     image : 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
                     correctAnswer : false,
                     points : 0
                   },
                 ]
                }
              }else {
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
      const onDeleteQuestion = (questionId : any) => {
       
        setState1((prev : any) => {
           return prev.filter((item : any) => item.id != questionId);
        })

      }
      
      return (
        <> 
          



          <div className="flex gap-[100px] px-[20px]">

          <ReactSortable  group={{name: "a", pull: "clone"}}  list={state} setList={handleSetState}> 
       
          {state.map((item : any, key : number) => (
            <div style={{margin: "20px", border : '1px solid red',padding : '10px'}} key={key}>{item.name}</div>
          ))}

        </ReactSortable>



        <ReactSortable style={{background: "rgba(255, 0, 0, 0.211)", border: '1px solid red', width : '50%' }} group={{name: 'b',put: ['a']}} list={state1} setList={handleSetState1}>
          
          {state1.map((item : any, key : number) => (
            <div className="flex flex-col gap-[20px] relative" style={{margin: "20px", border : '1px solid red',padding : '10px', width : '100%'}} key={key}>
                 
                 <div onClick={() => onDeleteQuestion(item.id)} className=" cursor-pointer rounded-full flex items-center justify-center absolute top-[-10px] right-[-10px] text-white text-[35px] bg-black w-[30px] h-[30px]"> &times;</div>
                <div onClick={() => { onOpenCkeditorQuestion(item)}} className="bg-red-500 w-full h-[120px] flex justify-center items-center"  > {questionEdit?.id == item.id ?  <div ref={ref}> <TextEditor setNewBlogData={setContentQuestion} newBlogData={newContentQuestion} /> </div> : <div dangerouslySetInnerHTML={{ __html: item.name }} />}  </div>  
                <Question data={item} onCloseAndSaveCkeditor={onCloseAndSaveCkeditor} onOpenCkeditor={onOpenCkeditor} answerEdit={answerEdit} onChangePoint={onChangePoint} onClickAddAnswer={onClickAddAnswer} onDeleteAnswer={onDeleteAnswer} handleCorrectAnswer={handleCorrectAnswer} handleCorrectAnswerRadio={handleCorrectAnswerRadio}/> 
                
            </div>
          ))}
        </ReactSortable>



          </div>
        
        </>
      );
}


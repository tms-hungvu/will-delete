import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Question from "./question";
import TextEditor from "@/components/Ckeditor/customEditor";





interface ItemType {
    id: number;
    name: string;
    init : any;
  }

export default function SortAble(){
  const [newBlogData, setNewBlogData] = useState<any>({});
  const [answerEdit, setAnswerEdit] = useState<any>();



  const handleSubmit =()=>{console.log(newBlogData)}
  
    const [state, setState] = useState<any>([
        { 
          id: 1, 
          name: "Checkbox question",
          type : 1,
          initQuestion : [
             {
                id: 1,
                title : 'Answer checkbox 1',
                correctAnswer : false,
                points : 0
             },
             {
                id: 2,
                title : 'Answer checkbox 2',
                correctAnswer : false,
                points : 0
             }
          ]
          
        },
        { 
          id: 2, 
          name: "Radio question",
          type : 2,
          initQuestion : [
            {
               id: 3,
               title : 'Answer Radio 1',
               correctAnswer : false,
               points : 0
            },
            {
               id: 4,
               title : 'Answer Radio 2',
               correctAnswer : false,
               points : 0
            }
         ]

         },
        { 
          id: 3, 
          name: "Image question" ,
          type : 3,
          initQuestion : [
            {
               id: 5,
               image : 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg',
               correctAnswer : false,
               points : 0
            },
            {
               id: 6,
               image : 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
               correctAnswer : false,
               points : 0
            }
         ]
        },
      ]);
      const [state1, setState1] = useState<any>([]);

    
      // pull: "clone"
      const handleSetState = (data : ItemType[]) => {
        setState( data);
        //console.log("data 1", data)
      }
      const handleSetState1 = (data : any) => {
        setState1(data);
      //  console.log("data 2", data)
      }

      const onOpenCkeditor = (item : any) => {

        
         setAnswerEdit(item);

      }

      
      return (
        <> 
           <div className="pb-8">
            <TextEditor setNewBlogData={setNewBlogData} newBlogData={newBlogData} />
            <button  onClick={() => handleSubmit()}>
                Submit
              </button>
    </div>



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
                <Question data={item} onOpenCkeditor={onOpenCkeditor} answerEdit={answerEdit}/> 
                
            </div>
          ))}
        </ReactSortable>



          </div>
        
        </>
      );
}
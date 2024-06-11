import TextEditor from "@/components/Ckeditor/customEditor"
import { useEffect, useRef, useState } from "react"

export default function Question({data,onCloseAndSaveCkeditor, onOpenCkeditor, answerEdit, onChangePoint, onClickAddAnswer, onDeleteAnswer, handleCorrectAnswer, handleCorrectAnswerRadio} : any){

   const [newBlogData, setNewBlogData] = useState<any>();
   const ref = useRef<any>();

  
  useEffect(() => {
    setNewBlogData({content : answerEdit?.title});
  }, [answerEdit])

 
  useEffect(() => {
   
   function handleClickOutside(event : any) {
      if (ref.current && !ref.current?.contains(event.target)) {
          //console.log(newBlogData, data, answerEdit);
          const payload = {
             newTitle : newBlogData.content,
             questionType : data.type,
             answerId : answerEdit.id
          }
          onCloseAndSaveCkeditor(payload);
      }
    }
   
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, newBlogData]);

 
   const onChangeCorrectAnswer = (e : any, answerId : any, questionId: any) => {
      
      if (e.target.checked) {
         handleCorrectAnswer(true,questionId, answerId )
       } else {
         handleCorrectAnswer(false,questionId, answerId )
       }
   }

   const onChangeCorrectAnswerRadios = (e : any, answerId : any, questionId: any) => {
      
       handleCorrectAnswerRadio(e.target.checked, questionId, answerId);
   }

    if(data.type == 1){
        return (
        
          <div className="flex gap-[40px] flex-col">
          <div className="grid-cols-2 grid gap-[20px]">
             { data.initQuestion.map((item : any, key  : number) => (
                <div key={key} className="flex flex-col relative" >
                     <div onClick={() => onDeleteAnswer(data.type, item.id)} className=" cursor-pointer rounded-full flex items-center justify-center absolute top-[-10px] right-[-10px] text-white text-[35px] bg-black w-[30px] h-[30px]"> &times;</div>
                 <div onClick={() => onOpenCkeditor(item)} className="h-[120px] " style={{background : 'rgba(0, 0, 255, 0.439)'}}>
                  
                     <div className=" h-full flex justify-center items-center " > 
                        {answerEdit?.id == item.id ?  <div className=" w-full overflow-auto" ref={ref}> 
                        <TextEditor  setNewBlogData={setNewBlogData} newBlogData={newBlogData} /> 
                        </div> :   <div dangerouslySetInnerHTML={{ __html: item.title }} />}
                     </div>
                 </div>
                 <div className="flex justify-between">
                    <div className="">
                         <label htmlFor="">Correct answer</label>
                        <input checked={item.correctAnswer} onChange={(e) => onChangeCorrectAnswer(e, item.id, data.id)}  type="checkbox"/>
                    </div>

                    <div className="">
                         <label htmlFor="">Points</label>
                         <input onChange={(e) => onChangePoint(e.target.value, item.id, data.type)} value={item.points} className="w-[60px] h-[20px] border-[2px] border-black border-solid" type="text" />
                    </div>
                 
                 </div>
                </div>
             ))}
           
          </div>
          <button onClick={() => onClickAddAnswer(data.id, data.type)} className=" w-full bg-blue-500 text-white">Add answer</button>
          </div>
      
      )
     }
     if(data.type == 2){
      return (
      <div className="flex flex-col gap-[40px]">
        <div className="grid-cols-2 grid gap-[20px]">
         { data.initQuestion.map((item : any, key  : number) => (
            <div key={key}  className="flex flex-col relative">
            <div onClick={() => onDeleteAnswer(data.type, item.id)} className=" cursor-pointer rounded-full flex items-center justify-center absolute top-[-10px] right-[-10px] text-white text-[35px] bg-black w-[30px] h-[30px]"> &times;</div>

             <div onClick={() => onOpenCkeditor(item)} className="h-[120px]" style={{background : 'rgba(255, 166, 0, 0.346)'}}>
                     <div className=" h-full flex justify-center items-center " > 
                        {answerEdit?.id == item.id ?  <div className=" w-full overflow-auto" ref={ref}> 
                        <TextEditor  setNewBlogData={setNewBlogData} newBlogData={newBlogData} /> 
                        </div> :  <div dangerouslySetInnerHTML={{ __html: item.title }} />}
                     </div>
            </div>

             <div className="flex justify-between">
                <div className="">
                     <label htmlFor="">Correct answer</label>
                    <input onChange={(e) => onChangeCorrectAnswerRadios(e, item.id, data?.id)} checked={item.correctAnswer} name={data?.id} type="radio"/>
                </div>

                <div className="">
                     <label htmlFor="">Points</label>
                    <input onChange={(e) => onChangePoint(e.target.value, item.id, data.type)} value={item.points} className="w-[60px] h-[20px] border-[2px] border-black border-solid" type="text" />
                </div>
             
             </div>
            </div>
         ))}
      
      </div>
      <button onClick={() => onClickAddAnswer(data.id, data.type)} className=" w-full bg-blue-500 text-white">Add answer</button>
      </div>
      
    )
   }

   if(data.type == 3){
      return (
      <div className="flex flex-col gap-[40px]">
        <div className="grid-cols-2 grid gap-[20px] ">
         { data.initQuestion.map((item : any, key  : number) => (
            <div key={key}  className="flex flex-col relative">
                <div onClick={() => onDeleteAnswer(data.type, item.id)} className=" cursor-pointer rounded-full flex items-center justify-center absolute top-[-10px] right-[-10px] text-white text-[35px] bg-black w-[30px] h-[30px]"> &times;</div>
             <div className="h-[120px]" style={{background : 'rgba(0, 0, 255, 0.439)'}}>
                 <div className=" h-full flex justify-center items-center "><img src={item.image}  alt="" className="object-cover w-full h-[120px]" /></div>
             </div>
             <div className="flex justify-between">
                <div className="">
                     <label htmlFor="">Correct answer</label>
                     <input onChange={(e) => onChangeCorrectAnswerRadios(e, item.id, data?.id)} checked={item.correctAnswer} name={data?.id} type="radio"/>
                </div>

                <div className="">
                     <label htmlFor="">Points</label>
                    <input onChange={(e) => onChangePoint(e.target.value, item.id, data.type)} value={item.points} className="w-[60px] h-[20px] border-[2px] border-black border-solid" type="text" />
                </div>
             
             </div>
            </div>
         ))}
      
      </div>
      <button onClick={() => onClickAddAnswer(data.id, data.type)} className=" w-full bg-blue-500 text-white">Add answer</button>
      </div>
      
    )
   }
}
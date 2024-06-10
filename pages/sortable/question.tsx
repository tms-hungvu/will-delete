import TextEditor from "@/components/Ckeditor/customEditor"
import { useEffect, useRef, useState } from "react"
export default function Question({data, onOpenCkeditor, answerEdit} : any){
    console.log(answerEdit)
   const [newBlogData, setNewBlogData] = useState<any>();
   const ref = useRef();
  


  function handleClickOutside(event : any) {
    if (ref.current && !ref.current?.contains(event.target)) {
      console.log(newBlogData)
    }
  }
  useEffect(() => {
    setNewBlogData({content : answerEdit?.title});
  }, [answerEdit])
  useEffect(() => {
    

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
       {/* <div className="pb-8">
            <TextEditor setNewBlogData={setNewBlogData} newBlogData={newBlogData} />
            <button  onClick={() => handleSubmit()}>
                Submit
              </button>
    </div> */}


    if(data.type == 1){
        return (
        
          <div className="flex gap-[40px] flex-col">
          <div className="grid-cols-2 grid gap-[20px]">
             { data.initQuestion.map((item : any, key  : number) => (
                <div key={key} className="flex flex-col" >
                 <div onClick={() => onOpenCkeditor(item)} className="h-[120px]" style={{background : 'rgba(0, 0, 255, 0.439)'}}>
                     <div className=" h-full flex justify-center items-center " > 
                        {answerEdit?.id == item.id ?  <div className=" w-full overflow-auto" ref={ref}><TextEditor  setNewBlogData={setNewBlogData} newBlogData={newBlogData} /> </div> :  <span> {item.title}</span>}
                     </div>
                 </div>
                 <div className="flex justify-between">
                    <div className="">
                         <label htmlFor="">Correct answer</label>
                        <input type="checkbox"/>
                    </div>

                    <div className="">
                         <label htmlFor="">Points</label>
                        <input className="w-[60px] h-[20px] border-[2px] border-black border-solid" type="text" />
                    </div>
                 
                 </div>
                </div>
             ))}
           
          </div>
          <button className=" w-full bg-blue-500 text-white">Add answer</button>
          </div>
      
      )
     }
     if(data.type == 2){
      return (
      <div className="flex flex-col gap-[40px]">
        <div className="grid-cols-2 grid gap-[20px]">
         { data.initQuestion.map((item : any, key  : number) => (
            <div key={key}  className="flex flex-col">
             <div className="h-[120px]" style={{background : 'rgba(255, 166, 0, 0.346)'}}>
                 <div className=" h-full flex justify-center items-center"><span> {item.title}</span></div>
             </div>
             <div className="flex justify-between">
                <div className="">
                     <label htmlFor="">Correct answer</label>
                    <input name="radios" type="radio"/>
                </div>

                <div className="">
                     <label htmlFor="">Points</label>
                    <input className="w-[60px] h-[20px] border-[2px] border-black border-solid" type="text" />
                </div>
             
             </div>
            </div>
         ))}
      
      </div>
      <button className=" w-full bg-blue-500 text-white">Add answer</button>
      </div>
      
    )
   }

   if(data.type == 3){
      return (
      <div className="flex flex-col gap-[40px]">
        <div className="grid-cols-2 grid gap-[20px]">
         { data.initQuestion.map((item : any, key  : number) => (
            <div key={key}  className="flex flex-col">
             <div className="h-[120px]" style={{background : 'rgba(0, 0, 255, 0.439)'}}>
                 <div className=" h-full flex justify-center items-center "><img src={item.image}  alt="" className="object-cover w-full h-[120px]" /></div>
             </div>
             <div className="flex justify-between">
                <div className="">
                     <label htmlFor="">Correct answer</label>
                    <input type="radio"/>
                </div>

                <div className="">
                     <label htmlFor="">Points</label>
                    <input className="w-[60px] h-[20px] border-[2px] border-black border-solid" type="text" />
                </div>
             
             </div>
            </div>
         ))}
      
      </div>
      <button className=" w-full bg-blue-500 text-white">Add answer</button>
      </div>
      
    )
   }
}
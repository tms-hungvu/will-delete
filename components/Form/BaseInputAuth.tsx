

import { Controller } from "react-hook-form";

interface IBaseInputAuth {
    control : any;
    title : string;
    name : string;
    messageError : string | undefined;
    placeholder : string;
    type : string;
    icon ?: React.ReactNode | undefined;
}
export default function BaseInputAuth({control ,title, name, messageError, placeholder, type, icon = undefined} : IBaseInputAuth){
     return (<div className="form-group-auth">
           
                <Controller
                        name={name}
                        control={control}
                        render={({ field }) => 
                          <div className="form-group-auth-input"> 
                               <div className="form-group-auth-input-icon">
                                   {icon && icon} 
                               </div>
                               <input type={type} placeholder={placeholder} {...field} />
                         </div>}
                />
            <span className="form-group-auth-error-text"> {messageError}</span>
    </div>)
}
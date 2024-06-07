import { LoadingOutlined } from "@ant-design/icons";

export default function ButtonSubmitRegister({loading} : {loading : boolean}){
  return <>
      <button className={loading ? "signup-btn-submit-loading" : ""}  type={loading ? 'button' : 'submit'}>
        {loading && <LoadingOutlined />}
         <span> Signup </span>
      </button>
  </>
}
import { CheckSquareOutlined, FileImageOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import AddQuiz from "@/components/modules/quiz/AddQuiz";
import PreviewQuiz from "@/components/modules/quiz/PreviewQuiz";
export default function QuizManager(){
    
const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Questions',
      children: <AddQuiz />,
    },
    {
      key: '2',
      label: 'Preview',
      children: <PreviewQuiz/>,
    }
  ];

    return (
       <div className="container-fluid">
           <div className="app__container--quiz my-3">
            <div className="app__quiz">
                <div className="app__quiz--sidebar">
                     <div className="app__quiz--sidebar-item">
                         <CheckSquareOutlined />
                         <span>Checkbox question</span>
                     </div>
                     <div className="app__quiz--sidebar-item">
                         <QuestionCircleOutlined />
                         <span>Radio question</span>
                     </div>
                     <div className="app__quiz--sidebar-item">
                         <FileImageOutlined />
                         <span>Image question</span>
                     </div>
                </div>
                <div className="app__quiz--content">
                     <div className="app__quiz--content-title">
                          <div className="app__quiz--content-title-text"><span>Quizz Name</span></div>
                          <div className="app__quiz--content-title-btn">
                               <button>Save</button>
                          </div>
                     </div>
                     <div className="app__quiz--content-tabs">
                          <Tabs defaultActiveKey="1" items={items}  />
                     </div>
                </div>
            </div>
        </div>
       </div>
    )
}
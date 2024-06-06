import logo from "@/constants/svg-img";
import Icon from "@ant-design/icons/lib/components/Icon";
import { Button, Layout, Switch, Typography, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";

type Props = {};
const { Content } = Layout;
const { Text } = Typography;

const dataResult = [
  {
    id: 1,
    name: "name",
    img: logo.src,
    count: 4,
    rank: "University",
  },
  {
    id: 2,
    name: "name",
    img: logo.src,
    count: 4,
    rank: "University",
  },
];
const UserCollection = (props: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Sider width={"35%"} style={{ backgroundColor: "#f5f5f5" }}>
        <p
          style={{
            backgroundColor: colorBgContainer,
          }}
          className="p__p-result-stt"
        >
          2 Result
        </p>
        {dataResult.map((item) => (
          <>
            <div
              className="div__div--result-item"
              style={{
                backgroundColor: colorBgContainer,
              }}
            >
              <img src={item.img} />
              <div>
                <p className="p__p-result-title">Quiz</p>
                <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  {item.name}
                </p>
                <div className="flex gap-4">
                  <p>{item.count} questions</p>
                  <p>{item.rank}</p>
                </div>
              </div>
            </div>
          </>
        ))}
        <Button className="btn__btn--create">Create new quizz</Button>
      </Sider>
      <Content
        style={{
          backgroundColor: colorBgContainer,
          borderRadius: borderRadiusLG,
          marginLeft: "2rem",
        }}
      >
        <div className="w-[80%] p-8 m-8 border border-2-[#f5f5f5] mx-auto">
          <button className="btn__btn--share">Share</button>
          <p className="mb-2">Demo</p>
          <p>By Hung Minh | Viet Nam</p>
          <div>
            <button className="btn__btn--play">Play</button>
            <Icon type="caret-down" />
          </div>
          <button className="float-right flex items-center gap-4 font-bold">Show Answers <Switch/></button>
          <p className="font-bold">4 questions</p>

        </div>
      </Content>
    </>
  );
};

export default UserCollection;

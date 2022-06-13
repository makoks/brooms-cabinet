import React from 'react';
import { Avatar, Space, Typography, Row, Col } from 'antd';
import { EvgeniyaPhoto, RocketImage } from '../../images';

export const WorkProfile = () => {
  return (
    <Row align="middle" className="cabinet__profile__row">
      <Col span={6}>
        <img src={RocketImage} alt="rocket" className="cabinet__profile__3dimage_work" />
      </Col>
      <Col span={18}>
        <Space direction="vertical" size="large">
          <Avatar src={EvgeniyaPhoto} size={300} />
          <Typography.Title className="cabinet__profile__title">Евгения Владимировна</Typography.Title>
        </Space>
      </Col>
    </Row>
  );
};

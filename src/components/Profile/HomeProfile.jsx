import React from 'react';
import { Avatar, Space, Typography, Row, Col } from 'antd';
import { JanePhoto, PlantImage } from '../../images';

export const HomeProfile = () => {
  return (
    <Row align="middle" className="cabinet__profile__row">
      <Col span={18}>
        <Space direction="vertical" size="large">
          <Avatar src={JanePhoto} size={300} />
          <Typography.Title className="cabinet__profile__title">Оторва Джейн</Typography.Title>
        </Space>
      </Col>
      <Col span={6} className="cabinet__profile__image-col">
        <img src={PlantImage} alt="plant" className="cabinet__profile__3dimage_home" />
      </Col>
    </Row>
  );
};

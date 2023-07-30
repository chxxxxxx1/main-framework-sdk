/*
 * @Author: chessman cjb15770595346@163.com
 * @Date: 2023-07-30 14:28:50
 * @LastEditors: chessman cjb15770595346@163.com
 * @LastEditTime: 2023-07-30 15:23:59
 * @FilePath: /main-framework-sdk/src/NavTop/index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import { Col, Row } from 'antd';
import React from 'react';
import { styled } from 'styled-components';

const navHeight = 52;

const Container = styled.div`
  position: fixed;
  height: ${navHeight}px;
  width: 100%;
  left: 0;
  top: 0;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  z-index: 1000;
`;

const NewCol = styled(Col)`
  height: 52px;
  padding: 15px 10px;
`;

interface IProps {
  renderLeftSlot?: () => React.ReactNode;
  renderRightSlot?: () => React.ReactNode;
}

export const NavTop: React.FC<IProps> = ({
  renderLeftSlot,
  renderRightSlot,
}) => {
  return (
    <Container>
      <Row justify={'space-between'}>
        <Row>
          <NewCol>logo</NewCol>
          {renderLeftSlot && <NewCol>{renderLeftSlot()}</NewCol>}
        </Row>
        <Row>
          {renderRightSlot && <NewCol>{renderRightSlot()}</NewCol>}
          <NewCol>User</NewCol>
        </Row>
      </Row>
    </Container>
  );
};

import React from "react"

import { Row, Col, RowProps } from "antd"

export const VerticalList: React.FC<RowProps> = ({ children, ...rowProps }) => {
    return <Row gutter={10} {...rowProps}>
        {React.Children.map(children, (children, index) => <Col key={index}>{children}</Col> as React.ReactNode)}
    </Row>
}
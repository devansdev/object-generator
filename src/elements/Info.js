import { Card, Col, Row, Statistic } from "antd";

const Info = (props) => {
  return (
    <Row>
      <Col span="6">
        <Card>
          <Statistic title="Alphabetical Strings" value={props.info.alphabatic} />
        </Card>
      </Col>
      <Col span="6">
        <Card>
          <Statistic title="Real Numbers" value={props.info.realNumber} />
        </Card>
      </Col>
      <Col span="6">
        <Card>
          <Statistic title="Integers" value={props.info.integer} />
        </Card>
      </Col>
      <Col span="6">
        <Card>
          <Statistic title="Alphanumerics" value={props.info.alphanumerics} />
        </Card>
      </Col>
    </Row>
  );
};
export default Info;

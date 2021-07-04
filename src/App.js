import { Button, Col, Layout, Row } from 'antd';
import { useState } from 'react';
import './App.css';
import Generate from './elements/Generate';
import Info from './elements/Info';
import { saveData } from './utils/Utils';
const { Content } = Layout;

function App() {
  var [generatedObject, setGeneratedObject] = useState('');
  var [showReport, setShowReport] = useState(false);
  var [info, setInfo] = useState({
    alphabatic: 0,
    realNumber: 0,
    integer: 0,
    alphanumeric: 0,
  });  
  return (
    <Layout>
      <Content>
        <Row>
          <Col span={2} offset={11}>
            <Generate onGenerate={(generated, genInfo) => {
            console.log(generated, genInfo);
            setGeneratedObject(generated);
            setInfo(genInfo);
          }} />
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={11}>
            {generatedObject.length > 0 && <Button size="large" type="link" onClick={() => {
              saveData(generatedObject, Date.now().toString() + ".txt");
        }}>Download</Button>}
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={11}>
          {generatedObject.length > 0 && <Button type="primary" size="large" onClick={() => {
              setShowReport(true);
        }}>Report</Button>}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            {showReport && <Info info={info} />}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;

import { Button } from "antd";
import { useState } from "react";
import { generateObjects } from "../utils/Utils";

const Generate = (props) => {
    var [inProgress, setInprogress] = useState(false);
    return (<Button loading={inProgress} type="primary" size="large" onClick={() => {
        setInprogress(true);
        const [generated, generatedInfo] = generateObjects(2048000);
        props.onGenerate(generated, generatedInfo);
        setInprogress(false);
    }}>Generate</Button>);
}

export default Generate;
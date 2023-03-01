import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';

const DesktopTabs = ({ data }) => {
  return (
    <>
      <Tabs
        defaultActiveKey="Section 1"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        {data.map(item => (
          <Tab key={item.title} eventKey={item.title} title={item.title}>
            <Card>
              <div className="p-4" dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </>
  )
}

export default DesktopTabs
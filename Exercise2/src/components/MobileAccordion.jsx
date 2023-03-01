import Accordion from 'react-bootstrap/Accordion';

const MobileAccordion = ({ data }) => {
  return (
    <>
      <Accordion defaultActiveKey="Section 1">
        {data.map(({ title, content }) => (
          <Accordion.Item key={title} eventKey={title}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  )
}

export default MobileAccordion
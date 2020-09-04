import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { userPostService } from 'services';
import { format } from 'utils';

import 'App.css';

const USER = 'user';
const POST = 'post';

async function fetchUser(userId: number) {
  const data = await userPostService.getUserWithPosts(userId);
  return format(data);
}

async function fetchPost(postId: number) {
  const data = await userPostService.getPostWithUser(postId);
  return format(data);
}

function App() {
  const [data, setData] = useState('{}');
  const [option, setOption] = useState(USER);

  const handleUser = async ({ target }) => {
    if (option === USER) {
      setData(await fetchUser(target.value));
    }
    if (option === POST) {
      setData(await fetchPost(target.value));
    }
  };

  return (
    <div className='App'>
      <Container>
        <h1 className='m-4'>Design Patterns in Typescript</h1>
        <Row>
          <Col md={8}>
            <SyntaxHighlighter language='json' style={docco}>
              {data}
            </SyntaxHighlighter>
          </Col>
          <Col md={4}>
            <Tabs
              activeKey={option}
              onSelect={(selected) => setOption(selected)}
            >
              <Tab eventKey={USER} title='User'>
                <Container className='pt-4'>
                  <FormControl onChange={handleUser} placeholder='User ID' />
                </Container>
              </Tab>
              <Tab eventKey={POST} title='Post'>
                <Container className='pt-4'>
                  <FormControl onChange={handleUser} placeholder='Post ID' />
                </Container>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

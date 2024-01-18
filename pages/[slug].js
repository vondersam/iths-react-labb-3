import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import { marked } from 'marked';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavItem from './components/navItem';

export default function Post({ htmlString, data, slugs }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Container>
        <Row className="m-3">
          <Nav activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            {slugs.map((slug) => {
              return <NavItem key={slug} slug={slug} />;
            })}
          </Nav>
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </Row>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { slug } }) {
  const files = fs.readdirSync('posts');
  const paths = files.map((filename) => filename.replace('.md', ''));

  const markdownWithMeta = fs
    .readFileSync(path.join('posts', slug) + '.md')
    .toString();
  const parsedMarkedDown = matter(markdownWithMeta);
  const htmlString = marked(parsedMarkedDown.content);
  return {
    props: { htmlString, data: parsedMarkedDown.data, slugs: paths }
  };
}

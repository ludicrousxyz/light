import React from 'react';
import join from 'url-join';
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown';

import CodeBlock from '../components/CodeBlock';
import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';

export default class Posts extends React.Component {
  static async getInitialProps({ query, req, res }) {
    let { title } = query;
    if (!title) {
      if (req) {
        res.writeHead(302, { Location: '/guides/getting-started' });
        return res.end();
      }

      return Router.push('/guides/getting-started');
    }

    const fetchPost = await fetch(join(process.env.BASE_URL, `guides/${title}.md`));
    const post = await fetchPost.text();
    const split = post.split('---');
    split.shift();
    const metadata = split.shift().trim();
    const content = split.join('---').trim();

    const response = {};
    response.content = content;

    metadata.split('\n').forEach((line) => {
      const [attr, val] = line.split(':');
      response[attr.trim()] = val.trim();
    });

    const fetchSidebar = await fetch(join(process.env.BASE_URL, `guides/guides.json`));
    const menu = await fetchSidebar.json();

    return {
      query,
      menu,
      path: title,
      ...response,
    };
  }

  render() {
    const { title, subtitle, content, menu, path } = this.props;
    return (
      <div>
        <Hero
          title={title}
          subtitle={subtitle}
          typed={false}
        />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-one-quarter">
                <Sidebar menu={menu} active={path} prefix="/guides" label="Guides" />
              </div>
              <div className="column">
                <div className="content is-medium">
                  <Markdown
                    source={content}
                    linkTarget="_blank"
                    renderers={{
                      code: CodeBlock,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

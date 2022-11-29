import React from 'react';
import Aside from './Aside';
import { apis } from './configuration';

class Home extends React.Component {

  constructor() {
    super()

    const apiGroups = apis.map(api => {
      const title = <h2>{api.title}</h2>;
      const childApiItems = api.child.map(child => <li key={api.title + child.title}><h3><a href={"/docs/" + api.key + "/" + child.key}>{child.title}</a></h3>{" - " + child.description}</li>);
      return <div key={api.title} className="api-group">{title}<ul>{childApiItems}</ul></div>;
    });
    this.state = { apiGroups: apiGroups };
  }

  render() {
    return (
      <div className="app">
        <Aside
          collapsed={false}
          toggled={false}
        />
        <main>
          <div id="home">
            <header className="content-head">
              <h1>Welcome to the Core Entities docs!</h1>
            </header>
            <section className="content-body">
              <p>In this site you'll find everything you need to know about integrating with core entities.</p>

              {this.state.apiGroups}
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;

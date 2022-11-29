import React from 'react';
import { RedocStandalone } from 'redoc-asyncapi';

import Aside from './Aside';
import { redocOptions } from './redocOptions';
import { apis } from './configuration';
import { Redirect } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    const { product, api } = this.props.match.params;
    const items = apis.reduce((acc, current) => {
      const result = current.child.map(c => Object.assign(c, { apiKey: current.key }));
      acc = acc.concat(result);
      return acc;
    }, []);

    const item = items.find(i => i.apiKey === product && i.key === api);
    const url = item?.url;
    const spec = item?.spec;
    const itemFound = url !== undefined || spec !== undefined;
    return itemFound
      ? (
        <div className="app">
          <Aside
            collapsed={true}
            toggled={false}
          />
          <main>
            {<RedocStandalone
              specUrl={url}
              spec={spec}
              options={redocOptions}
            />
            }
          </main>
        </div >
      ) : <Redirect to='/' />;
  }
}

export default Layout;

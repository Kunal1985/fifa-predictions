import React from 'react';
import { Link, browserHistory } from 'react-router';
import { sideBarList, grapeVariety } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Tabs, Tab } from 'react-bootstrap';
import WineryUserSummary from './admin/WineryUserSummary';
import ExciseOfficerSummary from './admin/ExciseOfficerSummary';

class Admin extends Authentication {
  
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    this.setState({ key });
  }

  render() {
    return (
      <div className="container">
        <div className="admin-panel">
            <Tabs
            activeKey={this.state.key}
            onSelect={this.handleSelect}
            id="controlled-tab"
        >
            <Tab eventKey={1} title="Home">
            Tab 1 content
            </Tab>
            <Tab eventKey={2} title="Create Winery User">
                <WineryUserSummary history={browserHistory}/>
            </Tab>
            <Tab eventKey={4} title="Create Excise Officer">
                <ExciseOfficerSummary history={browserHistory}/>
            </Tab>
        </Tabs>
        </div>
      </div>
    );
  }
}

export default Admin;
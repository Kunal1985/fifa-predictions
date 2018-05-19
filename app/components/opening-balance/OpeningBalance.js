import React from 'react';
import {Link, browserHistory} from 'react-router';
import { sideBarList } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class OpeningBalance extends Authentication {
  constructor(props) {
    super(props);
    this.sideBarList = sideBarList;
    this.changeStep = this.changeStep.bind(this);
  }

  changeStep(e, item) {
    e.preventDefault();
    let currProps = this.props;
    browserHistory.push(item.url);
}

  render() {
    let subSectionList = this.sideBarList[1].subSectionList;
    return (
      <div className="container">
        <div className="sub-sections-nav">
            {subSectionList.map((item, index) => (
                <div className="row">
                  <div className="col-lg-3 col-md-3"></div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="step-name-container" onClick={(e) => this.changeStep(e, item)}>
                      <a href="#" key={index}>
                        <div><span className="fa-stack">
                              <span className="fa fa-dot-circle-o fa-stack-2x"></span>
                          </span>
                        </div>
                        <div className="text-bold">{item.title2}</div>
                      </a>
                    </div>
                  </div>
                </div>
            ))}
        </div>
      </div>
    );
  }
}

export default OpeningBalance;
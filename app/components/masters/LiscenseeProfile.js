import React from 'react';
import { Link } from 'react-router';
import { sideBarList } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class LiscenseeProfile extends Authentication {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
              <div className="register-heading">Liscensee Profile</div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="present-stock-section">
                    <div className="each-tank">
                      <div><span className="text-bold">Tank Number</span></div>
                      <div><span className="text-bold">Variety</span></div>
                      <div><span className="text-bold">Last Updated Date</span></div>
                    </div>
                    <div className="each-tank">
                      <div><span className="text-bold">Tank Number</span></div>
                      <div><span className="text-bold">Variety</span></div>
                      <div><span className="text-bold">Last Updated Date</span></div>
                    </div>
                    <div className="each-tank">
                      <div><span className="text-bold">Tank Number</span></div>
                      <div><span className="text-bold">Variety</span></div>
                      <div><span className="text-bold">Last Updated Date</span></div>
                    </div>
                    <div className="each-tank">
                      <div><span className="text-bold">Tank Number</span></div>
                      <div><span className="text-bold">Variety</span></div>
                      <div><span className="text-bold">Last Updated Date</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
    }
}

export default LiscenseeProfile;
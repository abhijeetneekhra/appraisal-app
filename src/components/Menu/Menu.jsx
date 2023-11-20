/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icons1 } from "../../icons/Icons1";
import { Icons12 } from "../../icons/Icons12";
import { Icons2 } from "../../icons/Icons2";
import { Icons3 } from "../../icons/Icons3";
import { Icons4 } from "../../icons/Icons4";
import { Icons5 } from "../../icons/Icons5";
import { LightDarkControl } from "../LightDarkControl";
import { ListManu } from "../ListManu";
import "./style.css";

export const Menu = ({
  className,
  listManuIcons12Color,
  listManuIcon = <Icons1 className="icon-instance-node" />,
  override = <Icons2 className="icon-instance-node" />,
  listManuIcon1 = <Icons3 className="icon-instance-node" />,
  listManuIcon2 = <Icons4 className="icon-instance-node" />,
  listManuIcon3 = <Icons5 className="icon-instance-node" />,
}) => {
  return (
    <div className={`menu ${className}`}>
      <div className="overlap-group">
        <div className="top">
          <div className="list-item">
            <ListManu
              className="list-manu-instance"
              icon={<Icons12 className="icon-instance-node" color="#4F4F4F" />}
              icons12Color={listManuIcons12Color}
              label="Dashboard"
              state="default"
              textClassName="design-component-instance-node"
              viewport="desktop"
            />
            <ListManu
              className="list-manu-instance"
              icon={listManuIcon}
              label="Appraisal Section"
              state="default"
              textClassName="design-component-instance-node"
              viewport="desktop"
            />
            <ListManu
              className="list-manu-instance"
              icon={override}
              label="Notifications"
              state="default"
              textClassName="design-component-instance-node"
              viewport="desktop"
            />
            <ListManu
              className="list-manu-instance"
              icon={listManuIcon1}
              label="Analytics"
              state="default"
              textClassName="design-component-instance-node"
              viewport="desktop"
            />
            <ListManu
              className="list-manu-instance"
              icon={listManuIcon2}
              label="Help"
              state="default"
              textClassName="design-component-instance-node"
              viewport="desktop"
            />
          </div>
        </div>
        <img className="logo" alt="Logo" src="/img/logo-5-1.png" />
      </div>
      <div className="bottom">
        <ListManu
          className="list-manu-2"
          icon={listManuIcon3}
          label="Logout"
          state="default"
          textClassName="design-component-instance-node-2"
          viewport="desktop"
        />
        <LightDarkControl
          className="light-dark-control-instance"
          icons10Color="#4F4F4F"
          text="FAQ"
          textClassName="design-component-instance-node-2"
          visible={false}
        />
      </div>
    </div>
  );
};

Menu.propTypes = {
  listManuIcons12Color: PropTypes.string,
};

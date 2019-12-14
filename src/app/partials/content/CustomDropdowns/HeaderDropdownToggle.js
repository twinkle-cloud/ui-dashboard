/*
 * @Author: duchengdong
 * @Date: 2019-10-11 09:10:02
 * @LastEditors: duchengdong
 * @LastEditTime: 2019-11-28 15:38:41
 * @Description: 
 */
import React from "react";

// export default class HeaderDropdownToggle extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     e.preventDefault();
//     this.props.onClick(e);
//   }

//   render() {
//     return (
//         <div
//             className="kt-header__topbar-wrapper"
//             onClick={this.handleClick}
//           >
//             {this.props.children}
//           </div>
//     );
//   }
// }


const HeaderDropdownToggle = React.forwardRef(
  (props, ref) => (
    <div
      ref={ref}
      className="kt-header__topbar-wrapper"
      onClick={(e)=> {
        e.preventDefault();
        props.onClick(e);
      }}
    >
      {props.children}
    </div>
  )
);

export default HeaderDropdownToggle

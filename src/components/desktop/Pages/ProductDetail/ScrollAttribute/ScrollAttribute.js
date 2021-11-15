import React, { Component } from 'react'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink
const ScrollAttribute=()=>{
// class Navbar extends Component {

    // render() {
        return (
            <nav>
                <ScrollLink
                    to="example-destination"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='some-class'
                    activeClass='some-active-class'
                >
                    Link Text Goes Here
                </ScrollLink>
            </nav>
        )
    }

    export default ScrollAttribute;


// import React, { Component } from 'react'
// import scrollInitalState from "./scrollInitalState";
// import Scroller from "./Scroller";
//
//
// function round(val) {
//     return (Math.round(val * 100) / 100).toFixed(2);
// }
//
// const colors = [
//     {name: "Blue", color: "#215cf4" },
//     {name: "Cyan", color: "#0ccabf" },
//     {name: "Green", color: "#4ac36c" },
//     {name: "Yellow", color: "#e0be18" },
//     {name: "Red", color: "#e91e4f" },
//     {name: "Magenta", color: "#ca28e4" },
// ]
//
// export default class ScrollAttribute extends Component {
//     constructor() {
//         super()
//
//         this.state = {
//             scroll: scrollInitalState
//         }
//     }
//
//     render() {
//         const { scroll } = this.state
// console.log("scroll");
//         return (
//             <div className="wrapper">
//                 <nav>
//                     <a
//                         className={scroll.onStart ? 'active' : 'inactive'}
//                         onClick={() => this.scroll.scrollToPosition(scroll.start)}
//                         children="start"
//                     />
//                     {
//                         scroll.children.map((child, i) =>
//                             <a
//                                 key={i}
//                                 className={child.active ? 'active' : 'inactive'}
//                                 onClick={() => this.scroll.scrollToPosition(child.start)}
//                             >
//                                 {colors[i].name}
//                             </a>
//                         )
//                     }
//                     <a
//                         className={scroll.onEnd ? 'active' : 'inactive'}
//                         onClick={() => this.scroll.scrollToPosition(scroll.end)}
//                         children="end"
//                     />
//                 </nav>
//
//                 <Scroller
//                     scrollRef={ref => this.scroll = ref}
//                     autoScroll={true}
//                     autoFrame={true}
//                     onScrollChange={(scroll) => this.setState({ scroll })}
//                 >
//                     {
//                         colors.map(({ name, color }, index) =>
//                             <section key={index} name={name} style={{background: color}}>
//                                 <div className="flex center-center half-width">
//                                     <h1>{round(scroll.positionRatio)}</h1>
//                                 </div>
//
//                                 <div className="flex left-center half-width">
//                                     <ul>
//                                         <p>{'{'}</p>
//
//                                         {
//                                             Object.entries(scroll)
//                                                 .filter(([key, value]) => typeof value !== 'function')
//                                                 .filter(([key, value]) => typeof value !== 'object')
//                                                 .map(([key, value]) =>
//                                                     <li key={key}>
//                                                         <span>{key}: </span>
//                                                         <span className={value ? 'active' : 'inactive'}>{value.toString()}</span>
//                                                     </li>
//                                                 )
//                                         }
//
//                                         <li>...</li>
//                                         <p>{'}'}</p>
//                                     </ul>
//                                 </div>
//
//
//                             </section>
//                         )
//                     }
//                 </Scroller>
//             </div>
//         )
//     }
// }
// const container = React.createElement('div', {key:1, className: 'conatiner', id: 'container' }, [
//     React.createElement('section', {key:1, className: 'section_1', id: 'section_id1' }, [
//         React.createElement('p', { key:1,className: 'paragraph1', id: 'paragraph_id1' }, 'ITview Solution'),
//         React.createElement('img',{key:2, style:{width:200,backgroundColor:'teal'},className:'imagetag',id:'image_id1',src:'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'})
//     ]),
//     React.createElement('section',{key:2,className:'section_2',id:'section_id2'},[
//         React.createElement('form',{key:1},[
//             React.createElement('div',{key:2,className:'input-group'},[
//                 React.createElement('label', {key:1,htmlFor:'username'}, 'Username'),
//                 React.createElement('input',{key:2,id:'username',autoComplete:"user-name"}),
//                 React.createElement('label', {key:3,htmlFor:'passwrod'}, 'Password'),
//                 React.createElement('input',{key:4,id:'current-password',type:'password',autoComplete:"current-password"})
//             ])

//         ])   
//     ])
// ]
// )
// const container = (<div className="conatiner" id="container">
//     <section className="section_1" id="section_id1">
//         <p className="paragraph1" id="paragraph_id1">ITview Solution</p><img className="imagetag" id="image_id1"
//             src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
//             style={{width: 200, backgroundColor:'teal'}}/>
//     </section>
//     <section className="section_2" id="section_id2">
//         <form>
//             <div className="input-group"><label htmlFor="username">Username</label><input id="username"
//                 autocomplete="user-name"></input><label htmlFor="passwrod">Password</label>
//                 <input id="current-password"type="password" autocomplete="current-password"></input>

//                 </div>
//             </form>
//             </section>
//         </div>)

const container = /*#__PURE__*/React.createElement("div", {
  className: "conatiner",
  id: "container"
}, /*#__PURE__*/React.createElement("section", {
  className: "section_1",
  id: "section_id1"
}, /*#__PURE__*/React.createElement("p", {
  className: "paragraph1",
  id: "paragraph_id1"
}, "ITview Solution"), /*#__PURE__*/React.createElement("img", {
  className: "imagetag",
  id: "image_id1",
  src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  style: {
    width: 200,
    backgroundColor: 'teal'
  }
})), /*#__PURE__*/React.createElement("section", {
  className: "section_2",
  id: "section_id2"
}, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
  className: "input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username"
}, "Username"), /*#__PURE__*/React.createElement("input", {
  id: "username",
  autoComplete: "on"
}), /*#__PURE__*/React.createElement("label", {
  htmlFor: "passwrod"
}, "Password"), /*#__PURE__*/React.createElement("input", {
  id: "current-password",
  type: "password",
  autoComplete: "on"
})))));
// const nameInstitute='Itview'
// const container=<h2>Hello <b>{nameInstitute}</b> </h2>
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);
//# sourceMappingURL=script.js.map
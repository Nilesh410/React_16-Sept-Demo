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

// const h2 = {
//     $$typeof :Symbol.for('react.element'),
//     type: "h2",
//     key: null,
//     ref: null,
//     props: {
//         children: [
//             {
//                 $$typeof :Symbol.for('react.element'),
//                 type: "span",
//                 key: null,
//                 ref: null,
//                 props: {
//                     children: [
//                         {
//                             $$typeof :Symbol.for('react.element'),
//                             type: "button",
//                             key: null,
//                             ref: null,
//                             props: {
//                                 children: "Hello Button"
//                             },
//                             _owner: null,
//                             _store: { }
//                         }
//                     ]
//                 },
//                 _owner: null,
//                 _store: { }
//             },
//             {
//                 $$typeof :Symbol.for('react.element'),
//                 type: "i",
//                 key: null,
//                 ref: null,
//                 props: {
//                     children: "Itview Solution"
//                 },
//                 _owner: null,
//                 _store: { }
//             },
//             {
//                 $$typeof :Symbol.for('react.element'),
//                 type: "b",
//                 key: null,
//                 ref: null,
//                 props: {
//                     children: "Itview Solution"
//                 },
//                 _owner: null,
//                 _store: { }
//             }
//         ]
//     },
//     _owner: null,
//     _store: { }
// }
const nameInstitute='Itview'
const container=<h2>Hello <b>{nameInstitute}</b> </h2>
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)

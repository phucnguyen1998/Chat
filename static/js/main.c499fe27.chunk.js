(this.webpackJsonpchatbox=this.webpackJsonpchatbox||[]).push([[0],{24:function(e,t,a){},28:function(e,t,a){e.exports=a(49)},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(25),l=a.n(r),i=a(8),m=a(10),h=a(15),o=a.n(h);o.a.initializeApp({apiKey:"AIzaSyC-AfzxS4Gf5fPulSY-HbwhC4b5LlPIi6w",authDomain:"notereact-dfc04.firebaseapp.com",databaseURL:"https://notereact-dfc04.firebaseio.com",projectId:"notereact-dfc04",storageBucket:"notereact-dfc04.appspot.com",messagingSenderId:"790967777519",appId:"1:790967777519:web:08bd8a668c627d28f6031a",measurementId:"G-CFN9RT6H7F"});new o.a.auth.GoogleAuthProvider;const c=o.a.auth();var u=o.a;a(43),a(44);class p extends n.a.Component{constructor(e){super(e),this.state={chats:[]}}componentDidMount(){u.database().ref("general").on("value",e=>{const t=e.val();let a=[];for(let n in t)""!==t[n].message&&a.push({id:n,message:t[n].message,user:t[n].user,date:t[n].timestamp});const s=a.reverse();this.setState({chats:s})})}render(){return n.a.createElement("div",{className:"chatbox"},n.a.createElement("ul",{className:"chat-list"},this.state.chats.map(e=>{const t=new Date(e.date);return n.a.createElement("li",{key:e.id},n.a.createElement("em",null,t.getDate()+"/"+(t.getMonth()+1)),n.a.createElement("strong",null,e.user,":"),e.message)})))}}var d=p;class g extends n.a.Component{constructor(e){super(e),this.handleChange=e=>{this.setState({[e.target.name]:e.target.value})},this.handleSubmit=e=>{if(e.preventDefault(),""!==this.state.message){const e=u.database().ref("general"),t={message:this.state.message,user:this.props.user.displayName,timestamp:(new Date).getTime()};e.push(t),this.setState({message:""})}},this.state={message:""}}render(){return n.a.createElement("div",{className:"home--container"},n.a.createElement("h1",null,"H\xe3y nh\u1eafn g\xec \u0111\xf3!"),this.props.user&&n.a.createElement("div",{className:"allow-chat"},n.a.createElement("form",{className:"send-chat",onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",name:"message",id:"message",value:this.state.message,onChange:this.handleChange,placeholder:"Nh\u1eadp tin nh\u1eafn..."}),n.a.createElement("input",{className:"btn btn-primary",type:"reset",value:"G\u1eedi"})),n.a.createElement(d,null)),!this.props.user&&n.a.createElement("div",{className:"disallow-chat"},n.a.createElement("p",null,n.a.createElement(i.b,{to:"/login"},"\u0110\u0103ng nh\u1eadp")," ho\u1eb7c ",n.a.createElement(i.b,{to:"/register"},"\u0110\u0103ng k\xfd")," \u0110\u1ec3 b\u1eaft \u0111\u1ea7u chat!")))}}var E=g;a(24);class b extends n.a.Component{constructor(e){super(e),this.handleChange=e=>{this.setState({[e.target.name]:e.target.value})},this.handleSubmit=e=>{e.preventDefault();const t=this.state,a=t.email,s=t.password;u.auth().signInWithEmailAndPassword(a,s).then(e=>{this.props.history.push("/Chat")}).catch(e=>{this.setState({error:e})})},this.state={email:"",password:"",error:null},this.handleChange=this.handleChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}render(){const e=this.state,t=e.email,a=e.password,s=e.error;return n.a.createElement("div",{className:"auth--container"},n.a.createElement("h1",null,"Login"),n.a.createElement("p",{className:"intro-text"},"\u0110\u0103ng nh\u1eadp \u0111\u1ec3 truy c\u1eadp t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n"),s&&n.a.createElement("p",{className:"error-message"},s.message),n.a.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email",value:t,onChange:this.handleChange}),n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",name:"password",id:"password",placeholer:"password",value:a,onChange:this.handleChange}),n.a.createElement("button",{className:"general-submit"},"Log in"),n.a.createElement("p",null,"B\u1ea1n ch\u01b0a c\xf3 t\xe0i kho\u1ea3n ",n.a.createElement(i.b,{className:"login-btn",to:"/register"},"\u0110\u0103ng k\xfd"))))}}var v=b;class C extends n.a.Component{constructor(e){super(e),this.handleChange=e=>{this.setState({[e.target.name]:e.target.value})},this.handleSubmit=e=>{e.preventDefault();const t=this.state,a=t.email,s=t.username,n=t.password;u.auth().createUserWithEmailAndPassword(a,n).then(()=>{u.auth().currentUser.updateProfile({displayName:s}).then(()=>{this.props.history.push("/Chat")}).catch(e=>{this.setState({error:e})})}).catch(e=>{this.setState({error:e})})},this.state={username:"",email:"",password:"",error:null}}render(){const e=this.state,t=e.email,a=e.username,s=e.password,r=e.error;return n.a.createElement("div",{className:"auth--container"},n.a.createElement("h1",null,"Register your account"),r&&n.a.createElement("p",{className:"error-message"},r.message),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("label",{htmlFor:"username"},"Username"),n.a.createElement("input",{type:"text",name:"username",id:"username",value:a,onChange:this.handleChange}),n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"text",name:"email",id:"email",value:t,onChange:this.handleChange}),n.a.createElement("label",{htmlFor:"password"},"Nh\u1eadp m\u1eadt kh\u1ea9u"),n.a.createElement("input",{type:"password",name:"password",id:"password",value:s,onChange:this.handleChange}),n.a.createElement("button",{className:"general-submit",children:"Get Started"}),n.a.createElement("p",null,"B\u1ea1n \u0111\xe3 c\xf3 t\xe0i kho\u1ea3n? ",n.a.createElement(i.b,{className:"login-btn",to:"/login"},"\u0110\u0103ng nh\u1eadp"))))}}var w=C;class f extends n.a.Component{constructor(e){super(e),this.logOutUser=()=>{u.auth().signOut().then(window.location="/Chat")},this.state={user:null},this.logOutUser=this.logOutUser.bind(this)}componentDidMount(){c.onAuthStateChanged(e=>{e&&this.setState({user:e})})}render(){return n.a.createElement(i.a,null,n.a.createElement("div",{className:"app"},n.a.createElement("nav",{className:"main-nav"},!this.state.user&&n.a.createElement("div",null,n.a.createElement(i.b,{to:"/login"},"\u0110\u0103ng Nh\u1eadp"),n.a.createElement(i.b,{to:"/register"},"\u0110\u0103ng k\xfd")),this.state.user&&n.a.createElement("a",{href:"/Chat",onClick:this.logOutUser},"\u0110\u0103ng xu\u1ea5t")),n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/Chat",exact:!0,render:()=>n.a.createElement(E,{user:this.state.user})}),n.a.createElement(m.a,{path:"/login",exact:!0,component:v}),n.a.createElement(m.a,{path:"/register",exact:!0,component:w}))))}}var S=f;l.a.render(n.a.createElement(S,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c499fe27.chunk.js.map
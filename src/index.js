// var ele = <h1> This is JSX testing</h1>;

// var ele = (
//     <div>
//         <h2>This Is H2</h2>
//         <p>This is Paraghraph</p>
//     </div>
// );

// var title = 'react';
// var subtitle = "";
// var founded = "founded";
// var fun = () => {return "Hello React"}
// var ele = (
//     <div>
//         <h2>This Is H2 {title} Item</h2>
//         <p>This is Paraghraph {1 + 1}</p>
//         <span> {fun()} </span>
//         <p>THIS IS { subtitle ? '': "title" }</p>
//         <p>THIS IS { founded && "title" }</p>
//     </div>
// );


// var number = 0;

// var increse = () => {
//     number++;
//     render();
// };

// // var ele = (
// //     <div>
// //         The Number {number}
// //         <button onClick={increse}> Add One </button>
// //     </div>
// // );


// // ReactDOM.render(ele, document.getElementById("app"));

// function render() {
//     var ele = (
//         <div>
//             The Number {number}
//             <button onClick={increse}> Add One </button>
//         </div>
//     );
//     ReactDOM.render(ele, document.getElementById("app"));
// }

// render();



// ------------------------------------------------------------------------
// Lecture #68


// var myInputValue;
// var allItems = [];

// var handleInputChange = (e) => {
//     myInputValue = e.target.value;
// }

// var handleFormSubmit = (e) => {
//     e.preventDefault();
//     allItems.push(myInputValue);
//     e.target.elements[0].value = '';
//     render();
// }


// function render() {
//     let content = (
//     <div>
//         <form action="" onSubmit={handleFormSubmit}>
//             <input type="text" onChange={handleInputChange} />
//             <input type="submit" />
//         </form>

//         <ul>
//             {allItems.length ? allItems.map((item) => <li>{ item }</li> ) :'No Item'}
//         </ul>
//     </div>
// );

// ReactDOM.render(content, document.getElementById('app'))
// }

// render();


// let toggle = false;

// var toggletext = () => {
//     toggle = !toggle;
//     render();
// }

// function render() {
//     let content = (
//         <div>
//             <button onClick={toggletext}>Toggle</button>
//             { toggle ? <p>text</p> : "" }
//         </div>
// );
//     ReactDOM.render(content, document.getElementById('app'));
// }

// render();



// class Hello extends React.Component {
//     render() {
//         return <div>Hello Component..</div>
//     }    
// }

// class Welcome extends React.Component {
//     render() {
//         return <h2>Welcome</h2>
//     }
// }

// let content = (
//     <div className="">
//         <Hello />
//         <Welcome></Welcome>
//         <p>this is para</p>
//     </div>
// );

// ReactDOM.render(content, document.getElementById("app"));
// class Header extends React.Component {
//     render() {
//         return <header>
//             <div>
//                 Header Section {this.props.title}
//             </div>
//         </header>
//     }
// }


// class App extends React.Component {
//     render() {
//         return (
//             <div className="app">
//                 <Header title="react app component" />
//             </div>
//         );
//     }
// }



// ReactDOM.render(<App />, document.getElementById("app"));


class App extends React.Component {
    
    
    constructor() {

        super();

        this.state = {
            item : '',
            listItems : [],
        } 
        
        this.changeInputVal = (e) => {
            this.setState({
                item: e.target.value
            })
        }

        this.submitForm = (e) => {
            e.preventDefault();
            let listItems = [...this.state.listItems, this.state.item];
            this.setState({
                listItems : listItems,
                item: ''
            })
        }

        this.removeItem = (e) => {
            this.setState({
                listItems : this.state.listItems.filter((item, index) => index != e.target.id),
                item: ''
            })
        }
    }
    
    render() {
        return (
            <div id="app">
                <Header />
                <br />
                <ListItem list={this.state.listItems} removeItem={ this.removeItem }/>
                <br />
                <Form saveInput={this.changeInputVal} saveDate={this.submitForm} inputValue={ this.state.item }/>
            </div>
            
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <h4>
                    Welcome in ToDo App
                </h4>
            </header>
        );
    }
}


class Form extends React.Component {
    render() {
        return (
                <form onSubmit={ this.props.saveDate } >
                <input type="text" onChange={this.props.saveInput} value={ this.props.inputValue }/>
                    <span> </span>
                    <input type="submit" value="Add To List"/>
                </form>
        );
    }
}

class ListItem extends React.Component {
    render() {
        return (
            <p>
                { this.props.list.length == 0 && <div>There Is No Item</div>}
                <ol>
                    {
                        this.props.list.map((item, index) => <Item item={item} index={index} removeItem={ this.props.removeItem }/>)
                    }
                </ol>
            </p>
        );
    }
}

class Item extends React.Component {
    render() {
        return (
            <div> 
                <li>{this.props.item}</li> <button id={this.props.index} onClick={this.props.removeItem}>Delete</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
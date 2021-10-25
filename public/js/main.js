'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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


var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            item: '',
            listItems: []
        };

        _this.changeInputVal = function (e) {
            _this.setState({
                item: e.target.value
            });
        };

        _this.submitForm = function (e) {
            e.preventDefault();
            var listItems = [].concat(_toConsumableArray(_this.state.listItems), [_this.state.item]);
            _this.setState({
                listItems: listItems,
                item: ''
            });
        };

        _this.removeItem = function (e) {
            _this.setState({
                listItems: _this.state.listItems.filter(function (item, index) {
                    return index != e.target.id;
                }),
                item: ''
            });
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'app' },
                React.createElement(Header, null),
                React.createElement('br', null),
                React.createElement(ListItem, { list: this.state.listItems, removeItem: this.removeItem }),
                React.createElement('br', null),
                React.createElement(Form, { saveInput: this.changeInputVal, saveDate: this.submitForm, inputValue: this.state.item })
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'header',
                null,
                React.createElement(
                    'h4',
                    null,
                    'Welcome in ToDo App'
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Form = function (_React$Component3) {
    _inherits(Form, _React$Component3);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.props.saveDate },
                React.createElement('input', { type: 'text', onChange: this.props.saveInput, value: this.props.inputValue }),
                React.createElement(
                    'span',
                    null,
                    ' '
                ),
                React.createElement('input', { type: 'submit', value: 'Add To List' })
            );
        }
    }]);

    return Form;
}(React.Component);

var ListItem = function (_React$Component4) {
    _inherits(ListItem, _React$Component4);

    function ListItem() {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
    }

    _createClass(ListItem, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'p',
                null,
                this.props.list.length == 0 && React.createElement(
                    'div',
                    null,
                    'There Is No Item'
                ),
                React.createElement(
                    'ol',
                    null,
                    this.props.list.map(function (item, index) {
                        return React.createElement(Item, { item: item, index: index, removeItem: _this5.props.removeItem });
                    })
                )
            );
        }
    }]);

    return ListItem;
}(React.Component);

var Item = function (_React$Component5) {
    _inherits(Item, _React$Component5);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'li',
                    null,
                    this.props.item
                ),
                ' ',
                React.createElement(
                    'button',
                    { id: this.props.index, onClick: this.props.removeItem },
                    'Delete'
                )
            );
        }
    }]);

    return Item;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));

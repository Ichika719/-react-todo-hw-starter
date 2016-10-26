'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React;
var Component = _React.Component;

var TodoApp = function (_Component) {
  _inherits(TodoApp, _Component);

  function TodoApp() {
    _classCallCheck(this, TodoApp);

    var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this));

    _this.state = {
      todos: [{
        todoTitle: 'pusheen1',
        completed: true
      }, {
        todoTitle: 'pusheen2',
        completed: false
      }, {
        todoTitle: 'pusheen3',
        completed: true
      }],
      text: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    return _this;
  }

  _createClass(TodoApp, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        text: event.target.value
      });
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      console.log(this.state);
      if (event.key === 'Enter') {
        this.setState({
          text: '',
          todos: [].concat(_toConsumableArray(this.state.todos), [{
            todoTitle: this.state.text,
            completed: false
          }])
        });
      }
    }
  }, {
    key: 'handleCheck',
    value: function handleCheck(index) {
      var _this2 = this;

      return function () {
        var newTodos = [].concat(_toConsumableArray(_this2.state.todos));
        newTodos[index].completed = !newTodos[index].completed;
        _this2.setState({
          todos: newTodos
        });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var todoLeft = 0;
      for (var i = 0; i < this.state.todos.length; ++i) {
        if (!this.state.todos[i].completed) {
          todoLeft++;
        }
      }

      return React.createElement(
        'section',
        { className: 'todoapp' },
        React.createElement(
          'header',
          { className: 'header' },
          React.createElement(
            'h1',
            null,
            'todos'
          ),
          React.createElement('input', { className: 'new-todo',
            placeholder: 'What needs to be done?',
            autoFocus: true,
            onChange: this.handleChange,
            onKeyPress: this.handleKeyPress,
            value: this.state.text })
        ),
        React.createElement(
          'section',
          { className: 'main' },
          React.createElement('input', { className: 'toggle-all', type: 'checkbox' }),
          React.createElement(
            'label',
            { htmlFor: 'toggle-all' },
            'Mark all as complete'
          ),
          React.createElement(
            'ul',
            { className: 'todo-list' },
            this.state.todos.map(function (todo, index) {
              return React.createElement(TodoItem, { todoTitle: todo.todoTitle,
                completed: todo.completed,
                onToggle: _this3.handleCheck(index) });
            })
          )
        ),
        React.createElement(CountDisplay, { count: todoLeft })
      );
    }
  }]);

  return TodoApp;
}(Component);

var TodoItem = function (_Component2) {
  _inherits(TodoItem, _Component2);

  function TodoItem() {
    _classCallCheck(this, TodoItem);

    return _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).apply(this, arguments));
  }

  _createClass(TodoItem, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        { className: this.props.completed ? 'completed' : '' },
        React.createElement(
          'div',
          { className: 'view' },
          React.createElement('input', { className: 'toggle', type: 'checkbox', checked: this.props.completed, onClick: this.props.onToggle }),
          React.createElement(
            'label',
            null,
            this.props.todoTitle
          ),
          React.createElement('button', { className: 'destroy' })
        )
      );
    }
  }]);

  return TodoItem;
}(Component);

var CountDisplay = function (_Component3) {
  _inherits(CountDisplay, _Component3);

  function CountDisplay() {
    _classCallCheck(this, CountDisplay);

    return _possibleConstructorReturn(this, (CountDisplay.__proto__ || Object.getPrototypeOf(CountDisplay)).apply(this, arguments));
  }

  _createClass(CountDisplay, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'footer',
        { className: 'footer' },
        React.createElement(
          'span',
          { className: 'todo-count' },
          this.props.count,
          ' todos left.'
        ),
        React.createElement(
          'button',
          { className: 'clear-completed' },
          'Clear completed'
        )
      );
    }
  }]);

  return CountDisplay;
}(Component);

// ReactDOM.render(
//   <TodoApp />,
//   document.getElementById('root')
// );


var Hello = function (_React$Component) {
  _inherits(Hello, _React$Component);

  function Hello(props) {
    _classCallCheck(this, Hello);

    var _this6 = _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this, props));

    _this6.state = {
      count: 0,
      text: 'hi jizzer~'
    };
    return _this6;
  }

  _createClass(Hello, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        text: event.target.value
      });
    }
  }, {
    key: 'tick',
    value: function tick() {
      // this.setState({
      //   count: this.state.count + 2
      // });
      this.setState({
        count: this.state.text
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          'Hello ' + this.state.count
        ),
        React.createElement('input', { type: 'text', value: this.state.text, onChange: this.handleChange.bind(this) }),
        React.createElement(
          'button',
          { onClick: this.tick.bind(this) },
          'click'
        )
      );
    }
  }]);

  return Hello;
}(React.Component);

Hello.defaultProps = {
  text: 'World'
};

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('root'));

// ReactDOM.render(A, B);
// => render react component A on html element B.

// <Hello />

// TodoApp - 掌管所有 state
// TodoItem - 每一個 todo 的 component
// CountDisplay - 顯示剩餘未完成的 todo

// Requirement

// 至少必須有這三個 component:

// TodoApp - 掌管所有 state
// TodoItem - 每一個 todo 的 component
// CountDisplay - 顯示剩餘未完成的 todo
// Hint

// 用 component 的角度思考
// 先建出一個足夠顯示上述 UI 的資料當做 TodoApp initial state
// 只有 TodoApp 是 stateful component (有 state) 的版本，其他 componet 都接收它傳下去的 props
// 參考步驟

// initialize project
// Step 1: break the UI into a component hierarchy
// Step 2: Build a static version in React
// Step 3 & 4: Identify state
// Step 5: Add inverse data flow
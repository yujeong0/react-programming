// function LikeButton() {
//     const [liked, setLiked] = React.useState(false);
//     const text = liked ? '좋아요 취소' : '좋아요';
//     return React.createElement(
//         'button',
//         { onClick: () => setLiked(!liked)},
//         text,
//     );
// }
// // 보통은 돔 요소 하나에 렌더링을 하므로 이 방법은 이렇게 할 수도 있다 정도로만!
// const domContainer1 = document.getElementById('root1');
// ReactDOM.render(React.createElement(LikeButton), domContainer1);
// const domContainer2 = document.getElementById('root2');
// ReactDOM.render(React.createElement(LikeButton), domContainer2);
// const domContainer3 = document.getElementById('root3');
// ReactDOM.render(React.createElement(LikeButton), domContainer3);
//위의 주석과 같다!
function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text); // return React.createElement(
  //     'button',
  //     { onClick: () => setLiked(!liked)},
  //     text,
  // );
}

function Container() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8: "), /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 10,
      color: 'red'
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "\uAC10\uC18C"))); // return React.createElement(
  //     'div',
  //     null,
  //     React.createElement(LikeButton),
  //     React.createElement(
  //         'div',
  //         { style: { marginTop: 20 } },
  //         React.createElement('span', null, '현재 카운트 : '),
  //         React.createElement('span', { style: { marginRight: 10 } }, count),
  //         React.createElement(
  //             'button',
  //             { onClick: () => setCount(count + 1) },
  //             '증가',
  //         ),
  //         React.createElement(
  //             'button',
  //             { onClick: () => setCount(count - 1) },
  //             '감소',
  //         ),
  //     ),
  // )
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer);
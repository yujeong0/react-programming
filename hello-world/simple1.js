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
    return React.createElement(
        'button',
        { onClick: () => setLiked(!liked)},
        text,
    );
}

const domContainer1 = document.getElementById('root1');
ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(LikeButton),
        React.createElement(LikeButton),
        React.createElement(LikeButton),
    ), 
    domContainer1
);
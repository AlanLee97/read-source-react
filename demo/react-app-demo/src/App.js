import { useState } from 'react';
import './App.css';

function shuffleArray(array) {
  // 创建一个数组的副本，避免修改原数组
  let arr = array.slice();

  for (let i = arr.length - 1; i > 0; i--) {
      // 随机选择一个小于当前索引的位置
      const j = Math.floor(Math.random() * (i + 1));
      // 交换当前元素与随机位置的元素
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function App() {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([1,2,3])
  const randomSortList = () => {
    let newList = JSON.parse(JSON.stringify(list))
    newList = shuffleArray(newList)
    setList(newList)
  }
  const onClickBtn = () => {
    setCount((oldCount) => {
      const newCount = oldCount+1
      if (newCount % 2 === 0) {
        randomSortList()
      }
      return newCount
    })
  }
  const toTop = (i) => {
    if(i === 0) return
    const _list = JSON.parse(JSON.stringify(list))
    const item = _list[i]
    _list.splice(i, 1)
    _list.unshift(item)
    setList(_list)
  }
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={onClickBtn}>+1</button>
      <ul>
        {list.map((item, i) => <li key={item} onClick={() => toTop(i)}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;

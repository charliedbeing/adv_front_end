import logo from './logo.svg';
import './App.css';
import SqureItem from './SqureItem'
import { React, useState, useEffect, Children } from 'react'


function App(props) {

  const [a1, seta1] = useState({p:[0,0],s:''})
  const [a2, seta2] = useState({p:[0,1],s:''})
  const [a3, seta3] = useState({p:[0,2],s:''})
  const [b1, setb1] = useState({p:[1,0],s:''})
  const [b2, setb2] = useState({p:[1,1],s:''})
  const [b3, setb3] = useState({p:[1,2],s:''})
  const [c1, setc1] = useState({p:[2,0],s:''})
  const [c2, setc2] = useState({p:[2,1],s:''})
  const [c3, setc3] = useState({p:[2,2],s:''})


  const [currentOrder, setcurrentOrder] = useState(-1)
  const [active, setactive] = useState(false)
  const [container, setcontainer] = useState([])
  const [win, setwin] = useState(null)
  const [timeTravle, settimeTravle] = useState({})

  const [test, settest] = useState([])



  useEffect(() => {
    if(container.length>0){
      timeTravle[`step: ${container.length}`] = [...container]
      settimeTravle(timeTravle)
    }
    if (container.length >= 3) {
      check()
    }


  }, [container])


  const find_item = function (x, y) {
    let r = container.find(item => item.x === x && item.y === y)
    if (r) {
      return r
    } else {
      return null
    }
  }

  const checkWin = function () {
    let result = { isOver: false, who: '' }
    let checkCount = container.length

    let dialog = [[{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }], [{ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 }]]

    // row 3 
    if (checkCount >= 3) {

      for (let i = 0; i < 3; i++) {
        let temp = 0
        let count = 0

        for (let m = 0; m < 3; m++) {
          let curr_row = find_item(i, m)
          if (curr_row) {
            count += 1
            temp += curr_row.value
          }
        }

        if (count === 3 && (temp === 0 || temp === 3)) {
          result.isOver = true
          if (temp === 0) {
            result.who = 'O'
          }
          if (temp === 3) {
            result.who = 'X'
          }
          break;
        }
      }

      // col 3
      for (let i = 0; i < 3; i++) {
        let temp = 0
        let count = 0

        for (let m = 0; m < 3; m++) {
          let curr_row = find_item(m, i)
          if (curr_row) {
            count += 1
            temp += curr_row.value
          }
        }

        if (count === 3 && (temp === 0 || temp === 3)) {
          result.isOver = true
          if (temp === 0) {
            result.who = 'O'
          }
          if (temp === 3) {
            result.who = 'X'
          }
          break;
        }
      }

      // two dialog 
      for (let i = 0; i < dialog.length; i++) {
        let t1 = dialog[i]
        let count = 0
        let temp = 0

        for (let j = 0; j < 3; j++) {
          let obj = t1[j]
          let curr = find_item(obj.x, obj.y)
          if (curr) {
            count += 1
            temp += curr.value
          }
        }

        if (count === 3 && (temp === 0 || temp === 3)) {
          result.isOver = true
          if (temp === 0) {
            result.who = 'O'
          }
          if (temp === 1) {
            result.who = 'X'
          }
          break;
        }

      }

    }
    return result

  }

  const check = function () {

    const is_win = checkWin()

    if (is_win.isOver) {
      setwin(is_win)
    }
  }

  const click = function (step,fn) {

    const temp =[...test]
    temp.push(fn)

    settest(temp)

    console.log(typeof fn);

    if (currentOrder === 0) {

      setcurrentOrder(1)
    } else {
      setcurrentOrder(0)
    }

    const exist = container.find(item => item.x === step.x && item.y === step.y)

    if (!exist) {
      const current = [...container, step]

      setcontainer(current)
    }
  };

  const reRender= function(){
      // const temp ={...a1,s:'c'}
      // console.log(temp)
      // seta1(temp)
     //  settest(test +1)
      test.forEach(f=>f())
  }


  return (
    <div className="App">
      <h1>This is a Tic Tac Toe Game </h1>
      {win ? <h2> {win.who} Win</h2> : <h2>Playing... </h2>}
      <button
        onClick={() => {
          setactive(true)
          setcontainer([])
          setcurrentOrder(0)
        }}
      >Begin to Play</button>

      <button
        onClick={() => {
          // console.log(container)
          console.log(timeTravle)
          reRender()
        }}
      >End</button>

      <div style={{ marginLeft: '300px', marginTop: '50px' }}>
        <table>
          <tr>
            <td>
              <table>
                <tr>
                  <td> <SqureItem
                    x={a1.p[0]}
                    y={a1.p[1]}
                    f={a1.s}
                    t={test}
                    type={currentOrder}
                    isactive={active}
                    clickFn={click}

                  /></td>
                  <td> <SqureItem
                     x={a2.p[0]}
                     y={a2.p[1]}
                    isactive={active}
                    type={currentOrder}
                    clickFn={click}
                  /></td>
                  <td> <SqureItem
                     x={a3.p[0]}
                     y={a3.p[1]}
                    isactive={active}
                    type={currentOrder}
                    clickFn={click}
                  /></td>
                </tr>
                <tr>
                  <td> <SqureItem
                  x={b1.p[0]}
                  y={b1.p[1]}
                    isactive={active}
                    type={currentOrder}
                    clickFn={click}
                  /></td>
                  <td> <SqureItem
                    x={b2.p[0]}
                    y={b2.p[1]}
                    isactive={active}
                    type={currentOrder}
                    clickFn={click}
                  /></td>
                  <td> <SqureItem
                    x={b3.p[0]}
                    y={b3.p[1]}
                    isactive={active}
                    type={currentOrder}
                    clickFn={click}
                  /></td>
                </tr>
                <tr>
                  <td> <SqureItem
                    x={c1.p[0]}
                    y={c1.p[1]}
                    isactive={active}
                    type={currentOrder}
                    clickFn={click}
                  /></td>
                  <td> <SqureItem
                    x={c2.p[0]}
                    y={c2.p[1]}
                    isactive={active}
                    type={currentOrder}
                    clickFn={click}
                  /></td>
                  <td> <SqureItem
                     x={c3.p[0]}
                     y={c3.p[1]}
                    isactive={active}
                    type={currentOrder}
                    clickFn={click}
                  /></td>
                </tr>
              </table>
            </td>
            <td>  
              <div>
                  {container && container.map(item => <p>{`${item.x} ${item.y} `}</p> ) }
              </div>
            </td>
          </tr>
        </table>

      </div>


    </div>
  );
}

export default App;

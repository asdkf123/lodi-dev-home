'use client';
import {useState} from "react";

export default function List() {
  let product = ['토마토','파스타','코코넛']
  let [count, countChange] = useState([0,0,0])
  return (
    <div>
      <h4>상품목록</h4>
      {
        product.map((a,i) => {
          return (
            <div key={i}>
              <img src={`/images/food${i}.png`}></img>
              <h4>{a} $40</h4>
              <button onClick={() => {
                let _count = [...count]
                _count[i] = _count[i] + 1
                countChange(
                  _count,
                  console.log(`count:${count}`)
                )
              }}>+
              </button>
              <span> {count} </span>
              <button onClick={() => {
                countChange(
                  console.log(`count:${count}`)
                )
              }}>+
              </button>
            </div>
          )
        })
      }
    </div>
  );
}
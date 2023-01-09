
import './App.css';
import * as React from 'react';


class Pos {
  constructor(public n: number, public m: number) {}
}

class Knight {
  static moves = [
    new Pos(2, 1),
    new Pos(2, -1),
    new Pos(-2, 1),
    new Pos(-2, -1),
    new Pos(1, 2),
    new Pos(1, -2),
    new Pos(-1, 2),
    new Pos(-1, -2)
  ];

  constructor(public position: Pos) {}

  getMoves(): Pos[] {
    const moves: Pos[] = [];
    for (const move of Knight.moves) {
      const n = this.position.n + move.n;
      const m= this.position.m + move.m;
      if (n >= 0 && n < 8 && m>= 0 && m < 8) {
        moves.push(new Pos(n, m));
      }
    }
    return moves;
  }
}

const App: React.FunctionComponent = () => {
  const [state, setState] = React.useState<{ n: number; m: number; moves: Pos[] }>({
    n: 0,
  m: 0,
    moves: []
  });

  const handleXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, n: Number(event.target.value) });
  };

  const handleYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, m: Number(event.target.value) });
  };

  const handleFindClick = () => {
    const knight = new Knight(new Pos(state.n, state.m));
    setState({ ...state, moves: knight.getMoves() });
  };

  return (
    
    <div className="app">
      <h1>Position of a Knights</h1>
      <div className="form-control">
      
        <label htmlFor="n-input">N-Position:</label>
        <input
          id="m-input"
          type="number"
          value={state.n}
          onChange={handleXChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="m-input">M-Position:</label>
        <input
          id="m-input"
          type="number"
          value={state.m}
          onChange={handleYChange}
        />

      </div>
      <span className='inline-position'>  
      <button onClick={handleFindClick}>Find</button>
      <div>
        <h3>positions:</h3>
        <ul className="move-list">
          {state.moves.map((move) => (
            <li key={`${move.n},${move.m}`}
            >({move.n}, {move.m})</li>
          ))}
        </ul>
      </div>
      
      </span>
      
      

    </div>
  );
};


export default App;

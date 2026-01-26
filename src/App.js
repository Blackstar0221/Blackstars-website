function App() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1
        style={{
          fontFamily: '"Comic Sans MS", fantasy',
          color: '#4b9be1'
        }}
      >
        {"마주니의 웹사이트"}
      </h1>

      <h2
        style={{
          fontFamily: 'Arial, Helvetica, cursive',
          color: 'rgb(243, 103, 123)',
          marginBottom: '10rem'
        }}
      >
        click the buttons below
      </h2>

      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'blue',
          color: 'white'
        }}
        onClick={() => alert('안녕')}
      >
        Welcome
      </button>

      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'orange',
          color: 'white',
          marginTop: '2rem'
        }}
        onClick={() => {
          const name = prompt('이름이 뭐야?');
          if (name) {
            alert('만나서 반가워, 외소행성 B7-3A에서 온 ' + name + ' 외계인 이름이 참 외계인 답구나! (칭찬이야~~)');
          } else {
            alert('만나서 반가워, 이름없는 외계인');
          }
        }}
      >
        {"What's your name?"}
      </button>
    </div>
  );
}

export default App;

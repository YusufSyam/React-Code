// Tambahkan h1 ke root pakai react
let element= (
    <div className='header'>
        <h1>Hello</h1>
        <p>Ini paragraf</p>
    </div>
)

console.log(element)

ReactDOM.render(element, document.querySelector('#root'))
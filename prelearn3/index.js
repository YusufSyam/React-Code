// Tambahkan h1 ke root pakai native javascript

let title= document.createElement('h1')
title.textContent= 'Pake javascript'
title.className= 'header'

let root= document.querySelector('#root')
root.appendChild(title)

// Tambahkan h1 ke root pakai react
ReactDOM.render(<h1 className='header'>Pake react</h1>, document.querySelector('#root'))
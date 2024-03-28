
function App() {
  return <div
    className={[
      'min-h-screen',
      'grid',
      'grid-cols-6',
      'auto-rows-[minmax(7rem,auto)]',
      'gap-3',
      'p-20',
    ].join(' ')}
  >
    {Array.from({ length: 4 }, (_, index) => {
      return String
        .fromCharCode('A'.charCodeAt(0) + (index % 26))
        .toLowerCase()
    }).map(character => {
      return <div
        key={character}
        className={[
          'row-span-2',
          character === 'c'
            ? 'col-span-3'
            : 'col-span-1',
          'border',
          'border-black',
          'p-3',
          'rounded-3xl',
          'break-words',
        ].join(' ')}
      >
        <span>{character}</span>
        {character === 'c' && <p>{'lessgoo'.repeat(50)}</p>}
      </div>
    })}
    {Array.from({ length: 4 }, (_, index) => {
      return String
        .fromCharCode('F'.charCodeAt(0) + (index % 26))
        .toLowerCase()
    }).map(character => {
      return <div
        key={character}
        className={[
          'row-span-2',
          character === 'h' || character === 'i'
            ? 'col-span-2'
            : 'col-span-1',
          'border',
          'border-black',
          'p-3',
          'rounded-3xl',
        ].join(' ')}
      >
        <span>{character}</span>
      </div>
    })}
    {Array.from({ length: 4 }, (_, index) => {
      return String
        .fromCharCode('J'.charCodeAt(0) + (index % 26))
        .toLowerCase()
    }).map(character => {
      return <div
        key={character}
        className={[
          'row-span-2',
          character === 'k' || character === 'm'
            ? 'col-span-2'
            : 'col-span-1',
          'border',
          'border-black',
          'p-3',
          'rounded-3xl',
        ].join(' ')}
      >
        <span>{character}</span>
      </div>
    })}
  </div>
}

export default App

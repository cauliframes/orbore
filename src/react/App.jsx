import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      className={[
        'min-h-screen',
        'bg-[#DDDDDD]',
        'flex',
        // 'flex-col',
        'justify-center',
        'items-center',
        'gap-5'
      ].join(' ')}
    >
      {Array(5).fill('').map(() => <span
        className={[
          'bg-black',
          'text-5xl',
          'text-[#DDDDDD]',
          'font-[strasua]',
          'font-semibold',
          'flex',
          'flex-col',
          'px-11',
          'py-9',
          'rounded-bl-[2rem]',
          'relative',
          'justify-center',
          'items-center',
        ].join(' ')}
      >
        <span
          className={[
            'bg-[#DDDDDD]',
            'h-10',
            'aspect-square',
            'rounded-[50%]',
            'absolute',
            '-top-5',
            'left-3',
            'z-10',
          ].join(' ')}
        />
        <span
          className={[
            'bg-[#DDDDDD]',
            'h-10',
            'aspect-square',
            'rounded-[50%]',
            'absolute',
            '-bottom-5',
            'right-3',
            'z-10',
          ].join(' ')}
        />
        <span>rumah</span>
        <span>makan</span>
        <span>borero</span>
      </span>)}
    </div>
  )
}

export default App

import  { MouseEvent } from 'react'

const EventHandling = () => {

    const handleMouseOver = (e:MouseEvent<HTMLDivElement>) => {
        console.log('entered into the div element' , e.currentTarget);
    }

    const handleBtnClick = (e:MouseEvent<HTMLButtonElement>) => {
        console.log('btn clicked', e.currentTarget);
    }

  return (
    <div onMouseOver={handleMouseOver}>
        <h1>Event handling Example</h1>
        <button onClick={handleBtnClick}>Click Me</button>
    </div>
  )
}

export default EventHandling
import type { NextPage } from 'next'
import { Button, IconSide } from '../components/Button'
import { ToggleButton } from '../components/ToggleButton'


const Home: NextPage = () => {
  const myButtonStuff = () => {

  }

  return (
    <>
      <Button buttonStyle="inverted" iconSide={IconSide.Left} label={''} handleClick={myButtonStuff} />
    </>
  )
}

export default Home

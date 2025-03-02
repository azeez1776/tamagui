import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'

import { useStyle } from '@tamagui/core'
import { Moon } from '@tamagui/lucide-icons'
import { useState } from 'react'
import {
  Button,
  H1,
  Square,
  TamaguiProvider,
  XStack,
  YStack,
  useMedia,
  useTheme,
} from 'tamagui'

import { CodeExamplesInput } from './CodeExamplesInput'
import config from './tamagui.config'

// import './wdyr'

// webpack fix..
if (typeof require !== 'undefined') {
  globalThis['React'] = require('react')
}

function TestUseMediaRenders() {
  const media = useMedia()

  console.warn('render')

  return <H1>{media.sm ? 'sm' : 'not sm'}</H1>
}

function TestUseTheme() {
  const u = useTheme()
  console.log(u.color)
  return null
}

export const Sandbox = () => {
  const [theme, setTheme] = useState('light')

  return (
    <TamaguiProvider config={config} defaultTheme={theme}>
      <link href="/fonts/inter.css" rel="stylesheet" />
      <button
        style={{
          position: 'absolute',
          bottom: 30,
          left: 20,
        }}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        🌗
      </button>

      <XStack />

      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `html, body { overflow: hidden; height: 100vh; width: 100vw; }`,
        }}
      />

      <TestUseStyle />

      <CodeExamplesInput />

      <YStack fullscreen ai="center" jc="center">
        <Square size={100} bc="red" />
        {/* <SelectDemo /> */}

        <Button unstyled tabIndex="-1">
          hello world 123
        </Button>
        <Button tabIndex="-1">hello world 123</Button>

        {/* <SliderDemo /> */}
        {/* <Square tabIndex="0" size={100} bc="$blue10" /> */}
        {/* <Button size="$8"></Button> */}
        {/* <TestUseMediaRenders /> */}
        {/* <SliderDemo /> */}
      </YStack>

      {/*  */}
    </TamaguiProvider>
  )
}

function TestUseStyle() {
  console.log('wtf', Square.staticConfig.validStyles)
  const style = useStyle(Square, {
    backgroundColor: 'red',
  })

  console.log('style', style, Square.staticConfig.validStyles)

  return null
}

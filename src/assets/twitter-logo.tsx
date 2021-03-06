import React from 'react'
import { View, ViewProps } from 'react-native'
import Svg, { Path } from 'react-native-svg'

function TwitterLogo(props: ViewProps) {
  return (
    <View {...props}>
      <Svg width={20} height={16} viewBox="0 0 20 16">
        <Path
          d="M6.355 15.937c7.544 0 11.672-6.133 11.672-11.443 0-.172 0-.345-.008-.518a8.268 8.268 0 002.048-2.086 8.444 8.444 0 01-2.36.635A4.062 4.062 0 0019.515.298a8.26 8.26 0 01-2.608.973A4.133 4.133 0 0013.915 0c-2.263 0-4.103 1.804-4.103 4.024 0 .313.04.62.104.917A11.728 11.728 0 011.459.737a3.962 3.962 0 00-.552 2.024c0 1.396.728 2.627 1.824 3.349a4.213 4.213 0 01-1.856-.502v.055c0 1.945 1.416 3.576 3.288 3.945a4.075 4.075 0 01-1.08.141c-.264 0-.52-.024-.768-.07.52 1.6 2.04 2.76 3.832 2.792a8.333 8.333 0 01-5.096 1.725 8.05 8.05 0 01-.976-.055 11.84 11.84 0 006.28 1.796"
          fill="#fff"
        />
      </Svg>
    </View>
  )
}

export default TwitterLogo

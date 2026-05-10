import { Composition } from 'remotion'
import { GridLoop } from './compositions/GridLoop'

export const RemotionRoot: React.FC = () => (
  <Composition id="GridLoop" component={GridLoop} durationInFrames={180} fps={30} width={1920} height={1080} />
)

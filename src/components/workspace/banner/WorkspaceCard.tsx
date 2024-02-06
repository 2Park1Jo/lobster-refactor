import React from 'react'
import clsx from 'clsx'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import TextInfoContent from '@mui-treasury/components/content/textInfo'
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01'
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy'
import { RANDOM_IMAGE_URL } from '../../../constants/workspace'
import { PlusIcon, SendIcon } from '@channel.io/bezier-icons'
import { Button, ButtonColorVariant, ButtonStyleVariant } from '@channel.io/bezier-react'
import { useNavigate } from 'react-router-dom'
import { WORKSPACE_ADD_CARD_KEY } from '../../../constants/workspace'

interface WorkspaceCardProps {
  id: string
  image?: string
  overline?: string
  heading: string
  body?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 304,
    width: 304,
    borderRadius: 30,
  },
  content: {
    padding: 24,
  },
  enter_button: {
    width: '100%',
    marginTop: 24,
  },
  media: {
    paddingTop: '56.25%', // 16:9,
  },
}))

const WorkspaceCard: React.FC<WorkspaceCardProps> = (props) => {
  const styles = useStyles()
  const textCardContentStyles = useN01TextInfoContentStyles()
  const shadowStyles = useBouncyShadowStyles()
  const navigate = useNavigate()

  const onClickCard = () => {
    navigate('/workspace')
  }

  return (
    <Card className={clsx(styles.root, shadowStyles.root)}>
      <CardMedia className={styles.media} image={props.image ? props.image : RANDOM_IMAGE_URL} />
      <CardContent className={styles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={props.id === WORKSPACE_ADD_CARD_KEY ? '' : '마감일 : ' + props.overline}
          heading={props.heading}
          body={props.body}
        />
        <Button
          className={styles.enter_button}
          text={props.id === WORKSPACE_ADD_CARD_KEY ? '추가하기' : '입장하기'}
          rightContent={props.id === WORKSPACE_ADD_CARD_KEY ? PlusIcon : SendIcon}
          styleVariant={ButtonStyleVariant.Primary}
          colorVariant={ButtonColorVariant.Red}
          onClick={props.id === WORKSPACE_ADD_CARD_KEY ? () => {} : onClickCard}
        />
      </CardContent>
    </Card>
  )
}

export default WorkspaceCard

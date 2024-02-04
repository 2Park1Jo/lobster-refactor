import React, { useState } from 'react'
import { SectionLabel, ButtonSize, ButtonStyleVariant } from '@channel.io/bezier-react'
import { PersonFilledIcon, ChevronDownIcon, ChevronRightIcon } from '@channel.io/bezier-icons'
import TooltipButton from '../common/TooltipButton'
import UserCard from '../user/UserCard'
import {
  DEFAULT_USER,
  OFFLINE_USER,
  OFFLINE_USER2,
  OFFLINE_USER3,
  OnlineCrescent_USER,
  OfflineCrescent_USER,
} from '../../constants/user'

const ParticipantsCard: React.FC = () => {
  const [isGroupSectionOpen, setIsGroupSectionOpen] = useState<boolean>(true)

  return (
    <div
      style={{
        backgroundColor: 'rgb(49, 50, 52)',
        width: '294px',
        borderRadius: '10px',
        marginTop: '6px',
        padding: '6px',
      }}
    >
      <SectionLabel
        wrapperInterpolation={{ width: '100%', borderRadius: '10px' }}
        leftContent={{ icon: PersonFilledIcon }}
        content={`참여자 • ${6}`}
        open={isGroupSectionOpen}
        rightContent={[
          <TooltipButton
            tooltipContent={isGroupSectionOpen ? '접기' : '펼치기'}
            buttonContent={isGroupSectionOpen ? ChevronDownIcon : ChevronRightIcon}
            buttonSize={ButtonSize.XS}
            buttonStyleVariant={ButtonStyleVariant.Tertiary}
            onClick={() => {
              setIsGroupSectionOpen(!isGroupSectionOpen)
            }}
          />,
        ]}
      >
        <UserCard user={DEFAULT_USER} />
        <UserCard user={OnlineCrescent_USER} />
        <UserCard user={OfflineCrescent_USER} />
        <UserCard user={OFFLINE_USER} />
        <UserCard user={OFFLINE_USER2} />
        <UserCard user={OFFLINE_USER3} />
      </SectionLabel>
    </div>
  )
}

export default ParticipantsCard

'use client'

import { useCallback, useState } from 'react'
import { PalaceGate } from '@/components/palace-gate'
import { Cover3D } from '@/components/cover-3d'

export function InvitationExperience({ children }: { children: React.ReactNode }) {
  const [gateOpen, setGateOpen] = useState(false)
  const handleEnter = useCallback(() => setGateOpen(true), [])

  return (
    <>
      {!gateOpen && <PalaceGate onEnter={handleEnter} />}
      <Cover3D />
      {children}
    </>
  )
}

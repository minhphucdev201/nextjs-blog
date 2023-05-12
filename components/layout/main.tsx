import { LayoutProps } from '@/models/index'
import Link from 'next/link'
import * as React from 'react'
import { Stack } from '@mui/material'
import { Header } from '../common'
import { Footer } from '../common'
import { Box, Container } from '@mui/system'
export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  )
}

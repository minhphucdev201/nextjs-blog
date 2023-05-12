import React from 'react'
import { Container, Stack, Link as MuiLink } from '@mui/material'
import { Box } from '@mui/system'
import { ROUTER_LIST } from './routes'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'
export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
  const router = useRouter()
  return (
    <Box display={{ xs: 'none', lg: 'block' }} mt={2}>
      <Container maxWidth="md">
        <Stack direction="row" justifyContent="flex-end">
          {ROUTER_LIST.map((route) => (
            <Link key={route.path} href={route.path} passHref legacyBehavior>
              <MuiLink
                className={clsx({ active: router.pathname === route.path })}
                variant="body1"
                sx={{
                  color: '#000000',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 'medium',
                }}
                mx={1}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

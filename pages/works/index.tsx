import { workApi } from '@/api-client'
import { MainLayout } from '@/components/layout'
import { WorkList } from '@/components/work'
import WorkFilters from '@/components/work/work-filters'
import { useWorkList } from '@/hooks/use-work-list'
import { ListParams, WorkFiltersPayload } from '@/models'
import {
  Box,
  Button,
  Container,
  LinearProgress,
  Pagination,
  Stack,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  const [filters, setFilters] = useState<Partial<ListParams>>({ _page: 1, _limit: 3 })
  const { data, isLoading } = useWorkList({ params: filters })

  const { _page, _limit, _totalRows } = data?.pagination || {}
  const totalPages = Boolean(_totalRows) ? Math.ceil(_totalRows / _limit) : 0

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    // setPage(value)
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: value,
    }))
  }
  function handleFiltersChange(newFilters: WorkFiltersPayload) {
    console.log('==>', newFilters)
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: 1,
      title_like: newFilters.search,
    }))
  }
  return (
    <Box>
      <Container>
        <Box mb={4} mt={8}>
          <Typography component="h1" variant="h3" fontWeight="bold">
            Works
          </Typography>
        </Box>
        <WorkFilters onSubmit={handleFiltersChange} />
        <WorkList workList={data?.data || []} loading={isLoading} />

        {totalPages > 0 && (
          <Stack alignItems="center" mt={3}>
            <Pagination count={totalPages} page={_page} onChange={handlePageChange} />
          </Stack>
        )}
      </Container>
    </Box>
  )
}
WorksPage.Layout = MainLayout
// call api
export async function getStaticProps() {
  console.log('get static props about')
  return {
    props: {}, // will be passed to the page component as props
  }
}

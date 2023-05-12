import * as React from 'react'
import { Box, Card, CardContent, Typography, Stack } from '@mui/material'
import { Post } from '@/models/post'
import Divider from '@mui/material/Divider'
import { format } from 'date-fns'
export interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  if (!post) return null
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }} my="3">
          {post.title}
        </Typography>
        <Stack direction="row" my={1.5}>
          <Typography variant="body1" sx={{ display: 'flex' }}>
            {format(Number(post.publishedDate), 'dd MMM yyyy')}
          </Typography>
          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
          <Typography variant="body1">{post.tagsList.join(', ')}</Typography>
        </Stack>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  )
}

import * as React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Post } from '@/models/post'
import Divider from '@mui/material/Divider'
export interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }} my="3">
          {post.title}
        </Typography>
        <Typography my={1.5} variant="body1">
          {post.publishedDate}
          <hr />
          <Divider orientation="vertical" />
          {post.tagsList.join(', ')}
        </Typography>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  )
}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Post as PostModel } from '@prisma/client'

import { PostService } from './post.service'

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) })
  }

  @Get('feed')
  async getPublishedPosts(): Promise<PostModel[]> {
    return this.postService.posts({
      where: { published: true }
    })
  }

  @Get('filtered-posts/:searchString')
  async getFilteredPosts(@Param('searchString') searchString: string): Promise<PostModel[]> {
    return this.postService.posts({
      where: {
        OR: [
          {
            title: { contains: searchString }
          },
          {
            content: { contains: searchString }
          }
        ]
      }
    })
  }

  @Post('create')
  async createDraft(@Body() postData: { title: string; content?: string; authorEmail: string }): Promise<PostModel> {
    const { title, content, authorEmail } = postData
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: { email: authorEmail }
      }
    })
  }

  @Put('publish/:id')
  async publishPost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.updatePost({
      where: { id: Number(id) },
      data: { published: true }
    })
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id: Number(id) })
  }
}

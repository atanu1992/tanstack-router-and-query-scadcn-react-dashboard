import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(outsideLogin)/posts')({
  component: PostComponent,
})

function PostComponent() {
  return (
    <div className='p-2'>
      <h3>Posts</h3>
    </div>
  )
}

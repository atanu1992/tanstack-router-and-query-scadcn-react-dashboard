import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/user')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_auth/user!'
}

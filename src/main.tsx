import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import Router from './router.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const enableMocking = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser.ts')

    return worker.start({
      onUnhandledRequest: (request: Request, print) => {
        if (!request.url.includes('/example/')) {
          return console.warn('예시 요청 url', request.url)
        }

        // 그 외의 처리되지 않은 요청에 대해서는 경고 출력
        print.warning()
      }
    })
  }
  return

}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(

    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </StrictMode>
  )
}) 

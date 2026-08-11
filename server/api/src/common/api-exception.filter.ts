import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'
import { captureException, log } from './structured-logger.js'

@Catch()
export class ApiExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<{ status: (code: number) => { send: (body: unknown) => void } }>()
    const request = host.switchToHttp().getRequest<{ url?: string; headers?: Record<string, unknown>; zedarcRequestId?: string }>()
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR
    const requestId = request.zedarcRequestId ?? (typeof request.headers === 'object' && request.headers !== null ? request.headers['x-request-id'] : undefined)
    if (status >= 500) captureException(exception, { requestId, path: request.url, statusCode: status })
    else log('warn', 'http.client_error', { requestId, path: request.url, statusCode: status })
    const raw = exception instanceof HttpException ? exception.getResponse() : undefined
    const message = typeof raw === 'string'
      ? raw
      : typeof raw === 'object' && raw !== null && 'message' in raw
        ? (raw as { message: string | string[] }).message
        : exception instanceof Error ? exception.message : 'Internal server error'
    const code = status >= 500 ? 'INTERNAL_SERVER_ERROR' : exception instanceof HttpException ? exception.name.replace(/Exception$/, '').toUpperCase() : 'INTERNAL_SERVER_ERROR'
    response.status(status).send({ error: { code, status, message: status >= 500 ? 'Internal server error' : message, path: request.url ?? '', requestId, timestamp: new Date().toISOString() } })
  }
}

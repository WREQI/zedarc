import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable, tap } from 'rxjs'

/**
 * Compatibility-first response contract: successful payloads are deliberately
 * not wrapped, so existing clients keep receiving arrays and domain objects.
 */
@Injectable()
export class ApiResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(tap(() => {
      const response = context.switchToHttp().getResponse<{ header: (name: string, value: string) => void }>()
      response.header('X-API-Contract-Version', '1')
    }))
  }
}

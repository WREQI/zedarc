import { Injectable, Logger } from '@nestjs/common'

export interface SmsProvider {
  sendVerificationCode(phone: string, code: string): Promise<void>
}

@Injectable()
export class MockSmsProvider implements SmsProvider {
  async sendVerificationCode(phone: string, code: string) {
    if (process.env.NODE_ENV !== 'production') Logger.log(`[mock-sms] ${phone}: ${code}`, 'MockSmsProvider')
  }
}

/** Generic HTTP adapter for a real SMS gateway. The gateway contract is intentionally small:
 * POST SMS_PROVIDER_URL with { phone, code, templateId } and a 2xx response means success.
 */
@Injectable()
export class HttpSmsProvider implements SmsProvider {
  async sendVerificationCode(phone: string, code: string) {
    const url = process.env.SMS_PROVIDER_URL
    const apiKey = process.env.SMS_PROVIDER_API_KEY
    const templateId = process.env.SMS_TEMPLATE_ID
    if (!url || !apiKey || !templateId) throw new Error('SMS provider is not fully configured')
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ phone, code, templateId }),
    })
    if (!response.ok) throw new Error(`SMS provider returned ${response.status}`)
  }
}

export function createSmsProvider(): SmsProvider {
  return process.env.SMS_PROVIDER === 'http' ? new HttpSmsProvider() : new MockSmsProvider()
}

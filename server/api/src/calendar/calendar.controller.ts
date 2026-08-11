import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { ApiQuery, ApiTags } from '@nestjs/swagger'
import { calendarTypes, CalendarService, type CalendarEventType } from './calendar.service.js'

@ApiTags('calendar')
@Controller('api/financial-calendar')
export class CalendarController {
  constructor(private readonly calendar: CalendarService) {}

  @Get()
  @ApiQuery({ name: 'date', required: false })
  @ApiQuery({ name: 'startDate', required: false })
  @ApiQuery({ name: 'endDate', required: false })
  @ApiQuery({ name: 'type', required: false, enum: calendarTypes })
  @ApiQuery({ name: 'limit', required: false })
  list(@Query('date') date?: string, @Query('startDate') startDate?: string, @Query('endDate') endDate?: string, @Query('type') type?: string, @Query('limit') limit?: string) {
    const parsedType = type ? this.parseType(type) : undefined
    const dates = { date: this.parseDate(date, 'date'), startDate: this.parseDate(startDate, 'startDate'), endDate: this.parseDate(endDate, 'endDate') }
    if (dates.startDate && dates.endDate && dates.startDate > dates.endDate) throw new BadRequestException('startDate 不能晚于 endDate')
    return this.calendar.list({ ...dates, type: parsedType, limit: this.parseLimit(limit) })
  }

  private parseType(value: string): CalendarEventType {
    if (!calendarTypes.includes(value as CalendarEventType)) throw new BadRequestException(`type 必须是 ${calendarTypes.join(', ')}`)
    return value as CalendarEventType
  }

  private parseDate(value: string | undefined, name: string) {
    if (value === undefined || value === '') return undefined
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new BadRequestException(`${name} 必须是 YYYY-MM-DD`)
    const date = new Date(`${value}T00:00:00Z`)
    if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) throw new BadRequestException(`${name} 不是有效日期`)
    return value
  }

  private parseLimit(value?: string) {
    if (value === undefined || value === '') return 500
    if (!/^\d+$/.test(value) || Number(value) < 1 || Number(value) > 500) throw new BadRequestException('limit 必须在 1-500 之间')
    return Number(value)
  }
}

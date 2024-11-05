import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingDto } from './create-booking.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
  @IsOptional()
  @IsString()
  EventID?: string;

  @IsOptional()
  @IsString()
  EventName?: string;

  @IsOptional()
  EventDate?: Date;

  @IsOptional()
  @IsString()
  GuestName?: string;

  @IsOptional()
  @IsString()
  GuestEmail?: string;

  @IsOptional()
  GuestCount?: number;

  @IsOptional()
  @IsString()
  SpecialRequest?: string;
}
